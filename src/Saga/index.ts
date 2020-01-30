import { all, takeLatest } from 'redux-saga/effects';

import { MovieTypes } from '~/Redux/Movie/types';
import { movieRetrieveOneByNameSaga } from './Movie/index';

export function* rootSaga() {
	return yield all([
		takeLatest(MovieTypes.MOVIE_RETRIEVE_ONE_BY_NAME_REQUEST, movieRetrieveOneByNameSaga),
	]);
}
