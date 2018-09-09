import * as NotebookApiUtil from '../util/notebook_api_util';

export const RECEIVE_ALL_NOTEBOOKS = "RECEIVE_ALL_NOTEBOOKS";
export const RECEIVE_NOTEBOOK = "RECEIVE_NOTEBOOK";
export const REMOVE_NOTEBOOK = "REMOVE_NOTEBOOK";

export const fetchAllNotebooks = () => dispatch => (
  NotebookApiUtil.fetchAllNotebooks().then(notebooks => dispatch(receiveAllNotebooks(notebooks)))
);

export const receiveAllNotebooks = notebooks => ({
  type: RECEIVE_ALL_NOTEBOOKS,
  notebooks
});

export const fetchNotebook = (id) => dispatch => (
  NotebookApiUtil.fetchNotebook(id).then(notebook => dispatch(receiveNotebook(notebook)))
);

export const receiveNotebook = notebook => ({
  type: RECEIVE_NOTEBOOK,
  notebook
});

export const createNotebook = (notebook) => dispatch => (
  NotebookApiUtil.createNotebook(notebook).then(newNotebook => dispatch(receiveNotebook(newNotebook)))
);

export const updateNotebook = (notebook) => dispatch => (
  NotebookApiUtil.updateNotebook(notebook).then(udpatedNotebook => dispatch(receiveNotebook(udpatedNotebook)))
);

export const deleteNotebook = (id) => dispatch => (
  NotebookApiUtil.deleteNotebook(id).then(notebook => dispatch(removeNotebook(id)))
);

export const removeNotebook = notebookId => ({
  type: REMOVE_NOTEBOOK,
  notebookId
});
