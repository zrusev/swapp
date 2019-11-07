import React from 'react';
import { shallow } from 'enzyme';

import { Input } from '../../Login/components/_index';

import LoginPreview from '../../Login/LoginPreview';

describe('login form component', () => {
  const props = {
    login: jest.fn(),
  };
  const wrapper = shallow(<LoginPreview {...props} />);

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have input fields', () => {
    expect(wrapper.find(Input).length).toEqual(2);
  });

  it('should change email value when typed', () => {
    const input = wrapper.find(Input).at(0);

    input.simulate('change', {
      persist: jest.fn(),
      target: {
        name: 'email',
        value: 'demo@st6.io',
      },
    });

    expect(
      wrapper
        .find(Input)
        .at(0)
        .prop('value'),
    ).toEqual('demo@st6.io');
  });

  it('should change password value when typed', () => {
    const input = wrapper.find(Input).at(1);

    input.simulate('change', {
      persist: jest.fn(),
      target: {
        name: 'password',
        value: 'password',
      },
    });

    expect(
      wrapper
        .find(Input)
        .at(1)
        .prop('value'),
    ).toEqual('password');
  });
});
