import { all, fork } from 'redux-saga/effects';
import listWatcher from './listSaga';
import detailsWatcher from './detailsSaga';

export default function* rootSaga() {
  yield all([
    fork(listWatcher),
    fork(detailsWatcher),
  ]);
}
