import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from './styles';

import { MovieList } from './components/MovieList';
import { InputSearch } from '~/components/Inputs/InputSearch';
import { MovieRetrieveOneByNameActionCreators } from '~/Redux/Movie/actions';
import { AppState } from '~/Redux';

function Home() {
	const dispatch = useDispatch();
	const [movieName, setMovieName] = React.useState('');

	const movies = useSelector((appState: AppState) => {
		const { movieReducer: { data } } = appState;
		return data;
	});

	const isLoading = useSelector((appState: AppState) => {
		const { movieReducer: { loading } } = appState;
		return loading;
	});

	function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
		setMovieName(event.target.value);
	}
	function handleClick(_: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
		dispatch(MovieRetrieveOneByNameActionCreators.movieRetrieveOneByNameRequest(movieName));
	}
	return (
		<>
			<InputSearch
				placeholder="Digite o nome do filme"
				isLoading={isLoading}
				onChange={handleChange}
				onClick={handleClick}
			/>
			<Container>
				<MovieList
					movies={movies}
				/>
			</Container>
		</>
	);
}

export { Home };
