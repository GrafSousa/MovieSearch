import { all, takeLatest } from 'redux-saga/effects';

import { MovieTypes } from '~/Redux/Movie/types';
import { MovieRetrieveAllByNameSaga } from './Movie/index';

export function* rootSaga() {
	return yield all([
		takeLatest(MovieTypes.MOVIE_RETRIEVE_ALL_BY_NAME_REQUEST, MovieRetrieveAllByNameSaga),
	]);
}
