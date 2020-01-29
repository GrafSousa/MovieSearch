export enum MovieTypes {
  MOVIE_RETRIEVE_ALL_REQUEST = '[movies]MOVIE_RETRIEVE_ALL_REQUEST',
  MOVIE_RETRIEVE_ALL_SUCCESS = '[movies]MOVIE_RETRIEVE_ALL_SUCCESS',
  MOVIE_RETRIEVE_ALL_FAILURE = '[movies]MOVIE_RETRIEVE_ALL_FAILURE',
}

export interface Movie {
  id: number;
  title: string;
}

export interface MovieState {
  readonly data: Movie[];
  readonly loading: boolean;
  readonly error: boolean;
}
