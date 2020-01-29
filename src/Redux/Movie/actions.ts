import { action } from '~/Shared/ReduxActionHelpers';
import { ActionsUnion } from '~/Shared/actionHelper';

import { Movie, MovieTypes } from './types';

export const MovieRetrieveAllActionCreators = {
	movieRetrieveAllRequest: () => action(MovieTypes.MOVIE_RETRIEVE_ALL_REQUEST),
	movieRetrieveAllSuccess: (response: Movie[]) => action(MovieTypes.MOVIE_RETRIEVE_ALL_SUCCESS, response),
	movieRetrieveAllFailure: () => action(MovieTypes.MOVIE_RETRIEVE_ALL_FAILURE),
};

export type MovieRetrieveAllActions = ActionsUnion<typeof MovieRetrieveAllActionCreators>;
export type MovieActions = MovieRetrieveAllActions;
