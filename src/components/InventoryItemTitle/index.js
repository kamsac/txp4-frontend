import React from 'react';
import './styles.scss';

export default class InventoryItemTitle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const item = this.props.item;
    const itemName = renderItemName(item);

    return (
      <div className="InventoryItemTitle">
        {itemName}
      </div>
    );
  }
}

function renderItemName(item) {
  if (item.vendor) {
    return (
      <h1 className="InventoryItemTitle-header"><span style={{color: item.vendor.color}}>{item.vendor.name}</span> {item.name} (tier {item.tier})</h1>
    );
  } else {
    return (
      <h1 className="InventoryItemTitle-header">{item.name} (tier {item.tier})</h1>
    );
  }
}
