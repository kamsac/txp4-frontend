import React from 'react';
import { shallow } from 'enzyme';
import EquippedItems from './index';
import { ITEMS } from '../../resources/player/mock';
import { VENDORS } from '../../resources/vendors/mock';

test('<EquippedItems>', () => {
  const component = shallow(<EquippedItems
    equipRegions={['tire', 'engine', 'transmission']}
    items={ITEMS}
    vendors={VENDORS}
  />);
  expect(component).toMatchSnapshot();
});
