import { configureStore } from '@reduxjs/toolkit';
import starwarsReducer, {
  setMoviesData,
  setLoading,
  setError,
  fetchMovieDetails,
} from './starwars.slice';
import { vi, expect, it, describe, beforeEach, afterEach } from 'vitest';
import * as api from '@services/api/starwars/api'; // Import everything from the API file
import { RootState } from '@redux/store';
import { Film, FilmDetailsResponse } from '@services/api/starwars/api.types';

const mockMovieDetailsResponse = {
  id: '1',
  title: 'Test Movie',
  description: 'Description of the test movie',
} as unknown as FilmDetailsResponse;

const mockMoviesData = [
  {
    id: '1',
    title: 'Test Movie',
    description: 'Test description',
  },
] as unknown as Film[];

describe('starwarsSlice', () => {
  let store: ReturnType<typeof configureStore>;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        starwars: starwarsReducer,
      },
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should handle setMoviesData action', () => {
    store.dispatch(setMoviesData(mockMoviesData));
    const state = (store.getState() as RootState).starwars;
    expect(state.moviesData).toEqual(mockMoviesData);
    expect(state.loading).toBe(false);
    expect(state.error).toBe(false);
  });

  it('should handle setLoading action', () => {
    store.dispatch(setLoading());
    const state = (store.getState() as RootState).starwars;
    expect(state.loading).toBe(true);
    expect(state.error).toBe(false);
  });

  it('should handle setError action', () => {
    store.dispatch(setError(true));
    const state = (store.getState() as RootState).starwars;
    expect(state.loading).toBe(false);
    expect(state.error).toBe(true);
  });

  it('should handle fetchMovieDetails.pending action', () => {
    const fetchMovieDetailsPendingAction = fetchMovieDetails.pending('', '1');
    store.dispatch(fetchMovieDetailsPendingAction);
    const state = (store.getState() as RootState).starwars;
    expect(state.movieDetailsLoading).toBe(true);
    expect(state.movieDetails).toBeUndefined();
    expect(state.movieDetailsError).toBe(false);
  });

  it('should handle fetchMovieDetails.fulfilled action', () => {
    vi.spyOn(api, 'fetchStarWarsMovieDetails').mockResolvedValueOnce(
      mockMovieDetailsResponse
    );

    const fetchMovieDetailsFulfilledAction = fetchMovieDetails.fulfilled(
      mockMovieDetailsResponse,
      '',
      '1'
    );
    store.dispatch(fetchMovieDetailsFulfilledAction);
    const state = (store.getState() as RootState).starwars;
    expect(state.movieDetailsLoading).toBe(false);
    expect(state.movieDetails).toEqual(mockMovieDetailsResponse);
    expect(state.movieDetailsError).toBe(false);
  });

  it('should handle fetchMovieDetails.rejected action', () => {
    vi.spyOn(api, 'fetchStarWarsMovieDetails').mockRejectedValueOnce(
      new Error('Failed')
    );

    const fetchMovieDetailsRejectedAction = fetchMovieDetails.rejected(
      new Error('Failed'),
      '',
      '1'
    );
    store.dispatch(fetchMovieDetailsRejectedAction);
    const state = (store.getState() as RootState).starwars;
    expect(state.movieDetailsLoading).toBe(false);
    expect(state.movieDetails).toBeUndefined();
    expect(state.movieDetailsError).toBe(true);
  });

  it('should return the correct initial state', () => {
    const state = (store.getState() as RootState).starwars;
    expect(state).toEqual({
      moviesData: undefined,
      loading: false,
      error: false,
      movieDetails: undefined,
      movieDetailsLoading: false,
      movieDetailsError: false,
    });
  });
});
