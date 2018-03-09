import React from 'react';
import './styles.scss';
import InventoryItemModifiers from '../InventoryItemModifiers';

export default class EquippedInventoryItemDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const item = this.props.item;
    const itemName = renderItemName(item);

    return (
      <div className="EquippedInventoryItemDetails">
        {itemName}
        <InventoryItemModifiers item={item} />
      </div>
    );
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
