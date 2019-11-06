import React from 'react';
import { shallow, mount } from 'enzyme';

import ExitButton from '../ExitButton';

describe('exit button component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<ExitButton />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should call passed function on click', () => {
    const props = {
      action: jest.fn(),
    };

    const wrapper = mount(<ExitButton {...props} />);

    wrapper.simulate('click');
    expect(props.action).toHaveBeenCalled();
  });
});
