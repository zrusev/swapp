import React from 'react';
import { 
    Container,
    Person,
    Media,
    People,
} from './components/_index';

import { PersonTitle } from '../Episodes/Episode/component/_index';
import { MoreItems } from '../Episodes/components/_index';

import ReactImageFallback from "react-image-fallback";
import fallbackImg from '../Episodes/Episode/assets//anonymous_mask_PNG28.png';

const PersonCard = ({id, name, image}) => (
    <Person to={`/${id}`}>
        <Media>
            <ReactImageFallback
                src={image} 
                fallbackImage={fallbackImg}
                alt={`${name}_image`}
            />
        </Media>
        <PersonTitle>
            <h5>{name}</h5>
        </PersonTitle>
    </Person>
);

const CharactersPreview = ({characters: people}) => {  
    return(
        <>
            <Container>
                <People>
                    {
                        people.edges.map(({node: person}) => 
                            <PersonCard 
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

export default CharactersPreview;