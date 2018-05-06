import React from 'react';
import { shallow } from 'enzyme';
import EquipRegionPlaceholder from './index';

test('<EquipRegionPlaceholder>', () => {
  const component = shallow(<EquipRegionPlaceholder equipRegion="tire" />);
  expect(component).toMatchSnapshot();
});
