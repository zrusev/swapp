import React from 'react';
import PropTypes from 'prop-types';

import {
    Card,
    Summary,
    Title,
    Meta,
    Media,
} from './components/_index';

const EpisodesPreviewCard = ({id, image, title, openingCrawl, releaseDate}) => (
    <Card to={`/${id}`}>
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

EpisodesPreviewCard.propTypes = {
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    openingCrawl: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
}

export default EpisodesPreviewCard;