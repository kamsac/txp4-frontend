import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './index';

test('<Navbar>', () => {
  const component = shallow(<Navbar />);
  expect(component).toMatchSnapshot();
});
