import * as React from 'react';
import { useDispatch } from 'react-redux';
import { Container } from './styles';

import { MovieList } from './components/MovieList';
import { InputSearch } from '~/components/Inputs/InputSearch';
import { MovieRetrieveAllActionCreators } from '~/Redux/Movie/actions';

function Home() {
	const dispatch = useDispatch();
	const [movieName, setMovieName] = React.useState('');

	function handleChange(event: React.ChangeEvent<any>): void {
		setMovieName(event.target.value);
	}
	function handleClick(_: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
		console.log(movieName);
		dispatch(MovieRetrieveAllActionCreators.movieRetrieveAllRequest());
	}
	return (
		<>
			<InputSearch
				placeholder="Digite o nome do filme"
				onChange={handleChange}
				onClick={handleClick}
			/>
			<Container>
				<MovieList />
			</Container>
		</>
	);
}

export { Home };
