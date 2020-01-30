import { action } from '~/Shared/ReduxActionHelpers';
import { ActionsUnion } from '~/Shared/actionHelper';

import { Movie, MovieTypes } from './types';

export const MovieRetrieveOneByNameActionCreators = {
	movieRetrieveOneByNameRequest: (movieName: string) => action(
		MovieTypes.MOVIE_RETRIEVE_ONE_BY_NAME_REQUEST, movieName,
	),
	movieRetrieveOneByNameSuccess: (response: Movie) => action(
		MovieTypes.MOVIE_RETRIEVE_ONE_BY_NAME_SUCCESS, response,
	),
	movieRetrieveOneByNameFailure: (errorMsg: string) => action(
		MovieTypes.MOVIE_RETRIEVE_ONE_BY_NAME_FAILURE, errorMsg,
	),
};

export type movieRetrieveOneByNameActions =
	ActionsUnion<typeof MovieRetrieveOneByNameActionCreators>;
export type MovieActions = movieRetrieveOneByNameActions;
