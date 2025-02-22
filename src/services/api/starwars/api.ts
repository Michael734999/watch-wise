import axios from 'axios';
import {
  CharactersResponse,
  Film,
  FilmDetailsResponse,
  FilmsResponse,
  PlanetsResponse,
  SpeciesResponse,
  StarshipsResponse,
  VehiclesResponse,
} from './api.types';

const BASE_URL = 'https://swapi.dev/api';

export const fetchStarWarsMovies = async (): Promise<Film[]> => {
  const res = await axios.get<FilmsResponse>(`${BASE_URL}/films`);
  const data = res.data.results.map((film) => {
    const filmId = film.url.split('/').filter(Boolean).pop();
    return { ...film, movie_id: filmId! };
  });
  return data;
};

export const fetchStarWarsMovieDetails = async (
  id: string
): Promise<FilmDetailsResponse> => {
  const { data: response } = await axios.get<Film>(`${BASE_URL}/films/${id}`);
  const [characters, planets, species, starships, vehicles] = await Promise.all(
    [
      axios.all(
        response.characters.map((url) =>
          axios.get<CharactersResponse>(url).then(async (res) => {
            const [homeworld, species] = await Promise.all([
              axios
                .get<CharactersResponse>(
                  res.data.homeworld as unknown as string
                )
                .then((response) => response.data),
              axios.all(
                res.data.species.map((url) =>
                  axios
                    .get<SpeciesResponse>(url as unknown as string)
                    .then((response) => response.data)
                )
              ),
            ]);
            return {
              ...res.data,
              homeworld,
              species,
            } as unknown as CharactersResponse;
          })
        )
      ),
      axios.all(
        response.planets.map((url) =>
          axios.get<PlanetsResponse>(url).then((res) => res.data)
        )
      ),
      axios.all(
        response.species.map((url) =>
          axios.get<SpeciesResponse>(url).then((res) => res.data)
        )
      ),
      axios.all(
        response.starships.map((url) =>
          axios.get<StarshipsResponse>(url).then((res) => res.data)
        )
      ),
      axios.all(
        response.vehicles.map((url) =>
          axios.get<VehiclesResponse>(url).then((res) => res.data)
        )
      ),
    ]
  );

  const data: FilmDetailsResponse = {
    ...response,
    characters,
    planets,
    species,
    starships,
    vehicles,
  };

  return data;
};
