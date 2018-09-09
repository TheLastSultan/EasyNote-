import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { Link } from 'react-router-dom'
import SessionForm from './session_form';

const mapStateToProps = state => ({
  info: { username: "", password: "" },
  errors: state.errors,
  formType: "Login"
});

const mapDispatchToProps = dispatch => ({
  processForm: (user) => dispatch(login(user)),
  login: (user) => dispatch(login(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);


// State:
// {
//   session: {
//     currentUser: {
//       id: 1,
//       username: 'breakfast'
//     }
//   },
//   errors: {
//     session: []
//   }
// }
