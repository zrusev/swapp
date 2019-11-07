import React from 'react';
import { shallow } from 'enzyme';

import { ExitButton as Button } from '../../../ExitButton/components/ExitButton';

describe('should exit button be styled', () => {
  it('should contain styles', () => {
    const wrapper = shallow(<Button />);

    expect(wrapper).toHaveStyleRule('background-position', 'center');
  });
});
