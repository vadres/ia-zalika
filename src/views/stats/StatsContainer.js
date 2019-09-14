import { connect } from 'react-redux';

import { Creators } from '../../store/ducks/stats/reducers';
import StatsComponent from './StatsComponent';
import { formatInput, formatCompound } from '../../store/ducks/stats/operations';

const mapStateToProps = (state) => ({
  ...state.stats
});

const mapDispatchToProps = (dispatch) => {
  const fetchTeams = () => {
    dispatch(Creators.statsRequestTeams());
  };

  const changeStat = (stat, value) => {
    dispatch(Creators.changeStat(stat, formatInput(value)));
  };

  return { fetchTeams, changeStat };
};

export default connect(mapStateToProps, mapDispatchToProps)(StatsComponent);