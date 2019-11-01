import React from 'react';
import PropTypes from 'prop-types';

import { Container, People } from './components/_index';
import { MoreItems } from '../Episodes/components/_index';

import CharactersPreviewCard from './CharactersPreviewCard';

const CharactersPreview = ({characters: people}) => {  
    return(
        <>
            <Container>
                <People>
                    {
                        people.edges.map(({node: person}) => 
                            <CharactersPreviewCard 
                                key={person.id}
                                id={person.id}
                                name={person.name}
                                image={person.image}
                        />)
                    }
                </People>
            </Container>
            <MoreItems>
                <button type="submit">
                    <b>Load More</b>
                </button>
            </MoreItems>
        </>
    );
}

CharactersPreview.propTypes = {
    characters: PropTypes.exact({
    edges: PropTypes.arrayOf(PropTypes.exact({
            node: PropTypes.exact({
                id: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                image: PropTypes.string.isRequired,
            }).isRequired,
        })).isRequired,
    }).isRequired,
}

export default CharactersPreview;