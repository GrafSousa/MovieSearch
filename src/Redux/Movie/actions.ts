import { action } from '~/Shared/ReduxActionHelpers';
import { ActionsUnion } from '~/Shared/actionHelper';

import { Movie, MovieTypes } from './types';

export const MovieRetrieveAllByNameActionCreators = {
	movieRetrieveAllByNameRequest: (movieName: string) => action(
		MovieTypes.MOVIE_RETRIEVE_ALL_BY_NAME_REQUEST, movieName,
	),
	movieRetrieveAllByNameSuccess: (response: Movie) => action(
		MovieTypes.MOVIE_RETRIEVE_ALL_BY_NAME_SUCCESS, response,
	),
	movieRetrieveAllByNameFailure: (errorMsg: string) => action(
		MovieTypes.MOVIE_RETRIEVE_ALL_BY_NAME_FAILURE, errorMsg,
	),
};

export type MovieRetrieveAllByNameActions =
	ActionsUnion<typeof MovieRetrieveAllByNameActionCreators>;
export type MovieActions = MovieRetrieveAllByNameActions;
