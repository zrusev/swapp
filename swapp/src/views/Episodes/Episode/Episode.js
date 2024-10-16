import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import EpisodePreview from '../../../components/Episodes/Episode/EpisodePreview';
import Spinner from '../../../shared/components/Spinner/Spinner';
import Toast from '../../../shared/components/Toast/Toast';
import errorHandler from '../../../shared/resolvers/errorHandler';

import gql from 'graphql-tag.macro';
import { useQuery } from '@apollo/react-hooks';

const STEP = 5;

const EPISODE_QUERY = gql`
  query Episode($episodeId: ID!) {
    film(id: $episodeId) {
      episodeID
      director
      title
      openingCrawl
      releaseDate
      characterConnection {
        edges {
          node {
            id
            name
          }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
        people: characters {
          id
          name
        }
      }
    }
  }
`;

const Episode = () => {
  const [fetchMoreError, setFetchMoreError] = useState(null);
  const { episodeId } = useParams();

  const { data, loading, error, fetchMore } = useQuery(EPISODE_QUERY, {
    variables: {
      episodeId,
    },
  });

  if (loading) return <Spinner />;
  if (error) return <Toast>{errorHandler(error)}</Toast>;
  if (fetchMoreError) return <Toast>{errorHandler(fetchMoreError)}</Toast>;

  const {
    film: episode,
    film: {
      characterConnection: {
        pageInfo: { hasNextPage, endCursor },
        /* eslint-disable-next-line no-empty-pattern */
        people: [],
      },
    },
  } = data;

  const loadMoreCharacters = () => {
    fetchMore({
      variables: {
        first: STEP,
        after: endCursor,
      },
      updateQuery: (prev, { fetchMoreResult: { episode } }) => {
        if (!hasNextPage) {
          return prev;
        }

        return {
          episode: {
            ...episode,
            edges: [...prev.episode.edges, ...episode.edges],
            people: {
              ...prev.episode.people,
              ...episode.people,
            },
          },
        };
      },
    }).catch((error) => setFetchMoreError(error));
  };

  return (
    <EpisodePreview
      episode={episode}
      hasNextPage={hasNextPage}
      loadMoreCharacters={loadMoreCharacters}
    />
  );
};

export default Episode;
