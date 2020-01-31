import { call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { api } from '~/Services/api';

import { MovieRetrieveAllByNameActionCreators } from '~/Redux/Movie/actions';
import { Movie } from '~/Redux/Movie/types';

const url = 'search/movie?';

export function* MovieRetrieveAllByNameSaga(
	action: ReturnType<typeof MovieRetrieveAllByNameActionCreators.movieRetrieveAllByNameSuccess>,
) {
	const response = yield call(api.get, `${url}api_key=${process.env.REACT_APP_API_KEY}&query=${action.payload}`);

	if (response.data.Response === 'False') {
		toast.error(response.data.Error);
		yield put(
			MovieRetrieveAllByNameActionCreators.movieRetrieveAllByNameFailure(response.data.Error),
		);
	} else {
		const movie: Movie = convertResponseToMovie(response);
		yield put(MovieRetrieveAllByNameActionCreators.movieRetrieveAllByNameSuccess(movie));
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
