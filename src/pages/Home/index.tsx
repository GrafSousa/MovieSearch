import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from './styles';

import { MovieList } from './components/MovieList';
import { InputSearch } from '~/components/Inputs/InputSearch';
import { MovieRetrieveOneByNameActionCreators } from '~/Redux/Movie/actions';
import { MovieRetrieveSelector } from '~/Redux/Movie/selectors';

function Home() {
	const dispatch = useDispatch();
	const [movieName, setMovieName] = React.useState('');

	const movies = useSelector(MovieRetrieveSelector.selectMovieRetrieve);

	const isLoading = useSelector(MovieRetrieveSelector.selectIsLoadingRetrieve);

	function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
		setMovieName(event.target.value);
	}
	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		dispatch(MovieRetrieveOneByNameActionCreators.movieRetrieveOneByNameRequest(movieName));
		setMovieName('');
	}
	return (
		<>
			<form onSubmit={handleSubmit}>
				<InputSearch
					value={movieName}
					isLoading={isLoading}
					onChange={handleChange}
					placeholder="Digite o nome do filme"
				/>
			</form>
			<Container>
				<MovieList
					movies={movies}
				/>
			</Container>
		</>
	);
}

export { Home };
