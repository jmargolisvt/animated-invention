import { fork, put } from 'redux-saga/effects';
import { g } from '../constants';

export function* update(data) {
  // const { } = data.payload;
console.log('XXXX: UPDATING!',); /* eslint-disable-line */
  yield put({
    type: g.UPDATE,
    payload: {
      data,
    },
  });
}

export default function* rootSaga() {
  // yield all([fork(games), fork(dashboard), fork(players), fork(userProfile), fork(league)]);
  yield fork(update());
}
