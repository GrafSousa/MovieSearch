import * as React from 'react';

import { Container } from './styles';
import { Movie } from '~/Redux/Movie/types';

interface Props {
	movie: Movie;
}

function MovieItem({ movie }: Props) {
	const { poster, title, year, imdbRating } = movie;
	return (
		<Container>
			<img
				src={poster}
				alt={title}
			/>
			<strong>{`Título: ${title}`}</strong>
			<span>{`Ano: ${year}`}</span>
			<span>{`Nota IMDB: ${imdbRating}`}</span>
		</Container>
	);
}

export { MovieItem };
