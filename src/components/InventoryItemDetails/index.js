import React from 'react';
import './styles.scss';
import InventoryService from '../../services/inventory/mock';
import InventoryItemModifiers from '../InventoryItemModifiers';

export default class InventoryItemDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  handleEquipItem(item, event) {
    InventoryService.equipItem(item, (response) => {
      this.props.onEquipItem(item);
    });
  }

  render() {
    const item = this.props.item;

    if (item) {
      const itemName = renderItemName(item);

      return (
        <div className="InventoryItemDetails">
          {itemName}
          <InventoryItemModifiers item={item} />

          <button onClick={(event) => this.handleEquipItem(item, event)}>Equip this item</button>
        </div>
      );
    } else {
      return (
        <div className="InventoryItemDetails">
          <p>Select item to display details.</p>
        </div>
      )
    }
  }
}

function renderItemName(item) {
  if (item.vendor) {
    return (
      <h1><span style={{color: item.vendor.color}}>{item.vendor.name}</span> {item.name} (tier {item.tier})</h1>
    );
  } else {
    return (
      <h1>{item.name} (tier {item.tier})</h1>
    );
  }
}
