import {
  RECEIVE_ALL_NOTEBOOKS,
  RECEIVE_NOTEBOOK,
  REMOVE_NOTEBOOK,
} from '../actions/notebook_actions';
import merge from 'lodash/merge';

const NotebooksReducer = (oldState={}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_NOTEBOOKS:
      // remove merging oldState to avoid caching previous users notebooks
      return merge({}, action.notebooks);
    case RECEIVE_NOTEBOOK:
      return merge({}, oldState, {[action.notebook.id]: action.notebook});
    case REMOVE_NOTEBOOK:
      const newState = merge({}, oldState);
      delete newState[action.notebookId];
      return newState;
    default:
      return oldState;
  }
};

export default NotebooksReducer;
