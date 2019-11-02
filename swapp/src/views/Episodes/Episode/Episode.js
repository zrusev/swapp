import React from 'react';
import { useParams } from 'react-router-dom';
import EpisodePreview from '../../../components/Episodes/Episode/EpisodePreview'

import gql from 'graphql-tag.macro';
import { useQuery } from '@apollo/react-hooks';

const EPISODE_QUERY = gql`
    query Episode($episodeId: ID!) {
      episode(id: $episodeId) {
        episodeId
        director
        image
        title
        openingCrawl
        releaseDate
        people(first: 5) {
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
    const { data, loading, error } = useQuery(EPISODE_QUERY, {
      variables: { episodeId }
    });

    if (loading) return (<div style={{color: 'white', margin: '5em' }}>Loading...</div>);
    if (error) return (<div style={{color: 'white', margin: '5em' }}>{error.message}</div>);

    const { episode } = data;

    return (
      <EpisodePreview episode={episode} />
    )
}

export default Episode;