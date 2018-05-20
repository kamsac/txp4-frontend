import React from 'react';
import { shallow } from 'enzyme';
import InventoryItemTitle from './index';
import { ITEMS } from '../../resources/players/mock';
import { VENDORS } from '../../resources/vendors/mock';

test('<InventoryItemTitle>', () => {
  const component = shallow(<InventoryItemTitle
    item={ITEMS[0]}
    vendors={VENDORS}
  />);
  expect(component).toMatchSnapshot();
});
