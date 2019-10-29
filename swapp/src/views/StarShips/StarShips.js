import React from 'react';

import {
    Container,
    Card,
    Header,
    Wrapper,
    Line,
    Media,
    Details,
    Title,
} from '../Characters/Character/components/_index';

import { 
    Label,
} from '../Episodes/Episode/component/_index';

const StarShips = () => {

    return (
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
                            <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/obi-wan-show-1567178968.jpg?crop=0.486xw:0.973xh;0.512xw,0.00340xh&resize=480:*" alt="" />
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
                    <Line />

                </Wrapper>
            </Container>
        </>
    );
};

export default StarShips;