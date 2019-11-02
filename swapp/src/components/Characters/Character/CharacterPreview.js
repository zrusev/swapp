import React from 'react';
import PropTypes from 'prop-types';

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
} from './components/_index';
import { Label } from '../../Episodes/Episode/component/_index';
import CharacterPreviewCard from './CharacterPreviewCard';

import ReactImageFallback from "react-image-fallback";
import fallbackImg from '../../Episodes/Episode/assets/anonymous_mask_PNG28.png';

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
                        <ReactImageFallback
                            src={image} 
                            fallbackImage={fallbackImg}
                            initialImage={fallbackImg}
                            alt={`${name}_image`}
                        />
                        </Media>
                        <Label>Height:&nbsp;
                            <span>{height}</span>
                        </Label>
                        <Label>Weight:&nbsp;
                            <span>{mass}</span>
                        </Label>
                        <Label>Species:&nbsp;
                            <span>{species.name}</span>
                        </Label>
                        <Label>Home World:&nbsp;
                            <span>{homeworld.name}</span>
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
                                <CharacterPreviewCard 
                                    key={starship.id}
                                    id={starship.id}
                                    name={starship.name}
                                    image={starship.image}
                                />
                            )
                        }
                    </StarShips>
                </Wrapper>
            </Container>
        </>
    )
}

CharacterPreview.propTypes = {
    character: PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired, 
        height: PropTypes.number.isRequired, 
        mass: PropTypes.number.isRequired, 
        species: PropTypes.exact({
            name: PropTypes.string.isRequired,
        }).isRequired,
        homeworld: PropTypes.exact({
            name: PropTypes.string.isRequired,
        }).isRequired, 
        starships: PropTypes.exact({
            edges: PropTypes.arrayOf(PropTypes.exact({
                node: PropTypes.exact({
                    id: PropTypes.string.isRequired,
                    name: PropTypes.string.isRequired,
                    image: PropTypes.string.isRequired,
                }).isRequired
            })).isRequired,
        }).isRequired,
    }).isRequired,
}

export default CharacterPreview;