import { connect } from 'react-redux';

import { Creators } from '../../store/ducks/stats/reducers';
import StatsComponent from './StatsComponent';
import { formatInput } from '../../services/format';

const mapStateToProps = (state) => ({
  ...state.stats
});

const mapDispatchToProps = (dispatch) => {
  const fetchTeams = () => {
    dispatch(Creators.statsRequestTeams());
  };

  const changeStat = (stat, value) => {
    dispatch(Creators.changeStat(stat, formatInput(stat, value)));
  };

  const changeTeam = (value) => {
    dispatch(Creators.changeTeam(value));
  };
  
  const saveStats = (team, stats) => {
    dispatch(Creators.saveStats(team, stats));
  };

  const resetState = () => {
    dispatch(Creators.resetState());
  };

  return { fetchTeams, changeStat, changeTeam, saveStats, resetState };
};

export default connect(mapStateToProps, mapDispatchToProps)(StatsComponent);