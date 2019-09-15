import { all, fork } from "redux-saga/effects" 

import { statsSagas } from '../store/sagas/stats' 
import { clashesSagas } from '../store/sagas/clashes' 

export default function* rootSaga() {
  yield all([
    statsSagas,
    clashesSagas
  ].map(fork));
}
