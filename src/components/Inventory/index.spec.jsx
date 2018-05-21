import React from 'react';
import { shallow } from 'enzyme';
import Inventory from './index';
import { ITEMS } from '../../resources/players/mock';
import { VENDORS } from '../../resources/vendors/mock';

test('<Inventory>', () => {
  const component = shallow(<Inventory
    items={ITEMS}
    vendors={VENDORS}
    loadPlayerInventory={jest.fn()}
    loadVendors={jest.fn()}
    equipRegions={['tire', 'engine', 'transmission']}
    onEquipItem={jest.fn()}
    isUserOwner
  />);
  expect(component).toMatchSnapshot();
});
