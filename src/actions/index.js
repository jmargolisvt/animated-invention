import { g } from '../constants';

export const sendMessage = message => (
	{
		type: g.SEND_MESSAGE,
		payload: message,
	}
)

export const connectToSocket = () => (
	{
		type: g.CONNECT_TO_SOCKET,
		payload: null,
	}
)
