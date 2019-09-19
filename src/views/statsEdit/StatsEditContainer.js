import { connect } from 'react-redux';

import { Creators } from '../../store/ducks/statsEdit/reducers';
import StatsComponent from './StatsEditComponent';
import { formatInput } from '../../services/format';

const mapStateToProps = (state) => ({
  ...state.stats
});

const mapDispatchToProps = (dispatch) => {
  const fetchTeams = () => {
    dispatch(Creators.requestTeams());
  };

  const changeStat = (stat, value) => {
    dispatch(Creators.changeStat(stat, formatInput(stat, value)));
  };

  const changeTeam = (value) => {
    dispatch(Creators.changeTeam(value));
  };
  
  const updateStats = (team, stats) => {
    dispatch(Creators.updateStats(team, stats));
  };

  const resetState = () => {
    dispatch(Creators.resetState());
  };

  return { fetchTeams, changeStat, changeTeam, updateStats, resetState };
};

export default connect(mapStateToProps, mapDispatchToProps)(StatsComponent);