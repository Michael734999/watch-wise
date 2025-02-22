import { FilterOptions } from '@pages/Movies/Movies.types';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { fetchTMDBMovies } from '@services/api/tmdb/api';
import { MoviesState } from './types';

const initialState: MoviesState = {
  movies: undefined,
  loading: false,
  error: false,
  filterOption: FilterOptions.POPULARITY,
  pageNumber: 1,
};

export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async (
    args: { filterOption: FilterOptions; pageNumber: number },
    { rejectWithValue }
  ) => {
    try {
      const data = await fetchTMDBMovies(args.filterOption, args.pageNumber);
      return data;
    } catch {
      return rejectWithValue(true);
    }
  }
);

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setFilterOption: (state, action: PayloadAction<FilterOptions>) => {
      state.filterOption = action.payload;
    },
    setPageNumber: (state, action: PayloadAction<number>) => {
      state.pageNumber = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const { setFilterOption, setPageNumber } = moviesSlice.actions;

export default moviesSlice.reducer;
