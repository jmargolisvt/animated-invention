import { all, fork } from 'redux-saga/effects';
import messages from './messages';

export default function* rootSaga() {
  yield all([fork(messages)]);
}
