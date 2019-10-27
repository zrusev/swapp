import React from 'react';
import { 
    Container,
    Person,
} from './components/_index';

import { Media } from '../Episodes/components/Media';

import { 
    People,
    PersonTitle,
} from '../Episodes/Episode/component/_index';

const Characters = () => {  
    return(
        <Container>
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
            </People>
        </Container>
    );
}

export default Characters;