import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import useNavbar from './hooks/useNavbar';
import { CSSTransition } from 'react-transition-group';
import HamburgerMenu from 'react-hamburger-menu';

import ThemeToggle from '../ThemeToggle/ThemeToggle';
import ExitButton from '../ExitButton/ExitButton';

import {
  Header,
  Wrapper,
  Hamburger,
  NavAnimation,
  Link,
} from './components/_index';

const Navbar = ({
  theme: { primaryHeadingFontColor },
  logoutHandler,
  children,
}) => {
  const { isNavVisible, isSmallScreen, toggleNav } = useNavbar();

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
          {() => (
            <NavAnimation>
              <Wrapper>
                <Link to="/episodes">Episodes</Link>
                <Link to="/characters">Characters</Link>
                <ExitButton action={logoutHandler} />
              </Wrapper>
            </NavAnimation>
          )}
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
      <main>{children}</main>
    </>
  );
};

Navbar.propTypes = {
  theme: PropTypes.object.isRequired,
  children: PropTypes.array.isRequired,
  logoutHandler: PropTypes.func.isRequired,
};

export default withTheme(Navbar);
