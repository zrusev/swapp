import React from 'react';
import EpisodesPreview from '../../components/Episodes/EpisodesPreview';
import Spinner from '../../shared/components/Spinner/Spinner';
import Toast from '../../shared/components/Toast/Toast';

import gql from 'graphql-tag.macro';
import { useQuery } from '@apollo/react-hooks';

const ALL_EPISODES = gql`
  query AllEpisodes {
    allEpisodes(first: 100) {
      edges {
        node {
          id
          episodeId
          image
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
  if (error) return <Toast>{error.message}</Toast>;

  const { allEpisodes } = data;

  return <EpisodesPreview episodes={allEpisodes} />;
};

export default Episodes;
