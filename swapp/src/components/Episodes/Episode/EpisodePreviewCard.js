import React from 'react';
import PropTypes from 'prop-types';

import {
    Person,
    PersonTitle,
    Media,
} from './component/_index';

import ReactImageFallback from "react-image-fallback";
import fallbackImg from './assets/anonymous_mask_PNG28.png';

const EpisodePreviewCard = ({id, name, image}) => (
    <Person  to={`/characters/${id}`}>
        <Media>
            <ReactImageFallback
                src={image} 
                fallbackImage={fallbackImg}
                initialImage={fallbackImg}
                alt={`${name}_image`}
            />
        </Media>
        <PersonTitle>
            <h5>{name}</h5>
        </PersonTitle>
    </Person>
);

EpisodePreviewCard.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
}

export default EpisodePreviewCard;