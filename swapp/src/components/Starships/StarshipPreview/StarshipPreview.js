import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper as RadarWrapper, Radar } from './components/_index';

import {
  Container,
  Card,
  Header,
  Wrapper,
  Media,
  Details,
  Title,
} from '../../Characters/Character/components/_index';

import { Label } from '../../Episodes/Episode/component/_index';
import ReactImageFallback from '../../../shared/components/ImageFallback/ImageFallback';
import fallbackImg from '../../Episodes/Episode/assets/anonymous_mask_PNG28.png';

const StarshipPreview = ({
  starship: {
    id,
    name,
    model,
    image,
    starshipClass,
    costInCredits,
    maxAtmospheringSpeed,
    MGLT,
    hyperdriveRating,
    crew,
  },
  radarFeed,
}) => (
  <>
    <Header>
      <h1>{name}</h1>
      <h3>({model})</h3>
    </Header>
    <Container>
      <Card>
        <Title>
          <h3>{name}</h3>
        </Title>
        <Details>
          <Media>
            <ReactImageFallback
              src={image}
              fallbackImage={fallbackImg}
              initialImage={fallbackImg}
              alt={`${name}_image`}
            />
          </Media>
          <Label>
            Class:&nbsp;
            <span>{starshipClass}</span>
          </Label>
          <Label>
            Cost:&nbsp;
            <span>
              {costInCredits === undefined || costInCredits === null
                ? 0
                : costInCredits}{' '}
              credits
            </span>
          </Label>
          {crew && (
            <Label>
              Crew:&nbsp;
              <span>{crew}</span>
            </Label>
          )}
          {maxAtmospheringSpeed && (
            <Label>
              Max Atmospheric Speed:&nbsp;
              <span>{maxAtmospheringSpeed}</span>
            </Label>
          )}
          {MGLT && (
            <Label>
              Max ML per Hour:&nbsp;
              <span>{MGLT}</span>
            </Label>
          )}
          {hyperdriveRating && (
            <Label>
              Hyperdrive Rating:&nbsp;
              <span>{hyperdriveRating}</span>
            </Label>
          )}
        </Details>
      </Card>
      <Wrapper>
        <Title>
          <h1>Compared to Starship Class Max</h1>
        </Title>
        <RadarWrapper>
          <Radar data={radarFeed} />
        </RadarWrapper>
      </Wrapper>
    </Container>
  </>
);

StarshipPreview.propTypes = {
  starship: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    model: PropTypes.string,
    image: PropTypes.string,
    starshipClass: PropTypes.string,
    costInCredits: PropTypes.number,
    maxAtmospheringSpeed: PropTypes.number,
    MGLT: PropTypes.number,
    hyperdriveRating: PropTypes.number,
    crew: PropTypes.string,
  }).isRequired,
  radarFeed: PropTypes.array.isRequired,
};

export default StarshipPreview;
