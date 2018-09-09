import React from 'react';
import NotesIndex from './notes_index';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { deleteNote, fetchNote } from '../../actions/note_actions'

const mapStateToProps = (state, ownProps) => {
  const tagId = parseInt(ownProps.match.params.tagId);
  const notes = Object.values(state.entities.notes).filter(note => note.tagsID.includes(tagId));
  const formType = "tagNotes"
  // 
  const tags = state.entities.tags
  return { notes, formType, tagId, tags }
};

// Need to add more here
const mapDispatchToProps = dispatch => ({
  deleteNote: (id) => dispatch(deleteNote(id)),
  fetchNote: (id) => dispatch(fetchNote(id))
});


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NotesIndex));
