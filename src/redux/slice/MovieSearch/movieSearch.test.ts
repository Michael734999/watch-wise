import { Action, configureStore } from '@reduxjs/toolkit';
import movieSearchReducer, {
  setSearchValue,
  setPageNumber,
  searchMoviesAsync,
} from './movieSearch.slice';
import { vi, expect, it, describe, beforeEach, afterEach, Mock } from 'vitest';
import { RootState } from '@redux/store';

const mockMovieSearchResponse = {
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

describe('movieSearchSlice', () => {
  let store: ReturnType<typeof configureStore>;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        movieSearch: movieSearchReducer,
      },
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  vi.mock('@services/api/tmdb/api', () => ({
    searchMovies: vi.fn(),
  }));

  it('should handle setSearchValue action', () => {
    store.dispatch(setSearchValue('test movie'));
    const state = (store.getState() as RootState).movieSearch;
    expect(state.searchValue).toBe('test movie');
  });

  it('should handle setPageNumber action', () => {
    store.dispatch(setPageNumber(2));
    const state = (store.getState() as RootState).movieSearch;
    expect(state.pageNumber).toBe(2);
  });

  it('should handle searchMoviesAsync.pending action', () => {
    store.dispatch(
      searchMoviesAsync.pending('', { searchValue: 'test', pageNumber: 1 })
    );
    const state = (store.getState() as RootState).movieSearch;
    expect(state.loading).toBe(true);
    expect(state.error).toBe(false);
  });

  it('should handle searchMoviesAsync.fulfilled action', async () => {
    const { searchMovies } = await import('@services/api/tmdb/api');
    (searchMovies as Mock).mockResolvedValueOnce(mockMovieSearchResponse);

    // eslint-disable-next-line @typescript-eslint/await-thenable
    await store.dispatch(
      searchMoviesAsync({
        searchValue: 'test movie',
        pageNumber: 1,
      }) as unknown as Action
    );

    const state = (store.getState() as RootState).movieSearch;
    expect(state.loading).toBe(false);
    expect(state.error).toBe(false);
    expect(state.searchData).toEqual(mockMovieSearchResponse);
  });

  it('should handle searchMoviesAsync.rejected action', async () => {
    const { searchMovies } = await import('@services/api/tmdb/api');
    (searchMovies as Mock).mockRejectedValueOnce(new Error('Failed to fetch'));

    // eslint-disable-next-line @typescript-eslint/await-thenable
    await store.dispatch(
      searchMoviesAsync({
        searchValue: 'test movie',
        pageNumber: 1,
      }) as unknown as Action
    );

    const state = (store.getState() as RootState).movieSearch;
    expect(state.loading).toBe(false);
    expect(state.error).toBe(true);
    expect(state.searchData).toBeUndefined();
  });

  it('should return the correct initial state', () => {
    const state = (store.getState() as RootState).movieSearch;
    expect(state).toEqual({
      searchValue: '',
      pageNumber: 1,
      searchData: undefined,
      loading: false,
      error: false,
    });
  });
});
