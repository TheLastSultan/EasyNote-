import React from 'react';
import { NavLink, Link, withRouter } from 'react-router-dom';


class TagsIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.tag;
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleRemoveModal = this.handleRemoveModal.bind(this);
  }

  handleClick(e) {
    // 
    e.preventDefault();
    this.props.history.push(`/tags/${this.props.tag.id}`);
  }

  handleDelete(e) {
    // add this so that by clicking delete, modal would still exist
    e.stopPropagation();
    this.props.deleteTag(this.props.tag.id)
    // this.props.history.push('/tags')
    // .then(() => {
    //    // this.props.fetchAllTags();
    //    this.props.history.push('/tags');
    //  }
    // );
    // 
  }

  handleRemoveModal(e) {
    e.preventDefault();
    const modals = document.getElementsByClassName("is-open");
    // ;
    for(let i = 0; i < modals.length; i++) {
        modals[i].classList.remove("is-open");
        // this would go back to main and remove modal
        this.props.history.push(`/tags/${this.props.tag.id}/notes`)
    }
  }

  render() {
    // remove Link for now to make sure layout is fine
    // Need to modify Link to and button event handler
    return (
      <div className="tags-index-wrapper">
        <Link to={`/tags/${this.props.tag.id}/notes`} onClick={this.handleRemoveModal}>
          <div className="tags-index-item" >

            <button>
            <p className="tag-name">{this.props.tag.name}</p>
            <p className="tag-notes">{this.props.notes.length}</p>
            </button>
            <i className="material-icons tag-delete-icon" onClick={this.handleDelete}>delete_forever</i>

          </div>
        </Link>
      </div>
    )
  }
}

export default withRouter(TagsIndexItem);
