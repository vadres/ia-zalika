import { put, call, all, takeLatest } from 'redux-saga/effects';

import { Types, Creators } from '../ducks/clashes/reducers' 
import { getTeams, saveClash } from '../ducks/clashes/operations'

function* fetchTeams() {
  try {
    const teams = yield call(getTeams);  
    yield put(Creators.statsReceiveTeams(teams));
  } catch(e) {
    console.log(e)
  }
}

function* insertClash() {
  try {
   
    const response = yield call(saveClash);  
    if (response)
      yield put(Creators.resetState());

  } catch(e) {
    console.log(e)
  }
}

export function* clashesSagas(){
  yield all([
    takeLatest(Types.STATS_REQUEST_TEAMS, fetchTeams),
    takeLatest(Types.SAVE_CLASH, insertClash) 
  ]);
}
