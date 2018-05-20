import React from 'react';
import { shallow } from 'enzyme';
import EquipRegion from './index';
import { ITEMS } from '../../resources/players/mock';
import { VENDORS } from '../../resources/vendors/mock';

test('<EquipRegion>', () => {
  const component = shallow(<EquipRegion item={ITEMS[0]} vendors={VENDORS} />);
  expect(component).toMatchSnapshot();
});
