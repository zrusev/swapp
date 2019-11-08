import React from 'react';
import { shallow } from 'enzyme';

import { ExitContainer } from '../../../ExitButton/components/_index';

describe('should exit container be styled', () => {
  it('should contain styles', () => {
    const wrapper = shallow(<ExitContainer />);

    expect(wrapper).toHaveStyleRule('cursor', 'pointer');
  });
});
