import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from '~/Saga';
import { MovieCrudState, crudMovieReducer } from './Movie';

export interface AppState {
  movie: MovieCrudState;
}

export const reducers = combineReducers<AppState>({
	movie: crudMovieReducer,
});

export function createAppStore() {
	const sagaMiddleware = createSagaMiddleware();

	let composeEnhancers = compose;

	const w = window as any;

	composeEnhancers = w.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

	const store = createStore(
		reducers,
		composeEnhancers(applyMiddleware(sagaMiddleware)),
	);

	sagaMiddleware.run(rootSaga);

	return { store };
}
