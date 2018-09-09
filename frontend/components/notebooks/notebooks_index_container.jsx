import React from 'react';
import NotebooksIndex from './notebooks_index';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchAllNotebooks, deleteNotebook, fetchNotebook } from '../../actions/notebook_actions'

const mapStateToProps = state => {
  // 
  return {
    notebooks: Object.values(state.entities.notebooks),
    notes: Object.values(state.entities.notes),
  }
};

// Need to add more here
const mapDispatchToProps = dispatch => ({
  fetchAllNotebooks: () => dispatch(fetchAllNotebooks()),
  deleteNotebook: (id) => dispatch(deleteNotebook(id)),
  fetchNotebook: (id) => dispatch(fetchNotebook(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotebooksIndex);
