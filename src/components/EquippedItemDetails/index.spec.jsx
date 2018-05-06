import React from 'react';
import { shallow } from 'enzyme';
import EquippedItemDetails from './index';
import { ITEMS } from '../../resources/player/mock';
import { VENDORS } from '../../resources/vendors/mock';

test('<EquippedItemDetails>', () => {
  const component = shallow(<EquippedItemDetails item={ITEMS[0]} vendors={VENDORS} />);
  expect(component).toMatchSnapshot();
});
