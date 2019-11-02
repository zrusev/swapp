import React from 'react';
import PropTypes from 'prop-types';

import {
    StarshipMedia,
    Starship,
} from './components/_index';

import { PersonTitle as StarshipTitle } from '../../Episodes/Episode/component/_index';

import ReactImageFallback from "react-image-fallback";
import fallbackImg from '../../Episodes/Episode/assets/anonymous_mask_PNG28.png';

const CharacterPreviewCard = ({id, name, image}) => (
    <Starship to={`/${id}`}>
        <StarshipMedia>
            <ReactImageFallback
                src={image} 
                fallbackImage={fallbackImg}
                initialImage={fallbackImg}
                alt={`${name}_image`}
            />
        </StarshipMedia>
        <StarshipTitle>
            <h5>{name}</h5>
        </StarshipTitle>
    </Starship>
);

CharacterPreviewCard.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
}

export default CharacterPreviewCard;
