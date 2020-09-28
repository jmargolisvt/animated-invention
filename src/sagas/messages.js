import { eventChannel } from 'redux-saga';
import { actionChannel, all, call, put, take, takeEvery,  } from 'redux-saga/effects';
import { g } from '../constants';

let socket;

function createEventChannel () {
	return eventChannel(emit => {
		socket = new WebSocket("wss://echo.websocket.org/");
    socket.onopen = () => {
			if(socket.readyState === 1) {
				socket.send('Connected!')
			}
    }
    socket.onmessage = e => {
			const { data } = e;
			emit({ type: g.MESSAGE_RECEIVED, payload: data });
    }
    return () => {
      socket.close();
    };
  });
}

export function* send({ payload }) {
	socket.send(`${payload}`);
}

export function* startSocket() {
  const channel = yield call(createEventChannel);
  while (true) {
    const action = yield take(channel);
    yield put(action);
  }
}

export default function* root() {
  yield all([
    takeEvery(g.CONNECT_TO_SOCKET, startSocket),
    takeEvery(g.SEND_MESSAGE, send),
  ]);
}
