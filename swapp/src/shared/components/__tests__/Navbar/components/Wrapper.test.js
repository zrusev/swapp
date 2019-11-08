import React from 'react';
import { shallow } from 'enzyme';

import { Wrapper } from '../../../Navbar/components/_index';

describe('should Wrapper be styled', () => {
  it('should be styled', () => {
    const wrapper = shallow(<Wrapper />);

    expect(wrapper).toHaveStyleRule('justify-items', 'flex-end');
  });
});
