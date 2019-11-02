import React from 'react';
import { useParams } from 'react-router-dom';
import StarshipPreview from '../../../components/Starships/StarshipPreview/StarshipPreview'

import gql from 'graphql-tag.macro';
import { useQuery } from '@apollo/react-hooks';

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

const Starships = () => {
    const { starshipId } = useParams();
    const { data, loading, error } = useQuery(STARSHIP_QUERY, {
      variables: { starshipId }
    });

    if (loading) return (<div style={{color: 'white', margin: '5em' }}>Loading...</div>);
    if (error) return (<div style={{color: 'white', margin: '5em' }}>{error.message}</div>);

    const { starship } = data;

    return (
        <StarshipPreview starship={starship}/>
    )
}

export default Starships;