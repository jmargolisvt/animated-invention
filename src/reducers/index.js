import { g } from '../constants';

const initialState = {
	messages: [],
};

export default function messageReducer(state = initialState, action = null) {
if (!action?.error && action?.payload && action?.type) {
	const { payload } = action;
	switch (action.type) {
		case g.UPDATE:
			return {
				...state,
				messages: [...state.messages, ...payload ],
			};
		default:
		// no-op
		}
	}
	return state;
}
