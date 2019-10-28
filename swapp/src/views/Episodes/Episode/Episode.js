import React from 'react';
import {
    Container,
    Header,
    Title,
    Summary,
    Label,
    PeopleWrapper,
    People,
    Person,
    PersonTitle,
    Media,
} from './component/_index';

import { MoreItems } from '../components/_index';

const Episode = () => {
    return (
        <>
            <Container>
                <Header>
                    <Media>
                        <img src={"https://m.media-amazon.com/images/I/81r+LN-YReL._SS500_.jpg"} alt="" />
                    </Media>
                    <Title>
                        <h1>Star Wars: The last jedi</h1>
                        <h3>Attack of the clones</h3>
                    </Title>
                </Header>
                <Summary>
                    {`It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....`}
                    <Label>Director:
                        <span>
                            George Lucas
                        </span>
                    </Label>
                    <Label>Release Date:
                        <span>
                            1995-05-19
                        </span>
                    </Label>
                </Summary>
                <PeopleWrapper>
                    <People>
                        <Person to="/">
                            <Media>
                                <img src={"https://fsmedia.imgix.net/eb/d1/19/f1/9a64/4b2d/8471/d02314b53684/obi-wan-kenobi-in-the-original-star-wars.jpeg?crop=edges&fit=crop&auto=compress&h=1200&w=1200"} alt="" />
                            </Media>
                            <PersonTitle>
                                <h5>Anakin Skywalker</h5>
                            </PersonTitle>
                        </Person>
                        <Person to="/">
                            <Media>
                                <img src={"https://fsmedia.imgix.net/eb/d1/19/f1/9a64/4b2d/8471/d02314b53684/obi-wan-kenobi-in-the-original-star-wars.jpeg?crop=edges&fit=crop&auto=compress&h=1200&w=1200"} alt="" />
                            </Media>
                            <PersonTitle>
                                <h5>Anakin Skywalker</h5>
                            </PersonTitle>
                        </Person>
                        <Person to="/">
                            <Media>
                                <img src={"https://fsmedia.imgix.net/eb/d1/19/f1/9a64/4b2d/8471/d02314b53684/obi-wan-kenobi-in-the-original-star-wars.jpeg?crop=edges&fit=crop&auto=compress&h=1200&w=1200"} alt="" />
                            </Media>
                            <PersonTitle>
                                <h5>Anakin Skywalker</h5>
                            </PersonTitle>
                        </Person>
                        <Person to="/">
                            <Media>
                                <img src={"https://fsmedia.imgix.net/eb/d1/19/f1/9a64/4b2d/8471/d02314b53684/obi-wan-kenobi-in-the-original-star-wars.jpeg?crop=edges&fit=crop&auto=compress&h=1200&w=1200"} alt="" />
                            </Media>
                            <PersonTitle>
                                <h5>Anakin Skywalker</h5>
                            </PersonTitle>
                        </Person>
                        <Person to="/">
                            <Media>
                                <img src={"https://fsmedia.imgix.net/eb/d1/19/f1/9a64/4b2d/8471/d02314b53684/obi-wan-kenobi-in-the-original-star-wars.jpeg?crop=edges&fit=crop&auto=compress&h=1200&w=1200"} alt="" />
                            </Media>
                            <PersonTitle>
                                <h5>Anakin Skywalker</h5>
                            </PersonTitle>
                        </Person>
                        <Person to="/">
                            <Media>
                                <img src={"https://fsmedia.imgix.net/eb/d1/19/f1/9a64/4b2d/8471/d02314b53684/obi-wan-kenobi-in-the-original-star-wars.jpeg?crop=edges&fit=crop&auto=compress&h=1200&w=1200"} alt="" />
                            </Media>
                            <PersonTitle>
                                <h5>Anakin Skywalker</h5>
                            </PersonTitle>
                        </Person>
                        <Person to="/">
                            <Media>
                                <img src={"https://fsmedia.imgix.net/eb/d1/19/f1/9a64/4b2d/8471/d02314b53684/obi-wan-kenobi-in-the-original-star-wars.jpeg?crop=edges&fit=crop&auto=compress&h=1200&w=1200"} alt="" />
                            </Media>
                            <PersonTitle>
                                <h5>Anakin Skywalker</h5>
                            </PersonTitle>
                        </Person>
                    </People>
                </PeopleWrapper>
            </Container>
            <MoreItems>
                <button type="submit">
                    <b>Load More</b>
                </button>
            </MoreItems>
        </>
    )
};

export default Episode;
