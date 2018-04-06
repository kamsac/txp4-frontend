import React from 'react';
import './styles.scss';
import InventoryItem from '../InventoryItem';
import EquippedInventoryItemDetails from '../EquippedItemDetails';

export default class EquipRegion extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="EquipRegion">
        <InventoryItem item={this.props.item} vendors={this.props.vendors} />
        <EquippedInventoryItemDetails item={this.props.item} vendors={this.props.vendors} />
      </div>
    )
  }
}
