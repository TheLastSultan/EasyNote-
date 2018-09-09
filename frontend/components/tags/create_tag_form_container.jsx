import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NotebookForm from '../notebooks/notebook_form';
import { createTag } from '../../actions/tag_actions';

const mapStateToProps = state => ({
  dataType: {name:""},
  formType: "tags"
})

const mapDispatchToProps = dispatch => ({
  action: (tag) => dispatch(createTag(tag)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotebookForm);
