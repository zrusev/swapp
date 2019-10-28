import React from 'react';

import {
    Container,
    Card,
    Header,
    Wrapper,
    Line,
    People,
    Media,
    Details,
    Title,
    StarshipMedia,
    Starship,
} from './components/_index';

import { 
    Label,
    PersonTitle as StarshipTitle,
} from '../../Episodes/Episode/component/_index';

const Character = () => {
    return (
        <>
            <Header>
                <h1>Obi-Wan Kenobi</h1>
            </Header>
            <Container>
                <Card>
                    <Title>
                        <h3>Obi-Wan Kenobi</h3>
                    </Title>
                    <Details>
                        <Media>
                            <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/obi-wan-show-1567178968.jpg?crop=0.486xw:0.973xh;0.512xw,0.00340xh&resize=480:*" alt="" />
                        </Media>
                        <Label>Height:&nbsp;
                            <span>
                                182
                            </span>
                        </Label>
                        <Label>Weight:&nbsp;
                            <span>
                                77
                            </span>
                        </Label>
                        <Label>Species:&nbsp;
                            <span>
                                Human
                            </span>
                        </Label>
                        <Label>Home World:&nbsp;
                            <span>
                                Stewjon
                            </span>
                        </Label>
                    </Details>
                </Card>
                <Wrapper>
                    <Title>
                        <h1>Piloted Starships</h1>
                    </Title>
                    <Line />
                    <People>
                        <Starship to="/">
                            <StarshipMedia>
                                <img src={"https://fsmedia.imgix.net/eb/d1/19/f1/9a64/4b2d/8471/d02314b53684/obi-wan-kenobi-in-the-original-star-wars.jpeg?crop=edges&fit=crop&auto=compress&h=1200&w=1200"} alt="" />
                            </StarshipMedia>
                            <StarshipTitle>
                                <h5>Anakin Skywalker</h5>
                            </StarshipTitle>
                        </Starship>
                        <Starship to="/">
                            <StarshipMedia>
                                <img src={"https://fsmedia.imgix.net/eb/d1/19/f1/9a64/4b2d/8471/d02314b53684/obi-wan-kenobi-in-the-original-star-wars.jpeg?crop=edges&fit=crop&auto=compress&h=1200&w=1200"} alt="" />
                            </StarshipMedia>
                            <StarshipTitle>
                                <h5>Anakin Skywalker</h5>
                            </StarshipTitle>
                        </Starship>
                        <Starship to="/">
                            <StarshipMedia>
                                <img src={"https://fsmedia.imgix.net/eb/d1/19/f1/9a64/4b2d/8471/d02314b53684/obi-wan-kenobi-in-the-original-star-wars.jpeg?crop=edges&fit=crop&auto=compress&h=1200&w=1200"} alt="" />
                            </StarshipMedia>
                            <StarshipTitle>
                                <h5>Anakin Skywalker</h5>
                            </StarshipTitle>
                        </Starship>
                    </People>
                </Wrapper>
            </Container>
        </>
    )
}

export default Character;