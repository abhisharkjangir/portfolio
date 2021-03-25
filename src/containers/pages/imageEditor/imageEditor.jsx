import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import ImageEditor from '../../../components/pages/imageEditor/imageEditor';

const mapStateToProps = createStructuredSelector({});

export default connect(mapStateToProps, null)(ImageEditor);
