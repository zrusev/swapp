import React from 'react';
import { shallow } from 'enzyme';

import { Hamburger } from '../../../Navbar/components/_index';

describe('should Hamburger be styled', () => {
  it('should be styled', () => {
    const wrapper = shallow(<Hamburger />);

    expect(wrapper).toHaveStyleRule('justify-self', 'end');
  });
});
