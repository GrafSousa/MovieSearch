import * as React from 'react';

import { Container } from './styles';

import { MovieList } from './components/MovieList';
import { InputSearch } from '~/components/Inputs/InputSearch';

function Home() {
	const [movieName, setMovieName] = React.useState('');

	function handleChange(event: React.ChangeEvent<any>): void {
		setMovieName(event.target.value);
	}
	function handleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
		console.log(movieName);
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
