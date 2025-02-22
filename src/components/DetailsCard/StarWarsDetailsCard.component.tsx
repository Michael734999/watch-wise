import { Card, Container } from '@chakra-ui/react';
import { DataList } from '@components/DataList';
import { Section } from '@components/Section';
import {
  CharactersResponse,
  FilmDetailsResponse,
  PlanetsResponse,
  SpeciesResponse,
  StarshipsResponse,
  VehiclesResponse,
} from '@services/api/starwars/api.types';
import moment from 'moment';
import { Loading } from '@components/Loading';

export const StarWarsDetailsCard = ({
  movieData,
  id,
  loading,
}: {
  movieData?: FilmDetailsResponse;
  id?: string;
  loading: boolean;
}) => {
  if (!movieData || loading) return <Loading />;

  return (
    <Card.Root width="90%" my="8" p={2}>
      <Card.Header>
        <Card.Title fontSize={'2xl'}>
          Episode {id} - {movieData?.title}
        </Card.Title>
        <Container width={'100%'} px="0" py="2">
          <DataList
            data={[
              {
                label: 'Release Date',
                value: moment(movieData?.release_date).format('DD MMMM YYYY'),
              },
              { label: 'Director', value: movieData?.director },
              { label: 'Producers', value: movieData?.producer },
            ]}
          />
        </Container>
        <Section
          description={movieData?.opening_crawl}
          hasSeperator
          title="Desciption"
        />
      </Card.Header>
      <Card.Body>
        <Section<CharactersResponse>
          title="Characters"
          data={movieData?.characters}
          isClickable
          hasSeperator
        />
        <Section<SpeciesResponse>
          title="Species"
          data={movieData?.species}
          hasSeperator
        />
        <Section<PlanetsResponse>
          title="Planets"
          data={movieData?.planets}
          hasSeperator
        />
        <Section<StarshipsResponse>
          title="Starships"
          data={movieData?.starships}
          hasSeperator
        />
        <Section<VehiclesResponse>
          title="Vehicles"
          data={movieData?.vehicles}
        />
      </Card.Body>
    </Card.Root>
  );
};
