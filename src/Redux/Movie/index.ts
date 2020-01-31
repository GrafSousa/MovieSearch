import { combineReducers } from 'redux';
import { MovieRetrieveState, movieRetrieveReducer } from './Retrieve';

export interface MovieCrudState {
  retrieve: MovieRetrieveState;
}

const reducer = combineReducers<MovieCrudState>({
	retrieve: movieRetrieveReducer,
});

export {
	reducer as crudMovieReducer,
};
