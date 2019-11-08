import React from 'react';
import { shallow } from 'enzyme';

import { NavAnimation } from '../../../Navbar/components/_index';

describe('should NavAnimation be styled', () => {
  it('should be styled', () => {
    const wrapper = shallow(<NavAnimation />);

    expect(wrapper).toHaveStyleRule('grid-column', '1 / 4', {
      media: '(max-width: 700px)',
    });
  });
});
