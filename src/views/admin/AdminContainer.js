import { connect } from 'react-redux';

import AdminComponent from './AdminComponent';
import { train } from '../../data/games';

train();

const mapStateToProps = (state) => (state);
const mapDispatchToProps = (dispatch) => (dispatch);

export default connect(null, null)(AdminComponent);