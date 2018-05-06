import React from 'react';
import { shallow } from 'enzyme';
import Page from './index';

test('<Page>', () => {
  const component = shallow(<Page><div>Something</div></Page>);
  expect(component).toMatchSnapshot();
});
