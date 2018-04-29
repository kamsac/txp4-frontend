import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import EquipRegion from '../EquipRegion/index';
import EquipRegionPlaceholder from '../EquipRegionPlaceholder/index';
import { ItemPropTypesShape, VendorPropTypesShape } from '../../prop-types';

function getEquippedItemByEquipRegion(items, equipRegionName) {
  return items.find(item => item.isEquipped && item.equipRegion === equipRegionName);
}

export default class EquippedItems extends React.Component {
  render() {
    const itemSlots = this.props.equipRegions
      .map((equipRegion) => {
        const equippedItem = getEquippedItemByEquipRegion(this.props.items, equipRegion);
        return equippedItem ?
          <EquipRegion key={equippedItem.id} item={equippedItem} vendors={this.props.vendors} />
          :
          <EquipRegionPlaceholder key={equipRegion} equipRegion={equipRegion} />;
      });

    return (
      <div className="EquippedItems">
        {itemSlots}
      </div>
    );
  }
}

EquippedItems.propTypes = {
  equipRegions: PropTypes.arrayOf(PropTypes.string).isRequired,
  items: PropTypes.arrayOf(ItemPropTypesShape).isRequired,
  vendors: PropTypes.arrayOf(VendorPropTypesShape).isRequired,
};
