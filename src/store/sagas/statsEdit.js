import { put, call, all, takeLatest } from 'redux-saga/effects';

import { Types, Creators } from '../ducks/statsEdit/reducers' 
import { getTeams, updateStats } from '../ducks/statsEdit/operations'

function* fetchTeams() {
  try {
    const teams = yield call(getTeams);  
    yield put(Creators.editReceiveTeams(teams));
  } catch(e) {
    console.log(e)
  }
}

function* insertStats() {
  try {
   
    const response = yield call(updateStats);  
    if (response)
      yield put(Creators.resetState());

  } catch(e) {
    console.log(e)
  }
}

export function* statsEditSagas(){
  yield all([
    takeLatest(Types.EDIT_REQUEST_TEAMS, fetchTeams),
    takeLatest(Types.EDIT_UPDATE_STATS, insertStats) 
  ]);
}
