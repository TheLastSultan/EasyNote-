import React from 'react';
import { login } from '../../actions/session_actions';

class DemoButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: "demo", password: "demopassword"}
    this.handleDemoLogin = this.handleDemoLogin.bind(this)
  }

  handleDemoLogin(e) {
    e.preventDefault();
    // dispatch(login(this.state));
    this.props.login(this.state)

  }

  render() {
    return (
      <div>
        <button className="demo-button" onClick={this.handleDemoLogin}>Demo Login</button>
      </div>
    )
  }
}

export default DemoButton;
