import React from 'react';
import { shallow } from 'enzyme';

import Spinner from '../../Spinner/Spinner';

describe('should mount spinner', () => {
  it('should contain spinner', () => {
    const props = {
      theme: {
        primaryHeadingFontColor: 'yellow',
      },
    };

    const wrapper = shallow(<Spinner {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
