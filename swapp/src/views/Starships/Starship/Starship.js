import React from 'react';
import { useParams } from 'react-router-dom';
import StarshipPreview from '../../../components/Starships/StarshipPreview/StarshipPreview';
import Spinner from '../../../shared/components/Spinner/Spinner';
import Toast from '../../../shared/components/Toast/Toast';
import errorHandler from '../../../shared/resolvers/errorHandler';

import gql from 'graphql-tag.macro';
import { useQuery } from '@apollo/react-hooks';

const metrics = [
  'cost',
  'maxAtmosphericSpeed',
  'crew',
  'hyperdriveRating',
  'maxMLPerHour',
];

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

  const { data, loading: loadingData, error: errorData } = useQuery(
    STARSHIP_QUERY,
    {
      variables: { starshipId },
    },
  );

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
  const {
    allStarships,
    allStarships: { edges },
  } = stats;

  const allStarshipsStats = metrics.map(metric => ({
    [metric]: edges.reduce(
      (acc, cur) =>
        isNaN(cur['node'][metric])
          ? [...acc, 0]
          : [...acc, +cur['node'][metric]],
      [],
    ),
  }));

  // ToDo: set chart min max value per metric if possible
  const minMaxValues = allStarshipsStats.map(o => ({
    [Object.keys(o)[0]]: [
      Math.min.apply(undefined, Object.values(o)[0]),
      Math.max.apply(undefined, Object.values(o)[0]),
    ],
  }));

  const radarFeed = [
    metrics.map(metric => ({
      metric,
      value:
        starship[metric] === undefined || starship[metric] === null
          ? 0
          : starship[metric],
    })),
  ][0];

  return (
    <StarshipPreview
      starship={starship}
      allStarships={allStarships}
      radarFeed={radarFeed}
      minMaxValues={minMaxValues}
    />
  );
};

export default Starships;
