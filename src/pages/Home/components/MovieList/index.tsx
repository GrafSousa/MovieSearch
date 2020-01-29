import * as React from 'react';

import { Container } from './styles';
import { MovieItem } from './MovieItem/index';


function MovieList() {
	return (
		<>
			<Container>
				<MovieItem
					title="Título"
					year="Ano"
					rate="Nota IMDB"
				/>
				<MovieItem
					title="Título"
					year="Ano"
					rate="Nota IMDB"
				/>
				<MovieItem
					title="Título"
					year="Ano"
					rate="Nota IMDB"
				/>
				<MovieItem
					title="Título"
					year="Ano"
					rate="Nota IMDB"
				/>
			</Container>
		</>
	);
}

export { MovieList };
