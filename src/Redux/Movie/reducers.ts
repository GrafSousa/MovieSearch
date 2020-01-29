import { MovieActions } from './actions';
import { MovieTypes, MovieState } from './types';

const initialState: MovieState = {
	data: [],
	loading: false,
	error: false,
};

export function movieReducer(
	state = initialState,
	action: MovieActions,
): MovieState {
	switch (action.type) {
	case MovieTypes.MOVIE_RETRIEVE_ALL_REQUEST:
		return { ...state, loading: true };
	case MovieTypes.MOVIE_RETRIEVE_ALL_SUCCESS:
		return {
			...state,
			loading: false,
			error: false,
			data: action.payload,
		};
	case MovieTypes.MOVIE_RETRIEVE_ALL_FAILURE:
		return {
			...state,
			loading: false,
			error: true,
			data: [],
		};
	default:
		return state;
	}
}
