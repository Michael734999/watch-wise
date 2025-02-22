import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchTMDBMovieDetails } from '@services/api/tmdb/api';
import { MovieDetailsState } from './types';

const initialState: MovieDetailsState = {
  movieDetails: undefined,
  loading: false,
  error: false,
};

export const fetchMovieDetails = createAsyncThunk(
  'movieDetails/fetchMovieDetails',
  async (id: string, { rejectWithValue }) => {
    try {
      const data = await fetchTMDBMovieDetails(id);
      return data;
    } catch {
      return rejectWithValue(true);
    }
  }
);

const movieDetailsSlice = createSlice({
  name: 'movieDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovieDetails.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchMovieDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.movieDetails = action.payload;
      })
      .addCase(fetchMovieDetails.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default movieDetailsSlice.reducer;
