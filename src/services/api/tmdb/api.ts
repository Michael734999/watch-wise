import axios from 'axios';
import {
  TMDBMovieDetails,
  TMDBMovieResponse,
  VideoResponse,
} from './api.types';
import { FilterOptions } from '@pages/Movies/Movies.types';

export const POSTER_URL = 'https://image.tmdb.org/t/p/original';

const BASE_URL = 'https://api.themoviedb.org/3';
const AUTH_KEY = import.meta.env.VITE_TMDB_API_AUTH_TOKEN;

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${AUTH_KEY}`,
  },
};

export const fetchTMDBMovies = async (
  filterOption: FilterOptions,
  pageNumber: number
): Promise<TMDBMovieResponse> => {
  const res = await axios.get<TMDBMovieResponse>(
    `${BASE_URL}/discover/movie?sort_by=${filterOption}&page=${pageNumber}`,
    options
  );
  return res.data;
};

export const fetchTMDBMovieDetails = async (
  id: string
): Promise<TMDBMovieDetails> => {
  const [detailsDeta, trailerData] = await Promise.all([
    axios.get<TMDBMovieDetails>(`${BASE_URL}/movie/${id}`, options),
    axios.get<VideoResponse>(`${BASE_URL}/movie/${id}/videos`, options),
  ]);

  return {
    ...detailsDeta.data,
    trailers: trailerData.data.results,
  };
};

export const searchMovies = async (
  query: string,
  pageNumber: number
): Promise<TMDBMovieResponse> => {
  const res = await axios.get<TMDBMovieResponse>(
    `${BASE_URL}/search/movie?query=${query}&page=${pageNumber}`,
    options
  );
  return res.data;
};
