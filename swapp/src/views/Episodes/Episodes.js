import React from 'react';
import EpisodesPreview from '../../components/Episodes/EpisodesPreview';
import Spinner from '../../shared/components/Spinner/Spinner';
import Toast from '../../shared/components/Toast/Toast';
import errorHandler from '../../shared/resolvers/errorHandler';

import gql from 'graphql-tag.macro';
import { useQuery } from '@apollo/react-hooks';

const ALL_EPISODES = gql`
  query AllEpisodes {
    allFilms(first: 100) {
      edges {
        node {
          id
          episodeID
          title
          openingCrawl
          releaseDate
        }
      }
    }
  }
`;

const Episodes = () => {
  const { data, loading, error } = useQuery(ALL_EPISODES);

  if (loading) return <Spinner />;
  if (error) return <Toast>{errorHandler(error)}</Toast>;

  const { allFilms: allEpisodes } = data;

  return <EpisodesPreview episodes={allEpisodes} />;
};

export default Episodes;
