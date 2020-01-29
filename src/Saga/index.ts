import { all, takeLatest } from 'redux-saga/effects';

import { MovieTypes } from '~/Redux/Movie/types';
import { movieRetrieveAllSaga } from './Movie/index';

export function* rootSaga() {
	return yield all([
		takeLatest(MovieTypes.MOVIE_RETRIEVE_ALL_REQUEST, movieRetrieveAllSaga),
	]);
}
