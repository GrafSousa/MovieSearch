import { MovieActions } from '~/Redux/Movie/actions';
import { MovieTypes, MovieState, Movie } from '~/Redux/Movie/types';

export interface MovieRetrieveState extends MovieState {
  readonly data: Movie[];
}

const initialState: MovieRetrieveState = {
	data: [],
	isLoading: false,
	hasDone: false,
	hasError: false,
	errorMsg: '',
};

export function movieRetrieveReducer(
	state = initialState,
	action: MovieActions,
): MovieRetrieveState {
	switch (action.type) {
	case MovieTypes.MOVIE_RETRIEVE_ONE_BY_NAME_REQUEST:
		return { ...state, isLoading: true };
	case MovieTypes.MOVIE_RETRIEVE_ONE_BY_NAME_SUCCESS:
		return {
			...state,
			isLoading: false,
			hasDone: true,
			hasError: false,
			data: [...state.data, action.payload],
		};
	case MovieTypes.MOVIE_RETRIEVE_ONE_BY_NAME_FAILURE:
		return {
			...state,
			isLoading: false,
			hasDone: true,
			hasError: true,
			errorMsg: action.payload,
		};
	default:
		return state;
	}
}
