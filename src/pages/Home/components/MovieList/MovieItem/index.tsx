import * as React from 'react';

import { Container } from './styles';

interface Props {
	title: string;
	year: string;
	rate: string;
}

function MovieItem({ title, year, rate }: Props) {
	return (
		<Container>
			<img
				src="https://m.media-amazon.com/images/M/MV5BYzUzOTA5ZTMtMTdlZS00MmQ5LWFmNjEtMjE5MTczN2RjNjE3XkEyXkFqcGdeQXVyNTc2ODIyMzY@._V1_SX300.jpg"
				alt="Matrix"
			/>
			<strong>{`Título: ${title}`}</strong>
			<span>{`Ano: ${year}`}</span>
			<span>{`Nota IMDB: ${rate}`}</span>
		</Container>
	);
}

export { MovieItem };
