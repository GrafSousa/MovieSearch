import * as React from 'react';

import { Container } from './styles';
import { MovieItem } from './MovieItem/index';
import { Movie } from '~/Redux/Movie/types';

interface Props {
	movies: Movie[];
}

function MovieList({ movies }: Props) {
	return (
		<>
			<Container>
				{movies.map((movie) => (
					<MovieItem key={movie.imdbID} movie={movie} />
				))}
			</Container>
		</>
	);
}

export { MovieList };
