import React from 'react';
import './styles.scss';
import InventoryService from '../../services/inventory/mock';

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
      const itemModifiers = renderItemModifiers(item);

      return (
        <div className="InventoryItemDetails">
          {itemName}
          <ul>
            {itemModifiers}
          </ul>

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

function renderItemModifiers(item) {
  return item.modifiers.map((modifier) => {
    if (modifier.value !== 1) {
      const percent = Math.round(modifier.value * 100) + '%';
      return (
        <li key={modifier.name}>{`${percent} of ${modifier.name}`}</li>
      );
    }
  });
}
