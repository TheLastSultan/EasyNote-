import React from 'react';
import { connect } from 'react-redux';
import NavSideBar from './nav_side_bar';
import { logout } from '../../actions/session_actions'
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  // 
  return {
    currentUser: state.session.currentUser,
    modal: ownProps.modal
  }
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NavSideBar));
