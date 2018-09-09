import * as NoteApiUtil from '../util/note_api_util';

export const RECEIVE_ALL_NOTES = "RECEIVE_ALL_NOTES";
export const RECEIVE_NOTE = "RECEIVE_NOTE";
export const REMOVE_NOTE = "REMOVE_NOTE";
export const RECEIVE_PARTIAL_NOTES = "RECEIVE_PARTIAL_NOTES";

export const fetchAllNotes = () => dispatch => (
  NoteApiUtil.fetchAllNotes().then(notes => dispatch(receiveAllNotes(notes)))
);

export const receiveAllNotes = notes => ({
  type: RECEIVE_ALL_NOTES,
  notes
});

export const fetchNote = (id) => dispatch => (
  NoteApiUtil.fetchNote(id).then(note => dispatch(receiveNote(note)))
);

export const receiveNote = note => ({
  type: RECEIVE_NOTE,
  note
});

export const createNote = (note) => dispatch => (
  NoteApiUtil.createNote(note).then(newNote => dispatch(receiveNote(newNote)))
);

export const updateNote = (note) => dispatch => (
  NoteApiUtil.updateNote(note).then(udpatedNote => dispatch(receiveNote(udpatedNote)))
);

export const deleteNote = (id) => dispatch => (
  NoteApiUtil.deleteNote(id).then(note => dispatch(removeNote(id)))
);

export const removeNote = noteId => ({
  type: REMOVE_NOTE,
  noteId
});

// this is for fetching notes from a notebook
export const fetchNotebookNotes = (notebookId) => dispatch => (
  NoteApiUtil.fetchNotebookNotes(notebookId).then(notes => dispatch(receivePatialNotes(notes)))
);

export const receivePatialNotes = notes => ({
  type: RECEIVE_PARTIAL_NOTES,
  notes
});
