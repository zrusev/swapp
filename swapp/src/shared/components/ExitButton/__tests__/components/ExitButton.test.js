import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import { ExitButton as Button } from '../../components/ExitButton';

describe('should exit button be styled', () => {
  it('should contain styles', () => {
    const wrapper = shallow(<Button />);

    expect(wrapper).toHaveStyleRule('background-position', 'center');
  });
});
