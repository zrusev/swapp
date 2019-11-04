import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Logo } from './components/_index';
import { ThemeContext } from '../../../style/contexts/themeContext';

const ThemeToggle = ({ children }) => {
  const { toggleTheme } = useContext(ThemeContext);

  return <Logo onClick={toggleTheme}>{children}</Logo>;
};

ThemeToggle.propTypes = {
  children: PropTypes.object.isRequired,
};

export default ThemeToggle;
