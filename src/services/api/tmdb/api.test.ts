import axios from 'axios';
import { vi, expect, it, describe, afterEach } from 'vitest';
import {
  fetchTMDBMovies,
  fetchTMDBMovieDetails,
  searchMovies,
  POSTER_URL,
} from './api';
import { FilterOptions } from '@pages/Movies/Movies.types';

const BASE_URL = 'https://api.themoviedb.org/3';
const mockMovieResponse = {
  page: 1,
  results: [
    {
      id: 1,
      title: 'Test Movie',
      poster_path: '/test-poster.jpg',
      overview: 'Test Overview',
    },
  ],
};

const mockMovieDetailsResponse = {
  id: 1,
  title: 'Test Movie Details',
  overview: 'Detailed overview of Test Movie',
  trailers: [{ id: '1', key: 'test-trailer-key' }],
};

const mockSearchResponse = {
  page: 1,
  results: [
    {
      id: 1,
      title: 'Test Movie Search Result',
      poster_path: '/search-poster.jpg',
      overview: 'Search Result Overview',
    },
  ],
};

describe('TMDB API functions', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('fetchTMDBMovies should make a GET request and return data', async () => {
    vi.spyOn(axios, 'get').mockResolvedValueOnce({
      data: mockMovieResponse,
    });

    const response = await fetchTMDBMovies(FilterOptions.POPULARITY, 1);

    expect(axios.get).toHaveBeenCalledWith(
      `${BASE_URL}/discover/movie?sort_by=popularity.desc&page=1`,
      expect.objectContaining({
        headers: expect.objectContaining({
          Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_AUTH_TOKEN}`,
        }),
      })
    );

    expect(response).toEqual(mockMovieResponse);
  });

  it('fetchTMDBMovieDetails should make GET requests and return movie details and trailers', async () => {
    vi.spyOn(axios, 'get')
      .mockResolvedValueOnce({ data: mockMovieDetailsResponse })
      .mockResolvedValueOnce({
        data: { results: mockMovieDetailsResponse.trailers },
      });

    const response = await fetchTMDBMovieDetails('1');

    expect(axios.get).toHaveBeenCalledWith(
      `${BASE_URL}/movie/1`,
      expect.objectContaining({
        headers: expect.objectContaining({
          Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_AUTH_TOKEN}`,
        }),
      })
    );
    expect(axios.get).toHaveBeenCalledWith(
      `${BASE_URL}/movie/1/videos`,
      expect.objectContaining({
        headers: expect.objectContaining({
          Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_AUTH_TOKEN}`,
        }),
      })
    );

    expect(response).toEqual({
      ...mockMovieDetailsResponse,
      trailers: mockMovieDetailsResponse.trailers,
    });
  });

  it('searchMovies should make a GET request and return search results', async () => {
    vi.spyOn(axios, 'get').mockResolvedValueOnce({
      data: mockSearchResponse,
    });

    const response = await searchMovies('test', 1);

    expect(axios.get).toHaveBeenCalledWith(
      `${BASE_URL}/search/movie?query=test&page=1`,
      expect.objectContaining({
        headers: expect.objectContaining({
          Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_AUTH_TOKEN}`,
        }),
      })
    );

    expect(response).toEqual(mockSearchResponse);
  });

  it('should correctly format poster URL with POSTER_URL constant', () => {
    const posterPath = '/test-poster.jpg';
    const fullPosterUrl = POSTER_URL + posterPath;

    expect(fullPosterUrl).toBe(
      'https://image.tmdb.org/t/p/original/test-poster.jpg'
    );
  });
});
