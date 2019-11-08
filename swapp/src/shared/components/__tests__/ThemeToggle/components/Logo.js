import React from 'react';
import { shallow } from 'enzyme';

import { Logo } from '../../../ThemeToggle/components/Logo';

describe('should Logo be styled', () => {
  it('should contain styles', () => {
    const wrapper = shallow(<Logo />);

    expect(wrapper).toHaveStyleRule('align-items', 'center');
  });
});
