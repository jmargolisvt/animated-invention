import { g } from '../constants';

export default function messageReducer(state, action = null) {
	if (!action?.error && action?.payload && action?.type) {
		const { payload } = action;
		switch (action.type) {
			case g.MESSAGE_RECEIVED:
				return {
					...state,
					messages: [...state.messages, payload ],
				};
			default:
				// no-op
			}
	}
	return state;
}
