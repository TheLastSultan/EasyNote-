import * as TagApiUtil from '../util/tag_api_util';

export const RECEIVE_ALL_TAGS = "RECEIVE_ALL_TAGS";
export const RECEIVE_TAG = "RECEIVE_TAG";
export const REMOVE_TAG = "REMOVE_TAG";

export const fetchAllTags = () => dispatch => (
  TagApiUtil.fetchAllTags().then(tags => dispatch(receiveAllTags(tags)))
);

export const receiveAllTags = tags => ({
  type: RECEIVE_ALL_TAGS,
  tags
});

export const fetchTag = (id) => dispatch => (
  TagApiUtil.fetchTag(id).then(tag => dispatch(receiveTag(tag)))
);

export const receiveTag = tag => ({
  type: RECEIVE_TAG,
  tag
});

export const createTag = (tag) => dispatch => (
  TagApiUtil.createTag(tag).then(newTag => dispatch(receiveTag(newTag)))
);

export const deleteTag = (id) => dispatch => (
  TagApiUtil.deleteTag(id).then(tag => dispatch(removeTag(id)))
);

export const removeTag = tagId => ({
  type: REMOVE_TAG,
  tagId
});
