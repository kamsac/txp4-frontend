import React from 'react';
import './styles.scss';
import EquipRegion from '../EquipRegion';
import EquipRegionPlaceholder from '../EquipRegionPlaceholder';

export default class EquippedItems extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const itemSlots = this.props.equipRegions
      .map((equipRegion) => {
        const equippedItem = getEquippedItemByEquipRegion(this.props.items, equipRegion);
        return equippedItem ?
          <EquipRegion key={equippedItem.id} item={equippedItem} />
          :
          <EquipRegionPlaceholder key={equipRegion} equipRegion={equipRegion} />
      });

    return (
      <div className="EquippedItems">
        {itemSlots}
      </div>
    );
  }
}

function getEquippedItemByEquipRegion(items, equipRegionName) {
  return items.find(item => item.isEquipped && item.equipRegion === equipRegionName);
}
