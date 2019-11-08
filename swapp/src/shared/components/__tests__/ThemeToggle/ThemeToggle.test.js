import React from 'react';
import { shallow, mount } from 'enzyme';

import ThemeToggle from '../../ThemeToggle/ThemeToggle';
import { Logo } from '../../ThemeToggle/components/_index';
import { ThemeContext } from '../../../../style/contexts/themeContext';

describe('should ThemeToggle acts as a function container', () => {
  const props = {
    toggleTheme: jest.fn(),
  };

  it('should match description', () => {
    const wrapper = shallow(
      <ThemeContext.Provider value={{ ...props }}>
        <ThemeToggle>
          <span>Click here</span>
        </ThemeToggle>
      </ThemeContext.Provider>,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should respond on click action', () => {
    const wrapper = mount(
      <ThemeContext.Provider value={{ ...props }}>
        <ThemeToggle>
          <span>Click here</span>
        </ThemeToggle>
      </ThemeContext.Provider>,
    );

    wrapper.find(Logo).simulate('click');
    expect(props.toggleTheme).toHaveBeenCalled();
  });
});
