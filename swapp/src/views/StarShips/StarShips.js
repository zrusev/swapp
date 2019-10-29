import React from 'react';

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
} from '../Characters/Character/components/_index';

import { 
    Label,
} from '../Episodes/Episode/component/_index';

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

const StarShips = () => (
    <>
        <Header>
            <h1>Jedi starfighter</h1>
            <h3>(Delta-7 Aethersprite-class interceptor)</h3>
        </Header>
        <Container>
            <Card>
                <Title>
                    <h3>Jedi starfighter</h3>
                </Title>
                <Details>
                    <Media>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYvNE9TQzL-IG9aGe4CjZr_u6Tw2ErLvGlMSePWurIiGj8ZijbEA" alt="" />
                    </Media>
                    <Label>Class:&nbsp;
                        <span>
                            Starfighter
                        </span>
                    </Label>
                    <Label>Cost:&nbsp;
                        <span>
                            180000 credits
                        </span>
                    </Label>
                    <Label>Crew:&nbsp;
                        <span>
                            1
                        </span>
                    </Label>
                    <Label>Max Atmospheric Speed:&nbsp;
                        <span>
                            1153
                        </span>
                    </Label>
                    <Label>Hyperdrive Rating:&nbsp;
                        <span>
                            1
                        </span>
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

export default StarShips;