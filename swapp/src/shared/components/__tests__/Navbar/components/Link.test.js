import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { mount } from 'enzyme';

import { Link } from '../../../Navbar/components/_index';

describe('should Link be styled', () => {
  it('should be styled', () => {
    const wrapper = mount(
      <Router>
        <Link to="/episodes">Episodes</Link>
      </Router>,
    );

    expect(wrapper).toHaveStyleRule('font-size', '0.8em');
  });
});
