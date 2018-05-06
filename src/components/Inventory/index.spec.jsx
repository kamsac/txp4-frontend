import React from 'react';
import { shallow } from 'enzyme';
import Inventory from './index';
import { ITEMS } from '../../resources/player/mock';
import { VENDORS } from '../../resources/vendors/mock';

test('<Inventory>', () => {
  const component = shallow(<Inventory
    items={ITEMS}
    vendors={VENDORS}
    requestItems={jest.fn()}
    requestVendors={jest.fn()}
    equipRegions={['tire', 'engine', 'transmission']}
    onEquipItem={jest.fn()}
  />);
  expect(component).toMatchSnapshot();
});
