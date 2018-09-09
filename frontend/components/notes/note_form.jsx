import React from 'react';
import ReactQuill from 'react-quill';
import { Redirect, withRouter } from 'react-router-dom';
import merge from 'lodash/merge';


class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    // const defaultState = this.props.note;
    this.state = merge(this.props.note, {currentTagName: ""});
    //
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.notebooksOpt = this.notebooksOpt.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.allowSubmit = this.allowSubmit.bind(this);
    this.selectDoneButton = this.selectDoneButton.bind(this);
    this.handleAddTag = this.handleAddTag.bind(this);
    this.handleTagChange = this.handleTagChange.bind(this);
    this.tagExists = this.tagExists.bind(this);
    //
  }

  componentDidMount() {
    // this.props.fetchAllNotebooks;
  }

  componentWillReceiveProps(nextProps) {
    if ((nextProps.note.id !== undefined) && (this.props.match.params.noteId !== nextProps.match.params.noteId)) {
      // after fixing state shape of show, this setState works
      this.setState(nextProps.note)

      // this.state = nextProps.note;


    }

    //
    // nextProps.match.params.noteId -> string
    // nextPtops.note.id -> integer
  }

  tagExists(e) {
    // const context = this;
    //
    for(let i=0; i < this.props.tags.length ; i++) {
      if(this.props.tags[i].name === e.target.value) {
        return this.props.tags[i].id
      }
    }

    return false
  }

  handleAddTag(e) {
    //
    if(e.key === "Enter") {
      // const context = this
      //
      const check = this.tagExists(e)
      //
      // compare with entities data if not there we create
      if (check) {
        this.props.fetchTag(check).then((tag) => {
          // avoid duplicate tags:
          if(!this.state.tagsName.includes(tag.tag.name)) {
            const tagsID = this.state.tagsID.concat(tag.tag.id)
            const tagsName =
            this.state.tagsName.concat(tag.tag.name)
            this.setState({tagsID, tagsName, currentTagName: ""});
          } else {
            this.setState({currentTagName: ""});
          }

        })

      } else {

        this.props.createTag({name: e.target.value}).then((tag) => {
          // update the tagsID array for the note
          const tagsID = this.state.tagsID.concat(tag.tag.id)
          const tagsName =
          this.state.tagsName.concat(tag.tag.name)
          this.setState({tagsID, tagsName, currentTagName: ""});
          //
        })

      }

    }
  }

  handleTagChange(e) {
    this.setState({currentTagName: e.target.value});
  }

  handleChange(type) {
    return e => {
      this.allowSubmit(e);
      this.setState({[type]: e.target.value});
    }
  }

  handleSelectChange(e) {
    const selectedVal = parseInt(e.target.value) || null
    this.setState({notebook_id: selectedVal})
  }

  // react-quill onChange handler
  // value here is always pointing to value in react component
  handleBodyChange(value, delta, source, editor) {
    // Need to trim here otherwise it would complain about the out of range
    const plainText = editor.getText().trim();
    const newBody = Object.assign(this.state, {
      body: plainText,
      body_with_style: value
     } );
    //
    this.setState(newBody);
  }

  handleSubmit(e) {
    //
    e.preventDefault();
    // get the selected notebook id
    const notebookEl = document.getElementsByClassName("selected-notebook");
    //
    const selectedValue = (notebookEl[0].selectedIndex === 0) ? null : parseInt(notebookEl[0].value);

    // const finalState = {
      // id is needed here otherwise can't save
    //   title: this.state.title,
    //   body: this.state.body,
    //   body_with_style: this.state.body_with_style,
    //   notebook_id: selectedValue
    // }

    const finalState = merge({}, this.state, {notebook_id: selectedValue})
    // Temp commented out if testing is needed
    // if (this.props.location.pathname !== "/notes") {
    //   this.props.action(finalState).then(() => this.props.history.push('/notes'));
    // } else {
    //   this.props.action(finalState).then(() => {
    //     this.setState({title:"", body:"", body_with_style:"", notebook_id:null});
    //   });
    // }
    // const context = this
    if (this.props.location.pathname !== "/notes") {
      this.props.action(finalState).then((note) => {

        //
        this.state.tagsID.forEach(id => this.props.createTagging({note_id: note.note.id, tag_id: id}));

       })
       .then(() => this.props.history.push('/notes'));
    } else {
      this.props.action(finalState).then((note) => {
    
        //
        this.state.tagsID.forEach(id => this.props.createTagging({note_id: note.note.id, tag_id: id}));

       }).then(() => {
        this.setState({title:"", body:"", body_with_style:"", notebook_id:null});
      });
    }

  }

  allowSubmit(e) {
    const createButton =  document.getElementsByClassName("done-button");
    for(let i = 0; i < createButton.length; i++) {
      if(e.target.value && e.target.value.trim() !== "") {
        createButton[i].setAttribute("type", "button");
      } else {
        createButton[i].setAttribute("type", "hidden");
      }
    }
    //
  }

  selectDoneButton() {
    // if(this.props.formType === "Edit form") {
    //   return "button";
    // } else {
    //   return "hidden";
    // }
    if(this.props.formType === "Edit form") {
      return (
        <input
          className="done-button" onClick={this.handleSubmit}
          type="button"
          value="Done"
        />
      );
    } else {
      return (
        <input
          className="done-button" onClick={this.handleSubmit}
          type="hidden"
          value="Done"
        />
      );
    }
  }

  handleCancel(e) {
    e.preventDefault();
    //
    this.setState(this.props.note);
    this.props.history.push('/notes');
  }

  // select tag of available notebooks
  notebooksOpt() {
    //
    return (
      Object.values(this.props.notebooks).map((notebook,idx) =>
        <option
          value={notebook.id}
          key={idx}
        >{notebook.title}</option>)
    )
  }

  render () {
    // customize toolbar here
    const toolbar = [
      // [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      [{ font: [] }],
      [{ size: ["small", false, "large", "huge"] }],
      [{ color: [] }, { background: [] }],
      ["bold", "italic", "underline", "strike"],
      // [{ script: "sub" }, { script: "super" }],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ align: [] }],
      [{ 'indent': '-1'}, { 'indent': '+1' }],
      ["blockquote", "code-block"],
      ["link", "image"],
      ['clean']
    ];

    // create lists of tags, can create an element for it
    const tags = this.state.tagsName.map((el, idx) => <li className="tag-item-on-form" key={idx}>{el}</li>);

    return (
      <div className="rich-text-editor">


        <div className="rich-text-editor-button-area">


          {this.selectDoneButton()}
          <button className="cancel-button" onClick={this.handleCancel}>Cancel</button>
        </div>
        <div className="rich-text-editor-area">


          <div className="editor-container">

            <div className="custom-edit-area">

              <select className="selected-notebook" value={this.state.notebook_id || ""} onChange={this.handleSelectChange}>
              <option value=""> -Notebook- </option>
              {this.notebooksOpt()}
              </select>

              <div className="tag-area-on-form">
                <input
                className="tag-add-button-on-form"
                type="text"
                value={this.state.currentTagName}
                onChange={this.handleTagChange}
                onKeyPress={this.handleAddTag}
                placeholder="enter to + tag"
                />
                <ul>
                  {tags}
                </ul>
              </div>

            </div>

            <input
            className="note-title"
            type="text"
            value={this.state.title}
            placeholder="Title your note"
            onChange={this.handleChange('title')}
            />

            <ReactQuill
              value={this.state.body_with_style || ""}
              modules={{toolbar}}
              placeholder="Start Typing here..."
              onChange={this.handleBodyChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(NoteForm);
