import React from 'react';
import CharactersPreview from '../../components/Characters/CharactersPreview';
import Spinner from '../../shared/components/Spinner/Spinner';

import gql from 'graphql-tag.macro';
import { useQuery } from '@apollo/react-hooks';

const STEP = 12;

const ALL_CHARACTERS = gql`
  query AllCharacters($first: Int!, $after: String) {
    allPeople(first: $first, after: $after) {
      pageInfo {
        hasNextPage
        endCursor
      }
      totalCount
      edges {
        node {
          id
          name
          image
        }
      }
    }
  }
`;

const Characters = () => {
  const { data, loading, error, fetchMore } = useQuery(ALL_CHARACTERS, {
    variables: {
      first: STEP,
    },
  });

  if (loading) return <Spinner />;
  if (error)
    return <div style={{ color: 'white', margin: '5em' }}>{error.message}</div>;

  const {
    allPeople,
    allPeople: {
      totalCount,
      pageInfo: { hasNextPage, endCursor },
    },
  } = data;

  const loadMoreCharacters = () => {
    fetchMore({
      variables: {
        first: STEP,
        after: endCursor,
      },
      updateQuery: (prev, { fetchMoreResult: { allPeople } }) => {
        if (!hasNextPage) {
          return prev;
        }

        return {
          allPeople: {
            ...allPeople,
            edges: [...prev.allPeople.edges, ...allPeople.edges],
          },
        };
      },
    });
  };

  return (
    <CharactersPreview
      allPeople={allPeople}
      hasNextPage={hasNextPage}
      totalCount={totalCount}
      loadMoreCharacters={loadMoreCharacters}
    />
  );
};

export default Characters;
