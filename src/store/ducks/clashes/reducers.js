import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators }  = createActions({
  statsReceiveTeams: ['teams'],
  statsRequestTeams: null,
  changeAttr: ['attr', 'value'],
  resetState: null,
  saveClash: null
});

const INITIAL_STATE = {
  teams: [],
  client:  "ala",
  visitor: "ala",
  clientGols:  0,
  visitorGols: 0
};

const receiveTeams = (state = INITIAL_STATE, action) => ({
  ...state, 
  teams: action.teams
});

const changeAttr = (state = INITIAL_STATE, action) => {
  return ({
    ...state, 
    [action.attr]: action.value
  });
}

const resetState = (state = INITIAL_STATE, action) => ({
  ...INITIAL_STATE,
  teams: state.teams
});

export default createReducer(INITIAL_STATE, {
  [Types.STATS_RECEIVE_TEAMS]: receiveTeams,
  [Types.CHANGE_ATTR]: changeAttr,
  [Types.RESET_STATE]: resetState
});