import React from 'react';
import PropTypes from 'prop-types';

import { ExitContainer, ExitButton as Button } from './components/_index';

const ExitButton = ({ action }) => (
  <ExitContainer onClick={action}>
    <span>
      <Button />
    </span>
  </ExitContainer>
);

ExitButton.propTypes = {
  action: PropTypes.func,
};

export default ExitButton;
