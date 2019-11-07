import React from 'react';
import { shallow } from 'enzyme';

import Toast from '../../Toast/Toast';

describe('should Toast component be styled', () => {
  const wrapper = shallow(<Toast>message</Toast>);

  it('should be mount', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should load children', () => {
    expect(wrapper.text()).toEqual('message');
  });

  it('should load children html', () => {
    expect(wrapper.containsMatchingElement('message')).toBeTruthy();
  });
});
