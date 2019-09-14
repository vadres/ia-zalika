import { put, call, all, takeLatest } from 'redux-saga/effects';

import { Types, Creators } from '../ducks/stats/reducers' 
import { getTeams } from '../ducks/stats/operations'

function* fetchTeams() {
  try {
    const teams = yield call(getTeams);  
    yield put(Creators.statsReceiveTeams(teams));
  } catch(e) {
    console.log(e)
  }
}

export function* statsSagas(){
  yield all([
    takeLatest(Types.STATS_REQUEST_TEAMS, fetchTeams) 
  ]);
}
