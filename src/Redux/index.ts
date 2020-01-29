import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { MovieState } from './Movie/types';

import rootReducer from './rootReducer';
import { rootSaga } from '~/Saga';

export interface AppState {
  movie: MovieState;
}

export function createAppStore() {
	const sagaMiddleware = createSagaMiddleware();

	let composeEnhancers = compose;

	const w = window as any;

	composeEnhancers = w.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

	const store = createStore(
		rootReducer,
		composeEnhancers(applyMiddleware(sagaMiddleware)),
	);

	sagaMiddleware.run(rootSaga);

	return { store };
}
