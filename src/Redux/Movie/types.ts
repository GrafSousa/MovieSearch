export enum MovieTypes {
  MOVIE_RETRIEVE_ONE_BY_NAME_REQUEST = '[movies]MOVIE_RETRIEVE_ONE_BY_NAME_REQUEST',
  MOVIE_RETRIEVE_ONE_BY_NAME_SUCCESS = '[movies]MOVIE_RETRIEVE_ONE_BY_NAME_SUCCESS',
  MOVIE_RETRIEVE_ONE_BY_NAME_FAILURE = '[movies]MOVIE_RETRIEVE_ONE_BY_NAME_FAILURE',
}

export interface Movie {
  imdbID: number;
  title: string;
  year: string;
  imdbRating:string;
  poster: string;
}

export interface MovieState {
  readonly isLoading: boolean;
  readonly hasDone: boolean;
  readonly hasError: boolean;
  readonly errorMsg: string;
}
