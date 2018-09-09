import React from 'react';
import NoteForm from './note_form';
import { withRouter } from 'react-router-dom';

class EditNoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.note;
  }

  componentDidMount() {
    this.props.fetchNote(this.props.match.params.noteId);
  }

  // this part is commenting out because we change the state in NoteForm
  // componentWillReceiveProps(nextProps) {
  //   if ((nextProps.note.id !== undefined) && (this.props.match.params.noteId !== nextProps.match.params.noteId)) {
  //     this.props.fetchNote(nextProps.match.params.noteId);
  //     // this.setState(nextProps.note)
  //     // this.state = nextProps.note
  //     //
  //    
  //   }
  //   //
  //
  // }

  render() {
    const { fetchNote, action, note, createTag, createTagging, fetchTag, tags } = this.props;
    // const note = this.state;
    //
    return (
      <NoteForm
        fetchNote={fetchNote}
        action={action}
        createTag={createTag}
        fetchTag={fetchTag}
        createTagging={createTagging}
        note={note}
        notebooks={this.props.notebooks}
        tags={tags}
        formType={this.props.formType}
        />
    );
  }
}


export default withRouter(EditNoteForm);
