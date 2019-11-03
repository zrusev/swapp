import React from 'react';

import {
    ExitContainer,
    ExitButton as Button,
} from './components/_index';

const ExitButton = ({action}) => (
    <ExitContainer onClick={action}>
        <span>
            <Button />
        </span>
    </ExitContainer>
);

export default ExitButton;