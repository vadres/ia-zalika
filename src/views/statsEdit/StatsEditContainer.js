import { connect } from 'react-redux';

import { Creators } from '../../store/ducks/statsEdit/reducers';
import StatsComponent from './StatsEditComponent';
import { formatInput } from '../../services/format';

const mapStateToProps = (state) => ({
  ...state.statsEdit
});

const mapDispatchToProps = (dispatch) => {
  const fetchTeams = () => {
    dispatch(Creators.editRequestTeams());
  };

  const changeStat = (stat, value) => {
    dispatch(Creators.editChangeStat(stat, formatInput(stat, value)));
  };

  const changeTeam = (value) => {
    dispatch(Creators.editChangeTeam(value));
  };
  
  const updateStats = (team, stats) => {
    dispatch(Creators.editUpdateStats(team, stats));
  };

  const resetState = () => {
    dispatch(Creators.editResetState());
  };

  return { fetchTeams, changeStat, changeTeam, updateStats, resetState };
};

export default connect(mapStateToProps, mapDispatchToProps)(StatsComponent);