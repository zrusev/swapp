import React from 'react';
import { useParams } from 'react-router-dom';
import CharacterPreview from '../../../components/Characters/Character/CharacterPreview';
import Spinner from '../../../shared/components/Spinner/Spinner';
import Toast from '../../../shared/components/Toast/Toast';
import errorHandler from '../../../shared/resolvers/errorHandler';

import gql from 'graphql-tag.macro';
import { useQuery } from '@apollo/react-hooks';

const CHARACTER_QUERY = gql`
  query Character($characterId: ID!) {
    person(id: $characterId) {
      id
      name
      height
      mass
      species {
        name
      }
      homeworld {
        name
      }
      starshipConnection {
        starships {
          id
          name
        }
        edges {
          node {
            id
            name
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
  if (error) return <Toast>{errorHandler(error)}</Toast>;

  const { person } = data;

  return <CharacterPreview character={person} />;
};

export default Character;
