import { Film } from '@services/api/starwars/api.types';

export const getCachedMoviesData = (): Film[] | undefined => {
  const cachedData = localStorage.getItem('moviesData');
  return cachedData ? JSON.parse(cachedData) : undefined;
};

export const cacheMoviesData = (data: Film[]) => {
  localStorage.setItem('moviesData', JSON.stringify(data));
};
