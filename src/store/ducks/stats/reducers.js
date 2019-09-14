import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators }  = createActions({
  statsReceiveTeams: ['teams'],
  statsRequestTeams: null,
  changeStat: ['stat', 'value']
});
console.log(Creators);
const INITIAL_STATE = {
  teams: [],
  team: "ala",
  stats: { ps:"",gp:"",gc:"",nsg:"",nm:"",md:"",vs:"",u6:"" }
};

const receiveTeams = (state = INITIAL_STATE, action) => ({
  ...state, teams: action.teams
});

const changeStat = (state = INITIAL_STATE, action) => ({
  ...state, 
  stats: { ...state.stats, [action.stat]: action.value }
});

export default createReducer(INITIAL_STATE, {
  [Types.STATS_RECEIVE_TEAMS]: receiveTeams
});