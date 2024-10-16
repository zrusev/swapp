import React from 'react';
import PropTypes from 'prop-types';

import { Card, Summary, Title, Meta, Media } from './components/_index';

import ReactImageFallback from '../../shared/components/ImageFallback/ImageFallback';
import fallbackImg from '../Episodes/Episode/assets/anonymous_mask_PNG28.png';

const EpisodesPreviewCard = ({
  id,
  image,
  title,
  openingCrawl,
  releaseDate,
}) => (
  <Card to={`/episodes/${id}`}>
    <Media>
      <ReactImageFallback
        src={image}
        fallbackImage={fallbackImg}
        initialImage={fallbackImg}
        alt={`${title}_image`}
      />
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
