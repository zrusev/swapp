import React from 'react';
import { Link } from 'react-router-dom';
import {
    Container,
    Wrapper,
    Card,
    Header,
    Summary,
    Title,
    Meta,
} from './components/_index';

const Episodes = () => {
    return (
        <Container>
            <Wrapper>
                <Card to="/">
                    <Header />
                    <Title>
                        <h3>This is a title for a card</h3>
                    </Title>
                    <Summary>
                        A summary will also be present. Usually two to three brief sentences about the content on the detail
                        page. A summary will also be present. Usually two to three brief sentences about the content on the
                        detail...
                    </Summary>
                    <Meta className="meta-data">
                        Released Date: June 18th, 2015
                    </Meta>
                </Card>
                <Card to="/">
                    <Header />
                    <Title>
                        <h3>This is a title for a card</h3>
                    </Title>
                    <Summary>
                        Each card is created from an &lt;a&gt; tag so the whole card is linked.
                        Each card is created from an &lt;a&gt; tag so the whole card is linked.
                        Each card is created from an &lt;a&gt; tag so the whole card is linked.
                    </Summary>
                    <Meta className="meta-data">
                        Published: June 18th, 2015
                    </Meta>
                </Card>
                <Card to="/">
                    <Header />
                    <Title>
                        <h3>This is a title for a card</h3>
                    </Title>
                    <Summary>
                        Using Flexbox is such a an easy, well supported way for grid-style content, such as cards. The cards
                        height will expand to match the longest item.
                    </Summary>
                    <Meta className="meta-data">
                        Published: June 18th, 2015
                    </Meta>
                </Card>
                <Card to="/">
                    <Header />
                    <Title>
                        <h3>This is a title for a card</h3>
                    </Title>
                    <Summary>
                        A summary will also be present. Usually two to three brief sentences about the content on the detail
                        page.
                    </Summary>
                    <Meta className="meta-data">
                        Published: June 18th, 2015
                    </Meta>
                </Card>
                <Card to="/">
                    <Header />
                    <Title>
                       <h3>This is a title for a card</h3>
                    </Title>
                    <Summary>
                        Each card is created from an &lt;a&gt; tag so the whole card is linked.
                    </Summary>
                    <Meta className="meta-data">
                        Published: June 18th, 2015
                    </Meta>
                </Card>
                <Card to="/">
                    <Header />
                    <Title>
                        <h3>This is a title for a card</h3>
                    </Title>
                    <Summary>
                        Using Flexbox is such a an easy, well supported way for grid-style content, such as cards. The cards
                        height will expand to match the longest item.
                    </Summary>
                    <Meta className="meta-data">
                        Published: June 18th, 2015
                    </Meta>
                </Card>
            </Wrapper>
        </Container>
    )
};

export default Episodes;