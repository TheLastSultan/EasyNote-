import React from 'react';
import { NavLink, Link, withRouter } from 'react-router-dom';


class NotebooksIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.notebook;
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleRemoveModal = this.handleRemoveModal.bind(this);
  }

  handleClick(e) {
    // 
    e.preventDefault();
    this.props.history.push(`/notebooks/${this.props.notebook.id}`);
  }

  handleDelete(e) {
    // add this so that by clicking delete, modal would still exist
    e.stopPropagation();
    this.props.deleteNotebook(this.props.notebook.id).then(() => {
      // either steps is to make sure the notes count are correct after deleting notebooks
      // this.props.fetchAllNotebooks();
      this.props.history.push('/notebooks');
      }
    );
  }

  handleRemoveModal(e) {
    e.preventDefault();
    const modals = document.getElementsByClassName("is-open");
    // ;
    for(let i = 0; i < modals.length; i++) {
        modals[i].classList.remove("is-open");
        // this would go back to main and remove modal
        this.props.history.push(`/notebooks/${this.props.notebook.id}/notes`)
    }
  }

  render() {
    // remove Link for now to make sure layout is fine
    return (
      <div className="notebooks-index-wrapper">
        <Link to={`/notebooks/${this.props.notebook.id}/notes`} onClick={this.handleRemoveModal}>
          <div className="notebooks-index-item" >
            <i className="material-icons notebook-delete-icon" onClick={this.handleDelete}>delete_forever</i>

            <h3>{this.props.notebook.title}</h3>
            <p>{this.props.notes.length} notes</p>

          </div>
        </Link>
      </div>
    )
  }
}

export default withRouter(NotebooksIndexItem);
