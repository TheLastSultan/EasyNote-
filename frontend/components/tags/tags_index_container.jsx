import React from 'react';
import TagsIndex from './tags_index';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchAllTags, deleteTag, fetchTag } from '../../actions/tag_actions'

const mapStateToProps = state => {
  // 
  return {
    tags: Object.values(state.entities.tags),
    notes: Object.values(state.entities.notes),
  }
};

// Need to add more here
const mapDispatchToProps = dispatch => ({
  fetchAllTags: () => dispatch(fetchAllTags()),
  deleteTag: (id) => dispatch(deleteTag(id)),
  fetchTag: (id) => dispatch(fetchTag(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TagsIndex);
