import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchStarWarsMovieDetails } from '@services/api/starwars/api';
import { Film, FilmDetailsResponse } from '@services/api/starwars/api.types';
import { StarwarsMoviesState } from './types';

const initialState: StarwarsMoviesState = {
  moviesData: undefined,
  loading: false,
  error: false,
  movieDetails: undefined,
  movieDetailsLoading: false,
  movieDetailsError: false,
};

export const fetchMovieDetails = createAsyncThunk<FilmDetailsResponse, string>(
  'starwars/fetchMovieDetails',
  async (id) => {
    const response = await fetchStarWarsMovieDetails(id);
    return response;
  }
);

const starwarsSlice = createSlice({
  name: 'starwars',
  initialState,
  reducers: {
    setMoviesData: (state, action: PayloadAction<Film[]>) => {
      state.moviesData = action.payload;
      state.loading = false;
      state.error = false;
    },
    setLoading: (state) => {
      state.loading = true;
      state.error = false;
    },
    setError: (state, action: PayloadAction<boolean>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovieDetails.pending, (state) => {
        state.movieDetailsLoading = true;
        state.movieDetails = undefined;
        state.movieDetailsError = false;
      })
      .addCase(
        fetchMovieDetails.fulfilled,
        (state, action: PayloadAction<FilmDetailsResponse>) => {
          state.movieDetails = action.payload;
          state.movieDetailsLoading = false;
          state.movieDetailsError = false;
        }
      )
      .addCase(fetchMovieDetails.rejected, (state) => {
        state.movieDetailsLoading = false;
        state.movieDetails = undefined;
        state.movieDetailsError = true;
      });
  },
});

export const { setMoviesData, setLoading, setError } = starwarsSlice.actions;
export default starwarsSlice.reducer;
