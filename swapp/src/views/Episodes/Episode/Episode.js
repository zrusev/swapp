import React from 'react';
import { useParams } from 'react-router-dom';
import EpisodePreview from '../../../components/Episodes/Episode/EpisodePreview'

import gql from 'graphql-tag.macro';
import { useQuery } from '@apollo/react-hooks';

const EPISODE_QUERY = gql`
    query Episode($episodeId: ID!, $first: Int!, $after: String) {
      episode(id: $episodeId) {
        episodeId
        director
        image
        title
        openingCrawl
        releaseDate
        people(first: $first, after: $after) {
          pageInfo {
            hasNextPage
            endCursor
          }
          edges {
            node {
              id
              name
              image
            }
          }
        }
      }
    }
`;

const Episode = () => {   
    const { episodeId } = useParams();
    const { data, loading, error, fetchMore } = useQuery(EPISODE_QUERY, {
      variables: { 
        episodeId,
        first: 5
      }
    });

    if (loading) return (<div style={{color: 'white', margin: '5em' }}>Loading...</div>);
    if (error) return (<div style={{color: 'white', margin: '5em' }}>{error.message}</div>);

    const { 
      episode,
      episode: { people: { pageInfo: { hasNextPage, endCursor } }}
    } = data;

    const loadMoreCharacters = () => {
      fetchMore({
        variables: {
          first: 5,
          after: endCursor,
        },
        updateQuery: (prev, { fetchMoreResult: { episode } } ) => {
          if (!hasNextPage) {
            return prev;
          }
         
          return {
            episode: {
              ...episode,
              people: {
                ...prev.episode.people,
                ...episode.people,
                edges: [
                  ...prev.episode.people.edges, 
                  ...episode.people.edges
                ]
              },
            },
          };
        },
      });
    };

    return (
      <EpisodePreview 
        episode={episode} 
        hasNextPage={hasNextPage}
        loadMoreCharacters={loadMoreCharacters}
      />
    )
}

export default Episode;