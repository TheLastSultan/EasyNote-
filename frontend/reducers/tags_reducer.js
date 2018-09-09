import {
  RECEIVE_ALL_TAGS,
  RECEIVE_TAG,
  REMOVE_TAG,
} from '../actions/tag_actions';
import merge from 'lodash/merge';

const TagsReducer = (oldState={}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_TAGS:
      // remove merging oldState to avoid caching previous users tags
      return merge({}, action.tags);
    case RECEIVE_TAG:
      return merge({}, oldState, {[action.tag.id]: action.tag});
    case REMOVE_TAG:
      const newState = merge({}, oldState);
      delete newState[action.tagId];
      return newState;
    default:
      return oldState;
  }
};

export default TagsReducer;
