import * as TaggingApiUtil from '../util/tagging_api_util';

import { fetchAllTags } from './tag_actions';
import { fetchAllNotes } from './note_actions';

// need .then and .then here??? might have to come back
export const createTagging = (tagging) => dispatch => {
  TaggingApiUtil.createTagging(tagging).then(
    () => {
      dispatch(fetchAllTags());
      dispatch(fetchAllNotes());
    });
};
