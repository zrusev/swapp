import React from 'react';
import PropTypes from 'prop-types';

import { Card, Summary, Title, Meta, Media } from './components/_index';

const EpisodesPreviewCard = ({
  id,
  image,
  title,
  openingCrawl,
  releaseDate,
}) => (
  <Card to={`/episodes/${id}`}>
    <Media>
      <img src={image} alt="episode_image" />
    </Media>
    <Title>
      <h3>{title}</h3>
    </Title>
    <Summary>{openingCrawl}</Summary>
    <Meta className="meta-data">Released Date: {releaseDate}</Meta>
  </Card>
);

EpisodesPreviewCard.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string,
  title: PropTypes.string,
  openingCrawl: PropTypes.string,
  releaseDate: PropTypes.string,
};

export default EpisodesPreviewCard;
