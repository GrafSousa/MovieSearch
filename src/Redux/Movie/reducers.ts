import { MovieActions } from './actions';
import { MovieTypes, MovieState } from './types';

const initialState: MovieState = {
	data: [],
	loading: false,
	hasDone: false,
	hasError: false,
	errorMsg: '',
};


export function movieReducer(
	state = initialState,
	action: MovieActions,
): MovieState {
	switch (action.type) {
	case MovieTypes.MOVIE_RETRIEVE_ONE_BY_NAME_REQUEST:
		return { ...state, loading: true };
	case MovieTypes.MOVIE_RETRIEVE_ONE_BY_NAME_SUCCESS:
		return {
			...state,
			loading: false,
			hasDone: true,
			hasError: false,
			data: [...state.data, action.payload],
		};
	case MovieTypes.MOVIE_RETRIEVE_ONE_BY_NAME_FAILURE:
		return {
			...state,
			loading: false,
			hasDone: true,
			hasError: true,
			errorMsg: action.payload,
		};
	default:
		return state;
	}
}
