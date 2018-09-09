import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import NotebooksIndexContainer from '../notebooks/notebooks_index_container'
import TagsIndexContainer from '../tags/tags_index_container'

class NavSideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.currentUser;
    this.handleLogout = this.handleLogout.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleRemoveModal = this.handleRemoveModal.bind(this);
    this.openModal = this.openModal.bind(this);
    // 
  }

  componentDidMount() {
    this.openModal();
    // ;
  }

  componentWillReceiveProps(nextProps) {
    // this.openModal();
    // 
  }

  openModal() {
    // 
    if (this.props.modal === "/notebooks" || this.props.modal === "/tags") {
      const modals = document.getElementsByClassName(`${this.props.modal.slice(1)}-modal-area`);
      // ;
      for(let i = 0; i < modals.length; i++) {
        if(modals[i].classList.contains("is-open") === false) {
          modals[i].classList.add("is-open");
        }
      }
    }
    // ;
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
  }

  handleClick(type) {

    return (e) => {
      e.preventDefault();
      const anotherType = (type === "tags") ? "notebooks" : "tags"
      // 
      const exModals = document.getElementsByClassName(`${anotherType}-modal-area`);
      for(let i = 0; i < exModals.length; i++) {
        if(exModals[i].classList.contains("is-open")) {
          exModals[i].classList.remove("is-open");
        }
      }

      const modals = document.getElementsByClassName(`${type}-modal-area`);
      // ;
      // whenever modal is closed, "/notes"
      // whenever modal is open, "/notebooks"
      for(let i = 0; i < modals.length; i++) {
        if(modals[i].classList.contains("is-open")) {
          modals[i].classList.remove("is-open");
          this.props.history.push("/notes")
        } else {
          modals[i].classList.add("is-open");
          this.props.history.push(`/${type}`)
        }
      }
    }
  }

  handleRemoveModal(e) {
    e.preventDefault();
    const modals = document.getElementsByClassName("is-open");
    // ;
    for(let i = 0; i < modals.length; i++) {
        modals[i].classList.remove("is-open");
    }
    this.props.history.push('/notes')
  }

  render() {
    return (
      <div>
      <div className="side-bar-area">
        <img className="side-bar-logo" src="/logo.png" alt="Logo"/>
        <ul>
          <li>
            <Link to="/notes/new"><i title="NEW NOTE" className="material-icons plus-icon" >add_circle_outline</i></Link>
          </li>
          <li>
            <Link to="/notes"><i title="NOTES" className="material-icons notes-icon" onClick={this.handleRemoveModal}>description</i></Link>
          </li>
          <li>
            <i title="NOTEBOOKS" className="material-icons notebooks-icon" onClick={this.handleClick("notebooks")}>library_books</i>
          </li>
          <li>
            <i title="TAGS" className="material-icons tags-icon" onClick={this.handleClick("tags")} >local_offer</i>
          </li>
        </ul>
        <i title="LOGOUT" className="material-icons logout-icon" onClick={this.handleLogout}>power_settings_new</i>

      </div>
        <div className="notebooks-modal-area" onClick={this.handleClick("notebooks")}>
          <NotebooksIndexContainer />
        </div>
        <div className="tags-modal-area" onClick={this.handleClick("tags")}>
          <TagsIndexContainer />
        </div>
     </div>
    )
  }
}

export default NavSideBar;
