import React from 'react';
import PropTypes from 'prop-types';

import { Container, People } from './components/_index';
import { MoreItems } from '../Episodes/components/_index';

import CharactersPreviewCard from './CharactersPreviewCard';

const CharactersPreview = ({
    allPeople: people, 
    hasNextPage, 
    totalCount, 
    loadMoreCharacters
}) => {  
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
                            />
                        )
                    }
                </People>
            </Container>
            {
                hasNextPage &&
                    <MoreItems>
                        <button 
                            type="submit"
                            onClick={loadMoreCharacters}
                        >
                            <b>Load More</b>
                        </button>
                    </MoreItems>
            }
        </>
    );
}

CharactersPreview.propTypes = {
    hasNextPage: PropTypes.bool.isRequired,
    totalCount: PropTypes.number.isRequired,
    allPeople: PropTypes.object.isRequired,
    people: PropTypes.exact({
        edges: PropTypes.arrayOf(PropTypes.exact({
                node: PropTypes.exact({
                    id: PropTypes.string.isRequired,
                    name: PropTypes.string.isRequired,
                    image: PropTypes.string,
                }).isRequired,
            })).isRequired,
    }),
    loadMoreCharacters: PropTypes.func.isRequired,
}

export default CharactersPreview;