import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators }  = createActions({
  statsReceiveTeams: ['teams'],
  statsRequestTeams: null,
  changeStat: ['stat', 'value'],
  changeTeam: ['value'],
  resetState: null,
  saveStats: null
});

const INITIAL_STATE = {
  teams: [],
  team: "ala",
  stats: { ps:"",gp:"",gc:"",nsg:"",nm:"",md:"",vs:"",u6:"" }
};

const receiveTeams = (state = INITIAL_STATE, action) => ({
  ...state, 
  teams: action.teams
});

const changeStat = (state = INITIAL_STATE, action) => ({
  ...state, 
  stats: { ...state.stats, [action.stat]: action.value }
});

const changeTeam = (state = INITIAL_STATE, action) => ({
  ...state, 
  team: action.value
});

const resetState = (state = INITIAL_STATE, action) => ({
  ...INITIAL_STATE,
  teams: state.teams
});

export default createReducer(INITIAL_STATE, {
  [Types.STATS_RECEIVE_TEAMS]: receiveTeams,
  [Types.CHANGE_STAT]: changeStat,
  [Types.CHANGE_TEAM]: changeTeam,
  [Types.RESET_STATE]: resetState
});