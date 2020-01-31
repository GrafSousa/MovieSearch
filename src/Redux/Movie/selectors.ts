import { AppState } from '~/Redux';

const MovieSelectors = {
	selectState: ({ movie }: AppState) => movie,
};

const MovieRetrieveSelector = {
	selectState: (appState: AppState) => {
		const { retrieve } = MovieSelectors.selectState(appState);
		return retrieve;
	},
	selectIsLoadingRetrieve: (appState: AppState) => {
		const { isLoading } = MovieRetrieveSelector.selectState(appState);
		return isLoading;
	},
	selectMovieRetrieve: (appState: AppState) => {
		const { data } = MovieRetrieveSelector.selectState(appState);
		return data;
	},
};

export { MovieRetrieveSelector };
