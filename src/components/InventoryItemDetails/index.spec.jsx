import React from 'react';
import { shallow } from 'enzyme';
import InventoryItemDetails from './index';
import { ITEMS } from '../../resources/players/mock';
import { VENDORS } from '../../resources/vendors/mock';

describe('<InventoryItemDetails>', () => {
  test('with selected item', () => {
    const component = shallow(<InventoryItemDetails
      item={ITEMS[0]}
      vendors={VENDORS}
      onEquipItem={jest.fn()}
      showControls
    />);
    expect(component).toMatchSnapshot();
  });

  test('with no selected item', () => {
    const component = shallow(<InventoryItemDetails
      item={null}
      vendors={VENDORS}
      onEquipItem={jest.fn()}
      showControls
    />);
    expect(component).toMatchSnapshot();
  });

  it('should equip item', () => {
    const onEquipItem = jest.fn();
    const component = shallow(<InventoryItemDetails
      item={ITEMS[0]}
      vendors={VENDORS}
      onEquipItem={onEquipItem}
      showControls
    />);
    const equipItemButton = component.find('button').filterWhere(wrapper => wrapper.text() === 'Equip this item');
    equipItemButton.simulate('click');
    expect(onEquipItem).toHaveBeenCalled();
  });

  it('should not render equip button when user is not owner', () => {
    const component = shallow(<InventoryItemDetails
      item={ITEMS[0]}
      vendors={VENDORS}
      onEquipItem={jest.fn()}
      showControls={false}
    />);
    expect(component).toMatchSnapshot();
  });
});
