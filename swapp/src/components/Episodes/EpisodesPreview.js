import React from 'react';
import PropTypes from 'prop-types';

import {
    Container,
    Wrapper,
} from './components/_index';

import EpisodesPreviewCard from './EpisodesPreviewCard';

const EpisodesPreview = ({episodes}) => {
    return (
        <>
            <Container>
                <Wrapper>
                    {
                        episodes.edges.map(({node: episode}) => 
                            <EpisodesPreviewCard 
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
        </>
    )
};

EpisodesPreview.propTypes = {
    episodes: PropTypes.object.isRequired,
}

export default EpisodesPreview;