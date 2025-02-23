import { configureStore } from '@reduxjs/toolkit';
import starwarsReducer from '@redux/slice/Starwars/starwars.slice';
import moviesReducer from '@redux/slice/Movie/movies.slice';
import movieDetailsReducer from '@redux/slice/MovieDetails/movieDetails.slice';
import movieSearchReducer from '@redux/slice/MovieSearch/movieSearch.slice';

const store = configureStore({
  reducer: {
    starwars: starwarsReducer,
    movies: moviesReducer,
    movieDetails: movieDetailsReducer,
    movieSearch: movieSearchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
