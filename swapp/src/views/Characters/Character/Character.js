import React from 'react';
import { useParams } from 'react-router-dom';
import CharacterPreview from '../../../components/Characters/Character/CharacterPreview';
import Spinner from '../../../shared/components/Spinner/Spinner';

import gql from 'graphql-tag.macro';
import { useQuery } from '@apollo/react-hooks';

const CHARACTER_QUERY = gql`
  query Character($characterId: ID!) {
    person(id: $characterId) {
      id
      name
      image
      height
      mass
      species {
        name
      }
      homeworld {
        name
      }
      starships(first: 100) {
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

const Character = () => {
  const { characterId } = useParams();
  const { data, loading, error } = useQuery(CHARACTER_QUERY, {
    variables: { characterId },
  });

  if (loading) return <Spinner />;
  if (error)
    return <div style={{ color: 'white', margin: '5em' }}>{error.message}</div>;

  const { person } = data;

  return <CharacterPreview character={person} />;
};

export default Character;
