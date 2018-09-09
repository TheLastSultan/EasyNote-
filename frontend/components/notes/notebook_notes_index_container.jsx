import React from 'react';
import NotesIndex from './notes_index';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchNotebookNotes, deleteNote, fetchNote } from '../../actions/note_actions'

const mapStateToProps = (state, ownProps) => {
  const notebookId = parseInt(ownProps.match.params.notebookId);
  const notes = Object.values(state.entities.notes).filter(note => note.notebook_id === notebookId);
  const formType = "notebookNotes"
  // 
  const notebooks = state.entities.notebooks
  return { notes, formType, notebookId, notebooks }
};

// Need to add more here
const mapDispatchToProps = dispatch => ({
  action: (notebookId) => dispatch(fetchNotebookNotes(notebookId)),
  deleteNote: (id) => dispatch(deleteNote(id)),
  fetchNote: (id) => dispatch(fetchNote(id))
});


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NotesIndex));
