import React from 'react';
import PropTypes from 'prop-types';

import {
    Person,
    PersonTitle,
    Media,
} from './component/_index';

import ReactImageFallback from "react-image-fallback";
import fallbackImg from './assets/anonymous_mask_PNG28.png';

const EpisodePreviewCard = ({name, image}) => (
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

EpisodePreviewCard.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
}

export default EpisodePreviewCard;