import { connect } from 'react-redux';

import { Creators } from '../../store/ducks/stats/reducers';
import StatsComponent from './StatsComponent';

const mapStateToProps = (state) => {};

const mapDispatchToProps = (dispatch) => {
  const fetchTeams = () => {
    dispatch(Creators.REQUEST_TEAMS);
  };

  return { fetchTeams };
};

export default connect(mapStateToProps, mapDispatchToProps)(StatsComponent);