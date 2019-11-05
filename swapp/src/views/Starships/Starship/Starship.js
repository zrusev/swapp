import React from 'react';
import { useParams } from 'react-router-dom';
import StarshipPreview from '../../../components/Starships/StarshipPreview/StarshipPreview';
import Spinner from '../../../shared/components/Spinner/Spinner';
import Toast from '../../../shared/components/Toast/Toast';
import errorHandler from '../../../shared/resolvers/errorHandler';

import gql from 'graphql-tag.macro';
import { useQuery } from '@apollo/react-hooks';

const STARSHIP_QUERY = gql`
  query Starship($starshipId: ID!) {
    starship(id: $starshipId) {
      id
      name
      model
      image
      starshipClass
      cost
      maxAtmosphericSpeed
      maxMLPerHour
      hyperdriveRating
      crew
    }
  }
`;

const STATS_QUERY = gql`
  query Stats($starshipClass: String) {
    allStarships(first: 100, filter: { starshipClass: $starshipClass }) {
      totalCount
      edges {
        node {
          cost
          maxAtmosphericSpeed
          crew
          hyperdriveRating
          maxMLPerHour
        }
      }
    }
  }
`;

const Starships = () => {
  const { starshipId } = useParams();

  const { data, loading: loadingData, error: errorData } = useQuery(STARSHIP_QUERY, {
    variables: { starshipId },
  });

  const { data: stats, loading: loadingStats, error: errorStats } = useQuery(
    STATS_QUERY,
    {
      skip: !data || !data.starship || !data.starship.starshipClass,
      variables: {
        starshipClass:
          data && data.starship && data.starship.starshipClass
            ? data.starship.starshipClass
            : null,
      },
    },
  );

  if (loadingData || loadingStats) return <Spinner />;
  if (errorData) return <Toast>{errorHandler(errorData)}</Toast>;
  if (errorStats) return <Toast>{errorHandler(errorStats)}</Toast>;

  const { starship } = data;
  const { allStarships } = stats;

  return <StarshipPreview starship={starship} allStarships={allStarships} />;
};

export default Starships;
