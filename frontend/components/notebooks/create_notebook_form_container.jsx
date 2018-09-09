import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NotebookForm from './notebook_form';
import { createNotebook } from '../../actions/notebook_actions';

const mapStateToProps = state => ({
  dataType: {title:""},
  formType: "notebooks"
})

const mapDispatchToProps = dispatch => ({
  action: (notebook) => dispatch(createNotebook(notebook)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotebookForm);
