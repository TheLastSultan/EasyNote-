import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LogInFormContainer from './session_form/login_container';
import SignUpFormContainer from './session_form/signup_container';
import NavSideBarContainer from './nav_side_bar/nav_side_bar_container';
import NavBarContainer from './nav_bar/nav_bar_container'
import NotesIndexContainer from './notes/notes_index_container';
import CreateNoteFormContainer from './notes/create_note_form_container';
import EditNoteFormContainer from './notes/edit_note_form_container';
import CreateNotebookFormContainer from './notebooks/create_notebook_form_container';
import CreateTagFormContainer from './tags/create_tag_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Home from './home/home'
import Main from './main/main'



const App = () => (
  <div>
    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />

      <ProtectedRoute exact path="/tags/:tagId/notes/:noteId" component={Main} />
      <ProtectedRoute exact path="/tags/:tagId/notes" component={Main} />
      <ProtectedRoute exact path="/tags/new" component={CreateTagFormContainer} />
      <ProtectedRoute exact path="/tags" component={Main} />

      <ProtectedRoute exact path="/notebooks/new" component={CreateNotebookFormContainer} />
      <ProtectedRoute exact path="/notebooks/:notebookId/notes/:noteId" component={Main} />
      <ProtectedRoute exact path="/notebooks/:notebookId/notes" component={Main} />
      <ProtectedRoute exact path="/notebooks" component={Main} />

      <ProtectedRoute exact path="/notes/new" component={CreateNoteFormContainer} />
      <ProtectedRoute exact path="/notes/:noteId" component={Main} />
      <ProtectedRoute exact path="/notes" component={Main} />

      <AuthRoute path="/" component={Home} />
    </Switch>
  </div>
);

export default App;


// import {
//   Route,
//   Redirect,
//   Switch,
//   Link,
//   HashRouter
// } from 'react-router-dom';
