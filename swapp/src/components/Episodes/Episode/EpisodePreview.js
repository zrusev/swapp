import React from 'react';
import PropTypes from 'prop-types';

import {
    Container,
    Header,
    Title,
    Summary,
    Label,
    PeopleWrapper,
    People,
    Media,
} from './component/_index';
import { MoreItems } from '../components/_index';

import EpisodePreviewCard from './EpisodePreviewCard';

const EpisodePreview = ({episode: {episodeId, director, image, title, openingCrawl, releaseDate, people}}) => (
    <>
        <Container>
            <Header>
                <Media>
                    <img src={image} alt="" />
                </Media>
                <Title>
                    <h1>Star Wars: Episode</h1>
                    <h3>{title}</h3>
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
                            <EpisodePreviewCard 
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

EpisodePreview.propTypes = {
    episode: PropTypes.exact({
        episodeId: PropTypes.number.isRequired, 
        image: PropTypes.string.isRequired, 
        director: PropTypes.string.isRequired, 
        title: PropTypes.string.isRequired, 
        openingCrawl: PropTypes.string.isRequired, 
        releaseDate: PropTypes.string.isRequired, 
        people: PropTypes.exact({
            edges: PropTypes.arrayOf(PropTypes.exact({
                node: PropTypes.exact({
                    id: PropTypes.string.isRequired,
                    name: PropTypes.string.isRequired,
                    image: PropTypes.string.isRequired,
                }).isRequired,
            })).isRequired,
        }).isRequired,
    }).isRequired,
}

export default EpisodePreview;
