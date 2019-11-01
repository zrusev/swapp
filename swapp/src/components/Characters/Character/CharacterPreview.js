import React from 'react';

import {
    Container,
    Card,
    Header,
    Wrapper,
    Line,
    StarShips,
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

import ReactImageFallback from "react-image-fallback";
import fallbackImg from '../../Episodes/Episode/assets/anonymous_mask_PNG28.png';

const StarshipCard = ({id, name, image}) => (
    <Starship to={`/${id}`}>
        <StarshipMedia>
            <ReactImageFallback
                src={image} 
                fallbackImage={fallbackImg}
                alt={`${name}_image`}
            />
        </StarshipMedia>
        <StarshipTitle>
            <h5>{name}</h5>
        </StarshipTitle>
    </Starship>
);

const CharacterPreview = ({character: {id, name, image, height, mass, species, homeworld, starships}}) => {
    return (
        <>
            <Header>
                <h1>{name}</h1>
            </Header>
            <Container>
                <Card>
                    <Title>
                        <h3>{name}</h3>
                    </Title>
                    <Details>
                        <Media>
                            <img src={image} alt="person_image" />
                        </Media>
                        <Label>Height:&nbsp;
                            <span>
                                {height}
                            </span>
                        </Label>
                        <Label>Weight:&nbsp;
                            <span>
                                {mass}
                            </span>
                        </Label>
                        <Label>Species:&nbsp;
                            <span>
                                {species.name}
                            </span>
                        </Label>
                        <Label>Home World:&nbsp;
                            <span>
                                {homeworld.name}
                            </span>
                        </Label>
                    </Details>
                </Card>
                <Wrapper>
                    <Title>
                        <h1>Piloted Starships</h1>
                    </Title>
                    <Line />
                    <StarShips>
                        {
                            starships.edges.map(({node: starship}) => 
                                <StarshipCard 
                                    key={starship.id}
                                    id={starship.id}
                                    name={starship.name}
                                    image={starship.image}
                            />)
                        }
                    </StarShips>
                </Wrapper>
            </Container>
        </>
    )
}

export default CharacterPreview;