import React from 'react';
import { func } from 'prop-types';
import { Link } from 'react-router-dom';
import {
    Header,
    Container,
    Logo,
    Wrapper,
    Item,
    ExitContainer,
    ExitButton,
} from './components/_index';

const Navbar = ({ toggleTheme }) => {
    return (
        <Header>
            <Container>
                <Logo onClick={toggleTheme}>
                    <span href='#'>
                        <h1>SWAPP</h1>
                    </span>
                </Logo>
                <Wrapper>
                    <Item>
                        <Link to='/episodes'>
                            Episodes
                        </Link>
                    </Item>
                    <Item>
                        <Link to='/characters'>
                            Characters
                        </Link>
                    </Item>
                    <ExitContainer onClick={() => {}}>
                        <span>
                            <ExitButton />
                        </span>
                    </ExitContainer>
                </Wrapper>
            </Container>
        </Header>
    )
}

Navbar.propTypes = {
    toggleTheme: func.isRequired,
}

export default Navbar;