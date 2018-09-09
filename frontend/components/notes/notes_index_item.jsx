import React from 'react';
import { NavLink, Link, withRouter } from 'react-router-dom';


class NotesIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.note;
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.selectItemLink = this.selectItemLink.bind(this);
  }

  handleClick(e) {
    // 
    e.preventDefault();

    // this would route you over to another edit page
    //
    // this.props.action().then(() => this.props.history.push(`/notes/${this.state.id}`))
    // 
    // change from this.state.id to this.props.note.id to udpate to correct page
    this.props.history.push(`/notes/${this.props.note.id}`);
  }

  handleDelete() {
    if (this.props.notebookId || this.props.tagId) {
      this.props.deleteNote(this.props.note.id).then(() => {
         // this.props.action(this.props.notebookId);
         // this.props.history.push(`notebooks/${this.props.notebookId}/notes`);
       }
      );
    } else {
      this.props.deleteNote(this.props.note.id).then(() => {
         // this.props.action();
         // clear the delete info on text editor
         this.props.history.push('/notes');
       }
      );
    }
  }

  selectItemLink() {
    if (this.props.notebookId) {
      return `/notebooks/${this.props.notebookId}/notes/${this.props.note.id}`
    } else if(this.props.tagId) {
      return `/tags/${this.props.tagId}/notes/${this.props.note.id}`
    } else {
      return `/notes/${this.props.note.id}`
    }
  }

  render() {
    return (
      <div className="notes-index-wrapper">
        <Link to={this.selectItemLink()}>
          <div className="notes-index-item" >
            <i className="material-icons delete-icon" onClick={this.handleDelete}>delete_forever</i>
            <div>
              <h3>{this.props.note.title}</h3>
              <p>{this.props.note.body}</p>
            </div>
          </div>
        </Link>
      </div>
    )
  }
}

export default withRouter(NotesIndexItem);
