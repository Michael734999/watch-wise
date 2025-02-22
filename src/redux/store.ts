import { configureStore } from '@reduxjs/toolkit';
import starwarsReducer from '@redux/slice/Starwars/starwars.slice';
import moviesReducer from '@redux/slice/Movie/movies.slice';
import movieDetailsReducer from '@redux/slice/MovieDetails/movieDetails.slice';

const store = configureStore({
  reducer: {
    starwars: starwarsReducer,
    movies: moviesReducer,
    movieDetails: movieDetailsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
