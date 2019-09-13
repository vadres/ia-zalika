import { all, fork } from "redux-saga/effects" 

import { statsSagas } from '../store/sagas/stats' 

export default function* rootSaga() {
  yield all([
    statsSagas,
  ].map(fork));
}
