import React from 'react'
import { func } from 'prop-types';

const Toggle = ({ toggleTheme }) => {
    return (
        <div onClick={toggleTheme}>
            <a>
                <h1>SWAPP</h1>
            </a>
        </div>
    );
};
  
Toggle.propTypes = {
    toggleTheme: func.isRequired,
}
 
export default Toggle;
  