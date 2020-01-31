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
