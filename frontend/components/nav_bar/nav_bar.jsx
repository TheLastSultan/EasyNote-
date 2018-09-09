import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.currentUser;
  }

  render() {
    return (
      <div className="nav-bar">
        <div className="logo">
          <a className="nav-logo" href="/"></a>
          <h3 className="nav-bar-title">EasyNote</h3>
        </div>
        <Link className="nav-bar-singup" to='/signup'>Sign up for free</Link>
      </div>
    )
  }
}

export default NavBar;
