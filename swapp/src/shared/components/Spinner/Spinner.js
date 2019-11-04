import React from 'react';
import { OrbitSpinner } from 'react-epic-spinners';
import { withTheme } from 'styled-components';

export default withTheme(({ theme: { primaryHeadingFontColor } }) => (
  <OrbitSpinner
    size={150}
    color={primaryHeadingFontColor}
    style={{ margin: '10em auto' }}
  />
));
