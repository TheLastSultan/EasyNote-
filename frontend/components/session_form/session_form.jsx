import React from 'react';
import { Link } from 'react-router-dom';
import DemoButton from './demo_button';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props.info
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.renderLink = this.renderLink.bind(this);
    this.renderPrompt = this.renderPrompt.bind(this);
  }

  handleChange(field) {
    return e => this.setState({[field]: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    // login after submit
    // clear form
    // this.props.processForm(user).then(() => this.setState({username:"", password:""}));
    // go to "/notes"
    this.props.processForm(user);
  }

  renderErrors() {
    // clear errors messages in p tag after sucessfully login
    const errorMessage = (this.props.errors.session === null) ? <p className="error-messages"></p> : <p className="error-messages">{this.props.errors.session.responseJSON}</p>
    return(
      errorMessage
    );
  }

  renderLink() {
    const linkItem = (this.props.formType === "Login") ? <Link to="/signup" className="session-link">Create Account</Link> : <Link to="/login" className="session-link">Sign In</Link>

    return linkItem;
  }

  renderPrompt() {
    const prompt = (this.props.formType === "Login") ? <p className="session-link-prompt">Don't have an account?</p> : <p to="/login" className="session-link-prompt">Already have an account?</p>

    return prompt;
  }

  render() {


    return (
      <div className="session-page">
        <a className="form-logo" href="/"></a>
        <h3 className="form-title">{this.props.formType}</h3>
        <div className="session-form-wrapper">
          <form className="session-form" onSubmit={this.handleSubmit}>
            <label>
              <input className="username"
                type="text"
                value={this.state.username}
                onChange={this.handleChange("username")}
                placeholder="Username"
              />
            </label>
            <label>
              <input className="password"
                type="password"
                value={this.state.password}
                onChange={this.handleChange("password")}
                placeholder="Password"
              />
            </label>
            <input className="submit-login"
              type="submit"
              value={this.props.formType}
            />
            <DemoButton login={this.props.login}/>
          </form>
        </div>
        {this.renderErrors()}
        {this.renderPrompt()}
        {this.renderLink()}
      </div>
    );

  }
}

export default SessionForm;
