import React from 'react';
import CharactersPreview from '../../components/Characters/CharactersPreview'

import gql from 'graphql-tag.macro';
import { useQuery } from '@apollo/react-hooks';

const ALL_CHARACTERS = gql`
  query AllCharacters {
    allPeople(first: 12) {
      edges {
        node {
          id
          name
          image
        }
      }
    }
  }
`

const Characters = () => {
    const { data, loading, error } = useQuery(ALL_CHARACTERS);
      
    if(loading) return (<div style={{color: 'white', margin: '5em' }}>Loading...</div>);
    if(error) return (<div style={{color: 'white', margin: '5em' }}>{error.message}</div>);

    const { allPeople } = data;

    return (
        <CharactersPreview 
          characters={allPeople} 
        />
    )
}

export default Characters;