import React from 'react';
import NotebooksIndexItem from './notebooks_index_item';
import { Link } from 'react-router-dom';

class NotebooksIndex extends React.Component {
  constructor(props) {
    super(props);
    // this.state = this.props.notebooks
    this.handleClick = this.handleClick.bind(this);
    this.getNotes = this.getNotes.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllNotebooks();
  }

  // Whenever a new notebook is created
  // Should try to modify this part...
  componentWillReceiveProps(nextProps) {
    // if (this.props.notebooks.length !== nextProps.notebooks.length) {
    // this.props.fetchAllNotebooks();
    // }
    // 

  }

  // this would avoid the parent firing onClick event as well whenever the notebooks index is clicked
  handleClick(e) {
    // 
    // this.props.fetchNotebook()
    e.stopPropagation()
  }

  // parse notes for a notebook
  getNotes(notebook) {
    const notesForNotebook = this.props.notes.filter(note => note.notebook_id === notebook.id);

    return notesForNotebook;
  }

  render () {
    // 
    const notebookItems = this.props.notebooks.map((notebook, idx) =>
    <NotebooksIndexItem
      key={idx}
      notebook={notebook}
      notes={this.getNotes(notebook)}
      deleteNotebook={this.props.deleteNotebook}
      fetchNotebook={this.props.fetchNotebook}
      fetchAllNotebooks={this.props.fetchAllNotebooks}
    />).reverse();
    return (
      <div className="notebooks-index-area" onClick={this.handleClick}>
        <ul>
          <li className="notebooks-index">
            <div className="notebooks-index-title">
              <h3>NOTEBOOKS</h3>
              <Link to="/notebooks/new">
                <i className="material-icons add-notebook-icon">add</i>
              </Link>
            </div>
            <input type="text" placeholder="Find a notebook" disabled/>
          </li>
          <li>
          {notebookItems}
          </li>
        </ul>
      </div>
    );
  }
}

export default NotebooksIndex;
