import { useState, useEffect } from 'react';

const useNavbar = () => {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 700px)');

    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => mediaQuery.removeListener(handleMediaQueryChange);
  }, []);

  const handleMediaQueryChange = mediaQuery =>
    mediaQuery.matches ? setIsSmallScreen(true) : setIsSmallScreen(false);

  const toggleNav = () => setNavVisibility(!isNavVisible);

  return {
    isNavVisible,
    isSmallScreen,
    toggleNav,
  };
};

export default useNavbar;
