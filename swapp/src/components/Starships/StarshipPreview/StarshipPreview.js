import React from 'react';
import PropTypes from 'prop-types';

import {
    Wrapper as RadarWrapper,
    Radar,
} from './components/_index';

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

const dummy = [
  {
    "metric": "cost_in_credits",
    "value": "250",
  },
  {
    "metric": "max_atmosphering_speed",
    "value": "200",
  },
  {
    "metric": "crew",
    "value": "100",
  },
  {
    "metric": "hyperdrive_rating",
    "value": "180",
  },
  {
    "metric": "MGLT",
    "value": "30",
  }
];

const StarshipPreview = ({starship: 
        {id,
         name, 
         model, 
         image, 
         starshipClass, 
         cost, 
         maxAtmosphericSpeed, 
         maxMLPerHour, 
         hyperdriveRating, 
         crew}
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
                        <img src={image} alt={`${name}_image`} />
                    </Media>
                    <Label>Class:&nbsp;
                        <span>{starshipClass}</span>
                    </Label>
                    <Label>Cost:&nbsp;
                        <span>{cost} credits</span>
                    </Label>
                    <Label>Crew:&nbsp;
                        <span>{crew}</span>
                    </Label>
                    <Label>Max Atmospheric Speed:&nbsp;
                        <span>{maxAtmosphericSpeed}</span>
                    </Label>
                    <Label>Max ML per Hour:&nbsp;
                        <span>{maxMLPerHour}</span>
                    </Label>                    
                    <Label>Hyperdrive Rating:&nbsp;
                        <span>{hyperdriveRating}</span>
                    </Label>
                </Details>
            </Card>
            <Wrapper>
                <Title>
                    <h1>Compared to Starship Class Max</h1>
                </Title>
                <RadarWrapper>
                    <Radar data={dummy} />
                </RadarWrapper>
            </Wrapper>
        </Container>
    </>
);

StarshipPreview.propTypes = {
    starship: PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired, 
        model: PropTypes.string.isRequired, 
        image: PropTypes.string.isRequired, 
        starshipClass: PropTypes.string.isRequired, 
        cost: PropTypes.number, 
        maxAtmosphericSpeed: PropTypes.number, 
        maxMLPerHour: PropTypes.number, 
        hyperdriveRating: PropTypes.number, 
        crew: PropTypes.number,
    }).isRequired,
}

export default StarshipPreview;