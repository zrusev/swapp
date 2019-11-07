import React from 'react';
import { shallow } from 'enzyme';

import ReactImageFallback from '../../ImageFallback/ImageFallback';

describe('should ReactImageFallback be styled', () => {
  it('should mount', () => {
    const props = {
      fallbackImage: '',
    };
    const wrapper = shallow(<ReactImageFallback {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
