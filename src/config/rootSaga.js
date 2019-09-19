import { all, fork } from "redux-saga/effects" 

import { statsSagas } from '../store/sagas/stats' 
import { statsEditSagas } from '../store/sagas/statsEdit' 
import { clashesSagas } from '../store/sagas/clashes' 

export default function* rootSaga() {
  yield all([
    statsSagas,
    statsEditSagas,
    clashesSagas
  ].map(fork));
}
