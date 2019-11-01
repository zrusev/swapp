import React from 'react';
import {
    Container,
    Header,
    Title,
    Summary,
    Label,
    PeopleWrapper,
    People,
    Person,
    PersonTitle,
    Media,
} from './component/_index';

import ReactImageFallback from "react-image-fallback";
import fallbackImg from './assets/anonymous_mask_PNG28.png';
import { MoreItems } from '../components/_index';

const PersonCard = ({name, image}) => (
    <Person to="/">
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

const EpisodePreview = ({episode: {image, director, title, openingCrawl, releaseDate, people}}) => (
    <>
        <Container>
            <Header>
                <Media>
                    <img src={image} alt="" />
                </Media>
                <Title>
                    {title}
                    <h1>Star Wars: The last jedi</h1>
                    <h3>Attack of the clones</h3>
                </Title>
            </Header>
            <Summary>
                {openingCrawl}
                <Label>Director:&nbsp;
                    <span>{director}</span>
                </Label>
                <Label>Release Date:&nbsp;
                    <span>{releaseDate}</span>
                </Label>
            </Summary>
            <PeopleWrapper>
                <People>
                    {
                        people.edges.map(({node: person}) => 
                            <PersonCard 
                                key={person.id}
                                name={person.name}
                                image={person.image}
                        />)
                    }
                </People>
            </PeopleWrapper>
        </Container>
        <MoreItems>
            <button type="submit">
                <b>Load More</b>
            </button>
        </MoreItems>
    </>
);

export default EpisodePreview;
