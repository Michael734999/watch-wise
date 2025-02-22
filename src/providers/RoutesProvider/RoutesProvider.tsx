import { CharacterDetails } from '@pages/CharacterDetails/CharacterDetails.page';
import { Home } from '@pages/Home';
import App from 'App';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { lazy, Suspense } from 'react';
import { Movies } from '@pages/Movies';
import { MovieDetails } from '@pages/MovieDetails';
import { MovieSearch } from '@pages/MovieSearch';

const StarWarsDetails = lazy(
  () => import('../../pages/StarWarsDetails/StarWarsDetails.page')
);

export const RoutesProvider = () => {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/starwars/:id',
          element: (
            <Suspense>
              <StarWarsDetails />
            </Suspense>
          ),
        },
        {
          path: '/starwars/characters/:name',
          element: <CharacterDetails />,
        },
        {
          path: '/movies',
          element: <Movies />,
        },
        {
          path: '/movie/:id',
          element: <MovieDetails />,
        },
        {
          path: '/search',
          element: <MovieSearch />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
};
