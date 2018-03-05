import React from 'react';

export default class InventoryItemDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const item = this.props.item;

    if (item) {
      const stats = item.modifiers.map((modifier) => {
        if (modifier.value !== 1) {
          const percent = Math.round(modifier.value * 100) + '%';
          return (
            <li key={modifier.name}>{`${percent} of ${modifier.name}`}</li>
          );
        }
      });

      let itemName;
      if (item.vendor) {
        itemName = (
          <h1><span style={{color: item.vendor.color}}>{item.vendor.name}</span> {item.name} (tier {item.tier})</h1>
        );
      } else {
        itemName = (
          <h1>{item.name} (tier {item.tier})</h1>
        );
      }

      return (
        <div className="InventoryItemDetails">
          {itemName}
          <ul>
            {stats}
          </ul>
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
