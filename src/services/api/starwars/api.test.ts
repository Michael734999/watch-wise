import { vi, expect, it, describe, beforeEach } from 'vitest';
import axios from 'axios';
import { fetchStarWarsMovies, fetchStarWarsMovieDetails } from './api';

vi.mock('axios');

const mockFilmsResponse = {
  data: {
    results: [
      {
        title: 'A New Hope',
        url: 'https://swapi.dev/api/films/1/',
      },
      {
        title: 'The Empire Strikes Back',
        url: 'https://swapi.dev/api/films/2/',
      },
    ],
  },
};

const mockMovieDetailsResponse = {
  data: {
    title: 'A New Hope',
    characters: [
      'https://swapi.dev/api/people/1/',
      'https://swapi.dev/api/people/2/',
    ],
    planets: ['https://swapi.dev/api/planets/1/'],
    species: ['https://swapi.dev/api/species/1/'],
    starships: ['https://swapi.dev/api/starships/1/'],
    vehicles: ['https://swapi.dev/api/vehicles/1/'],
  },
};

describe('API functions', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  describe('fetchStarWarsMovies', () => {
    it('should fetch and return list of films with movie_id', async () => {
      (axios.get as jest.Mock).mockResolvedValue(mockFilmsResponse);

      const movies = await fetchStarWarsMovies();

      expect(axios.get).toHaveBeenCalledWith('https://swapi.dev/api/films');
      expect(movies).toEqual([
        {
          title: 'A New Hope',
          url: 'https://swapi.dev/api/films/1/',
          movie_id: '1',
        },
        {
          title: 'The Empire Strikes Back',
          url: 'https://swapi.dev/api/films/2/',
          movie_id: '2',
        },
      ]);
    });

    it('should handle error when fetching films', async () => {
      (axios.get as jest.Mock).mockRejectedValue(
        new Error('Error fetching movies')
      );

      const movies = await fetchStarWarsMovies().catch((error) => error);

      expect(axios.get).toHaveBeenCalledWith('https://swapi.dev/api/films');
      expect(movies).toBeInstanceOf(Error);
    });
  });

  describe('fetchStarWarsMovieDetails', () => {
    it('should fetch movie details and related data', async () => {
      (axios.get as jest.Mock).mockResolvedValue(mockMovieDetailsResponse);

      await fetchStarWarsMovieDetails('1');

      expect(axios.get).toHaveBeenCalledWith('https://swapi.dev/api/films/1');
    });

    it('should handle error when fetching movie details', async () => {
      (axios.get as jest.Mock).mockResolvedValueOnce(mockMovieDetailsResponse);
      (axios.get as jest.Mock).mockRejectedValueOnce(
        new Error('Error fetching related data')
      );
      const movieDetails = await fetchStarWarsMovieDetails('1').catch(
        (error) => error
      );

      expect(axios.get).toHaveBeenCalledWith('https://swapi.dev/api/films/1');
      expect(movieDetails).toBeInstanceOf(Error);
    });
  });
});
