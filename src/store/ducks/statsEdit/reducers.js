import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators }  = createActions({
  editReceiveTeams: ['teams'],
  editRequestTeams: null,
  editChangeStat: ['stat', 'value'],
  editChangeTeam: ['value'],
  editResetState: null,
  editUpdateStats: null
});

const INITIAL_STATE = {
  teams: [],
  team: "ala",
  id: "",
  stats: { ps:"",gp:"",gc:"",nsg:"",nm:"",md:"",vs:"",u6:"" }
};

const editReceiveTeams = (state = INITIAL_STATE, action) => ({
  ...state, 
  teams: action.teams
});

const editChangeStat = (state = INITIAL_STATE, action) => ({
  ...state, 
  stats: { ...state.stats, [action.stat]: action.value }
});

const editChangeTeam = (state = INITIAL_STATE, action) => ({
  ...state, 
  team: action.value
});

const editResetState = (state = INITIAL_STATE, action) => ({
  ...INITIAL_STATE,
  teams: state.teams
});

export default createReducer(INITIAL_STATE, {
  [Types.EDIT_RECEIVE_TEAMS]: editReceiveTeams,
  [Types.EDIT_CHANGE_STAT]: editChangeStat,
  [Types.EDIT_CHANGE_TEAM]: editChangeTeam,
  [Types.EDIT_RESET_STATE]: editResetState
});