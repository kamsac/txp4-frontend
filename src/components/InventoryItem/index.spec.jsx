import React from 'react';
import { shallow } from 'enzyme';
import InventoryItem from './index';
import { VENDORS } from '../../resources/vendors/mock';
import { ITEMS } from '../../resources/player/mock';

describe('<InventoryItem>', () => {
  test('with item', () => {
    const component = shallow(<InventoryItem
      item={ITEMS[0]}
      vendors={VENDORS}
      onSelectItem={jest.fn()}
      selectedItem={null}
    />);
    expect(component).toMatchSnapshot();
  });

  test('with no item', () => {
    const component = shallow(<InventoryItem
      item={null}
      vendors={VENDORS}
    />);
    expect(component).toMatchSnapshot();
  });

  it('should select item on click', () => {
    const onSelectItem = jest.fn();
    const component = shallow(<InventoryItem
      item={ITEMS[0]}
      vendors={VENDORS}
      onSelectItem={onSelectItem}
      selectedItem={null}
    />);
    component.simulate('click');
    expect(onSelectItem).toHaveBeenCalled();
  });
});
