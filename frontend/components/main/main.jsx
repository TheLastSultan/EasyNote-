import React from 'react';
import NavSideBarContainer from '../nav_side_bar/nav_side_bar_container';
import NotesIndexContainer from '../notes/notes_index_container';
import EditNoteFormContainer from '../notes/edit_note_form_container';
import CreateNoteFormContainer from '../notes/create_note_form_container';
import NotebookNotesIndexContainer from '../notes/notebook_notes_index_container';
import TagNotesIndexContainer from '../notes/tag_notes_index_container';
import { fetchAllNotes, fetchNote } from '../../actions/note_actions'


class Main extends React.Component {
  constructor(props) {
    super(props);
    // this is to determine how if modal should open
    this.modalOpen = (this.props.match.path === "/notebooks" || this.props.match.path === "/tags") ? this.props.match.path : ""
    this.selectForm = this.selectForm.bind(this)
    this.selectIndexForm = this.selectIndexForm.bind(this)
    // 
  }

  componentWillReceiveProps(nextProps) {
    // nextProps.match.path
    // "/notebooks"
    // nextProps.match.path
    // "/notebooks/:notebookId/notes"
    // nextProps.match.params.notebookId
    // "13"
    // 
  }
  componentDidMount() {
    // ;
  }

  selectForm() {
    if(this.props.match.params.noteId) {
      return <EditNoteFormContainer />
    } else {
      return <CreateNoteFormContainer />
    }
  }

  selectIndexForm() {
    if(this.props.match.params.notebookId) {
      return <NotebookNotesIndexContainer />
    } else if(this.props.match.params.tagId) {
      return <TagNotesIndexContainer />
    } else {
      return <NotesIndexContainer />
    }
  }


  render () {
    // 
    return (
      <div className="main-page">
        <nav className="nav-side-bar-area">
          <NavSideBarContainer modal={this.modalOpen}/>
        </nav>
        <div className="notes-index-area">
          {this.selectIndexForm()}
        </div>
        <div className="notes-editing-area">
          {this.selectForm()}
        </div>
      </div>
    )
  }
}

export default Main;
