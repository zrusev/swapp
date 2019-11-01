import React from 'react';

import {
    Container,
    Wrapper,
    Card,
    Summary,
    Title,
    Meta,
    Media,
    MoreItems,
} from './components/_index';

const EpisodeCard = ({id, image, title, openingCrawl, releaseDate}) => (
    <Card to='/{id}'>
        <Media>
            <img src={image} alt="episode_image" />
        </Media>
        <Title>
            <h3>{title}</h3>
        </Title>
        <Summary>
            {openingCrawl}
        </Summary>
        <Meta className="meta-data">
            Released Date: {releaseDate}
        </Meta>
    </Card>
);

const EpisodesPreview = ({episodes}) => {
    return (
        <>
            <Container>
                <Wrapper>
                    {
                        episodes.edges.map(({node: episode}) => 
                            <EpisodeCard 
                                key={episode.episodeId}
                                id={episode.id}
                                episodeId={episode.episodeId}
                                director={episode.director}
                                image={episode.image}
                                title={episode.title}
                                openingCrawl={episode.openingCrawl}
                                releaseDate={episode.releaseDate}
                        />)
                    }
                </Wrapper>
            </Container>
            <MoreItems>
                <button type="submit">
                    <b>Load More</b>
                </button>
            </MoreItems>
        </>
    )
};

export default EpisodesPreview;