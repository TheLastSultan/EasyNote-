import React from 'react';
import NotesIndexItem from './notes_index_item';

class NotesIndex extends React.Component {
  constructor(props) {
    super(props);
    // this.state = this.props.notes
    this.notesCount = this.notesCount.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.selectIndexHeader = this.selectIndexHeader.bind(this);
  }

  componentDidMount() {
    if (this.props.formType === "notebookNotes") {
      this.props.action(this.props.notebookId);
    } else if (this.props.formType === "notes"){
      this.props.action();
    }
  }

  // Whenever a new post is created
  // Should try to modify this part...
  componentWillReceiveProps(nextProps) {
    // take out this part otherwise it would try to multiple request all notes
    // if (this.props.notes.length !== nextProps.notes.length) {
    // this.props.action();
    // }
    // 

  }

  notesCount() {
    return this.props.notes.length;
  }

  handleClick(e) {
    // 
    // this.props.fetchNote()
  }

  selectIndexHeader() {
    if (this.props.notebookId) {
      const titleArea = document.getElementsByClassName("notes-index-title");
      for(let i = 0; i < titleArea.length; i++) {
          titleArea[i].classList.add("notebook-notes-index-title");
      }

      let notebookTitle = "NOTEBOOK"
      if (this.props.notebooks[this.props.notebookId]) {
        notebookTitle = this.props.notebooks[this.props.notebookId].title
      }

      // const notebookTitle = "NOTEBOOK"
      return `${notebookTitle}`

    } else if (this.props.tagId) {
      let tagName = "TAG"
      if (this.props.tags[this.props.tagId]) {
        tagName = `TAG: ${this.props.tags[this.props.tagId].name}`
      }
      return tagName
    } else {
      return "NOTES"
    }
  }

  render () {
    // 
    const noteItems = this.props.notes.map((note, idx) => <NotesIndexItem
      key={idx}
      note={note}
      deleteNote={this.props.deleteNote}
      fetchNote={this.props.fetchNote}
      action={this.props.action}
      notebookId={this.props.notebookId}
      tagId={this.props.tagId}
    />).reverse();
    return (
      <div>
        <ul>
          <li className="notes-index-title">
            <h3>{this.selectIndexHeader()}</h3>
            <p>{this.notesCount()} notes</p>
          </li>
          <li>
          {noteItems}
          </li>
        </ul>
      </div>
    );
  }
}

export default NotesIndex;
