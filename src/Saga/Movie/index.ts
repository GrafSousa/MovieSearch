import { call, put } from 'redux-saga/effects';
import { api } from '~/services/api';

import { MovieRetrieveAllActionCreators } from '~/Redux/Movie/actions';

export function* movieRetrieveAllSaga(
	_: ReturnType<typeof MovieRetrieveAllActionCreators.movieRetrieveAllSuccess>,
) {
	try {
		const response = yield call(api.get, '?t=Matrix&apikey=e63a8918');

		yield put(MovieRetrieveAllActionCreators.movieRetrieveAllSuccess(response));
	} catch (err) {
		yield put(MovieRetrieveAllActionCreators.movieRetrieveAllFailure());
	}
}
