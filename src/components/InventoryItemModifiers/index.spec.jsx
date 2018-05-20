import React from 'react';
import { shallow } from 'enzyme';
import InventoryItemModifiers from './index';
import { ITEMS } from '../../resources/players/mock';

test('<InventoryItemModifiers>', () => {
  const component = shallow(<InventoryItemModifiers item={ITEMS[0]} />);
  expect(component).toMatchSnapshot();
});
