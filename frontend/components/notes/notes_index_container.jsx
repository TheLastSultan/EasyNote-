import React from 'react';
import NotesIndex from './notes_index';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchAllNotes, deleteNote, fetchNote } from '../../actions/note_actions'

const mapStateToProps = state => ({
  notes: Object.values(state.entities.notes),
  formType: "notes",
  notebookId: null
});

// Need to add more here
const mapDispatchToProps = dispatch => ({
  action: () => dispatch(fetchAllNotes()),
  deleteNote: (id) => dispatch(deleteNote(id)),
  fetchNote: (id) => dispatch(fetchNote(id))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotesIndex);
