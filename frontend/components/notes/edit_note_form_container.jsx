import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import EditNoteForm from './edit_form';
import { fetchNote, updateNote } from '../../actions/note_actions';
import { fetchAllNotebooks } from '../../actions/notebook_actions';
import merge from 'lodash/merge';
import { createTag, fetchTag } from '../../actions/tag_actions';
import { createTagging } from '../../actions/tagging_actions';


function getTagsName(state, note) {
  const tagsID = note.tagsID;
  const tags = Object.values(state.entities.tags).filter((tag) => tagsID.includes(tag.id));
  const result = tags.map(tag => tag.name);
  // 
  return result
}

const mapStateToProps = (state, ownProps) => {
  // 
  const defaultNote = {title:"", body:"", body_with_style:"", notebook_id:null, tagsID: []}
  const note1 = state.entities.notes[ownProps.match.params.noteId] || defaultNote;
  const notebooks = state.entities.notebooks;
  const formType = "Edit form"
  const tagsName = getTagsName(state, note1) || []
  // 
  const note = merge(note1, {tagsName: tagsName})
  const tags = Object.values(state.entities.tags)
  return { note, notebooks, formType, tags };
}

const mapDispatchToProps = dispatch => ({
  fetchNote: (id) => dispatch(fetchNote(id)),
  action: (note) => dispatch(updateNote(note)),
  createTag: (tag) => dispatch(createTag(tag)),
  createTagging: (tagging) => dispatch(createTagging(tagging)),
  fetchTag: (id) => dispatch(fetchTag(id)),
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(EditNoteForm));
