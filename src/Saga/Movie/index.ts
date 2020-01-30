import { call, put } from 'redux-saga/effects';
import { api } from '~/services/api';

import { MovieRetrieveOneByNameActionCreators } from '~/Redux/Movie/actions';
import { Movie } from '~/Redux/Movie/types';

const apikey = 'apikey=e63a8918';

export function* movieRetrieveOneByNameSaga(
	action: ReturnType<typeof MovieRetrieveOneByNameActionCreators.movieRetrieveOneByNameSuccess>,
) {
	const response = yield call(api.get, `?t=${action.payload}&${apikey}`);

	if (response.data.Response === 'False') {
		yield put(
			MovieRetrieveOneByNameActionCreators.movieRetrieveOneByNameFailure(response.data.Error),
		);
	} else {
		const movie: Movie = convertResponseToMovie(response);
		yield put(MovieRetrieveOneByNameActionCreators.movieRetrieveOneByNameSuccess(movie));
	}
}

function convertResponseToMovie(response: any): Movie {
	const { imdbID, Title, Year, imdbRating, Poster } = response.data;
	return {
		imdbID,
		title: Title,
		year: Year,
		poster: Poster,
		imdbRating,
	} as Movie;
}
