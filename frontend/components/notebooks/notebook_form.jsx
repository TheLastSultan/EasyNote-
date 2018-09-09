import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class NotebookForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.dataType;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.allowSubmit = this.allowSubmit.bind(this);
    this.selectForm = this.selectForm.bind(this);
    this.selectTitle = this.selectTitle.bind(this);
  }

  update(field) {
    return (e) => {
      // 
      this.allowSubmit(e);
      this.setState({[field]: e.target.value});
    };
  }

  allowSubmit(e) {
    const createButton =  document.getElementsByClassName("create-notebook-button");
    for(let i = 0; i < createButton.length; i++) {
      if(e.target.value && e.target.value.trim() !== "") {
        createButton[i].disabled = false;
      } else {
          createButton[i].disabled = true;
      }
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state).then(() => this.props.history.push(`/${this.props.formType}`));
    // was '/'
  }

  selectForm() {
    // 
    if(this.props.formType === "tags") {
      return (
        <input className="notebook-title-input"
          type="text"
          value={this.state.name}
          placeholder="Name your tag"
          onChange={this.update('name')} />
      )
    } else {
      return (
        <input className="notebook-title-input"
          type="text"
          value={this.state.title}
          placeholder="Title your notebook"
          onChange={this.update('title')} />
      )
    }
  }

  selectTitle() {
    if(this.props.formType === "tags") {
      return (
        <div className="notebook-header-div">
          <i className="material-icons create-notebook-icon">book</i>
          <h3 className="notebook-form-header">CREATE Tag</h3>
        </div>
      )
    } else {
      return (
        <div className="notebook-header-div">
          <i className="material-icons create-notebook-icon">import_contacts</i>
          <h3 className="notebook-form-header">CREATE NOTEBOOK</h3>
        </div>
      )
    }
  }

  render () {
    return (
      <div className="notebook-form-wrapper">
        <div className="notebook-form">
          {this.selectTitle()}

          <form onSubmit={this.handleSubmit}>
            {this.selectForm()}
            <div className="notebook-form-button">
              <Link className="cancel-notebook-add" to={`/${this.props.formType}`} >Cancel</Link>
              <input className="create-notebook-button" type="submit" value={`Create ${this.props.formType}`} disabled />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(NotebookForm);
