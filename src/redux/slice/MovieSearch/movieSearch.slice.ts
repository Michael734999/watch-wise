import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { searchMovies } from '@services/api/tmdb/api';
import { MovieSearchState } from './types';

const initialState: MovieSearchState = {
  searchValue: '',
  pageNumber: 1,
  searchData: undefined,
  loading: false,
  error: false,
};

export const searchMoviesAsync = createAsyncThunk(
  'movieSearch/searchMovies',
  async (searchParams: { searchValue: string; pageNumber: number }) => {
    const response = await searchMovies(
      searchParams.searchValue,
      searchParams.pageNumber
    );
    return response;
  }
);

const movieSearchSlice = createSlice({
  name: 'movieSearch',
  initialState,
  reducers: {
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    setPageNumber: (state, action) => {
      state.pageNumber = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchMoviesAsync.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(searchMoviesAsync.fulfilled, (state, action) => {
        state.searchData = action.payload;
        state.loading = false;
        state.error = false;
      })
      .addCase(searchMoviesAsync.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const { setSearchValue, setPageNumber } = movieSearchSlice.actions;

export default movieSearchSlice.reducer;
