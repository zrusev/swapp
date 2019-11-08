import React from 'react';
import { shallow } from 'enzyme';

import { Header } from '../../../Navbar/components/_index';

describe('should Header be styled', () => {
  it('should be styled', () => {
    const wrapper = shallow(<Header />);

    expect(wrapper).toHaveStyleRule('position', 'fixed');
  });
});
