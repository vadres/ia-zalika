import { put, call, all, takeLatest } from 'redux-saga/effects';

import { Types, Creators } from '../ducks/stats/reducers' 
import { getTeams, saveStats } from '../ducks/stats/operations'

function* fetchTeams() {
  try {
    const teams = yield call(getTeams);  
    yield put(Creators.receiveTeams(teams));
  } catch(e) {
    console.log(e)
  }
}

function* insertStats() {
  try {
   
    const response = yield call(saveStats);  
    if (response)
      yield put(Creators.resetState());

  } catch(e) {
    console.log(e)
  }
}

export function* statsSagas(){
  yield all([
    takeLatest(Types.REQUEST_TEAMS, fetchTeams),
    takeLatest(Types.SAVE_STATS, insertStats) 
  ]);
}
