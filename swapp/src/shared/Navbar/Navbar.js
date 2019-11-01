import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from "react-transition-group";
import HamburgerMenu from 'react-hamburger-menu';
import { withTheme } from 'styled-components';

import ThemeToggle from './ThemeToggle';

import {
    Header,
    Wrapper,
    ExitContainer,
    ExitButton,
    Hamburger,
    NavAnimation,
    Link,
} from './components/_index';

const Navbar = ({theme: {primaryHeadingFontColor}, children }) => {   
    const [isNavVisible, setNavVisibility] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 700px)');

        mediaQuery.addListener(handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery); 

        return () => mediaQuery.removeListener(handleMediaQueryChange);
    }, []);

    const handleMediaQueryChange = mediaQuery => mediaQuery.matches 
        ? setIsSmallScreen(true) 
        : setIsSmallScreen(false);

    const toggleNav = () => setNavVisibility(!isNavVisible);

    return (
        <>
            <Header>
                <ThemeToggle>
                    <span>SWAPP</span>
                </ThemeToggle>
                <CSSTransition
                    in={!isSmallScreen || isNavVisible}
                    timeout={350}
                    classNames="NavAnimation"
                    unmountOnExit
                >
                    {() => 
                        <NavAnimation>
                            <Wrapper>
                                <Link to='/episodes'>
                                    Episodes
                                </Link>
                                <Link to='/characters'>
                                    Characters
                                </Link>
                                <ExitContainer onClick={() => {}}>
                                    <span>
                                        <ExitButton />
                                    </span>
                                </ExitContainer>
                            </Wrapper>
                        </NavAnimation>}               
                </CSSTransition>
                <Hamburger onClick={toggleNav}>
                <HamburgerMenu
                    isOpen={isNavVisible}
                    menuClicked={() => {}}
                    width={18}
                    height={15}
                    strokeWidth={2}
                    rotate={0}
                    color={primaryHeadingFontColor}
                    borderRadius={0}
                    animationDuration={0.5}
                />
                </Hamburger>
            </Header>
            <main>
                { children }
            </main>
        </>
    )
}

Navbar.propTypes = {
    theme: PropTypes.object.isRequired,
    children: PropTypes.array.isRequired,
}

export default withTheme(Navbar);