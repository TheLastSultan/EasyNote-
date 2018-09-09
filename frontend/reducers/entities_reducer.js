import { combineReducers } from 'redux';
import NotesReducer from './notes_reducer';
import NotebooksReducer from './notebooks_reducer';
import TagsReducer from './tags_reducer';


const entitiesReducer = combineReducers({
  notes: NotesReducer,
  notebooks: NotebooksReducer,
  tags: TagsReducer
});

export default entitiesReducer;
