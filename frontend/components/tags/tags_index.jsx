import React from 'react';
import TagsIndexItem from './tags_index_item';
import { Link } from 'react-router-dom';

class TagsIndex extends React.Component {
  constructor(props) {
    super(props);
    // this.state = this.props.tags
    this.handleClick = this.handleClick.bind(this);
    this.getNotes = this.getNotes.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllTags();
  }

  // this would avoid the parent firing onClick event as well whenever the tags index is clicked
  handleClick(e) {
    // 
    // this.props.fetchTag()
    e.stopPropagation()
  }

  // parse notes for a tag
  getNotes(tag) {
    // const notesForTag = this.props.notes.filter(note => note.tag_id === tag.id);
    //
    // return notesForTag;
  }

  render () {
    // 

    const tagItems = this.props.tags.map((tag, idx) => {
      const tagNotes = this.props.notes.filter(note => tag.notesID.includes(note.id)) 

      return (
      <TagsIndexItem
        key={idx}
        tag={tag}
        notes={tagNotes}
        deleteTag={this.props.deleteTag}
        fetchTag={this.props.fetchTag}
        fetchAllTags={this.props.fetchAllTags}
      /> )
    }).reverse();
    return (
      <div className="tags-index-area" onClick={this.handleClick}>
        <ul>
          <li className="tags-index">
            <div className="tags-index-title">
              <h3>TAGS</h3>
              <Link to="/tags/new">
                <i className="material-icons add-tag-icon">add</i>
              </Link>
            </div>
            <input type="text" placeholder="Find a tag" disabled/>
          </li>
          <li>
          {tagItems}
          </li>
        </ul>
      </div>
    );
  }
}

export default TagsIndex;
