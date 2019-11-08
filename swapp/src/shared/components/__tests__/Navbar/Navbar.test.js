import React from 'react';
import { shallow } from 'enzyme';

import Navbar from '../../Navbar/Navbar';

describe('should Navbar be styled', () => {
  const props = {
    theme: { primaryHeadingFontColor: '' },
    logoutHandler: jest.fn(),
  };

  it('should match description', () => {
    const wrapper = shallow(
      <Navbar {...props}>
        <span>Navigation</span>
      </Navbar>,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
