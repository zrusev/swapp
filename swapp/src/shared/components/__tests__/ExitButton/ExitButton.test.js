import React from 'react';
import { shallow, mount } from 'enzyme';

import ExitButton from '../../ExitButton/ExitButton';

describe('exit button component', () => {
  const props = {
    action: jest.fn(),
  };

  it('should match snapshot', () => {
    const wrapper = shallow(<ExitButton {...props} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should call passed function on click', () => {
    const wrapper = mount(<ExitButton {...props} />);

    wrapper.simulate('click');
    expect(props.action).toHaveBeenCalled();
  });
});
