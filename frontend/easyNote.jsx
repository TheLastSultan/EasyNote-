import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root';

// keep pinging the app
var http = require("http");
setInterval(function() {
    http.get("http://easynote.herokuapp.com");
}, 300000); // every 5 minutes (300000)

// import {createTag, fetchTag, fetchAllTags, deleteTag} from './actions/tag_actions'
// import {fetchNotebookNotes, fetchAllNotes, fetchNote} from './actions/note_actions'
// import {createNotebook, updateNotebook, fetchNotebook, fetchAllNotebooks, deleteNotebook} from './actions/notebook_actions'
// import {login, logout, signup} from './actions/session_actions'

document.addEventListener('DOMContentLoaded', () => {
  let store = undefined;
  if (window.currentUser) {
    const preloadedState = {
      session: {
        currentUser: window.currentUser
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);

  // window.getState = store.getState;
  // window.dispatch = store.dispatch;

  // window.createTag = createTag;
  // window.fetchTag = fetchTag;
  // window.fetchAllTags = fetchAllTags;
  // window.deleteTag = deleteTag;
  // window.fetchAllNotebooks = fetchAllNotebooks;
  // window.updateNotebook = updateNotebook;
  // window.deleteNotebook = deleteNotebook;
});
