import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser)
});

// Build Auth component
// when logged in, redirect to /notes, else render component
// this is to avoid logged in user to go to signup/login form again
const Auth = ({ loggedIn, exact, path, component: Component}) => (
  <Route
    exact={exact}
    path={path}
    render={props => (
      loggedIn ? <Redirect to='/notes'/> : <Component {...props}/>
    )}
  />
)

// Build Protected component
// when logged in, render component, else redirect to signup
// this is to protect not-logged-in user to directly render '/notes'
const Protected = ({ loggedIn, exact, path, component: Component}) => (
  <Route
    exact={exact}
    path={path}
    render={props => (
      loggedIn ? <Component {...props}/> : <Redirect to='/'/>
    )}
  />
)

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));
