import React from 'react';
import './styles.scss';

export default class InventoryItemTitle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const item = this.props.item;
    const vendor = this.props.vendors.find(vendor => vendor.id === this.props.item.vendorId);

    return (
      <div className="InventoryItemTitle">
        {
          vendor ?
            <h1 className="InventoryItemTitle-header">
              <span style={{color: vendor.color}}>{vendor.name}</span> {item.name} (tier {item.tier})
            </h1>
            :
            <h1 className="InventoryItemTitle-header">{item.name} (tier {item.tier})</h1>
        }
      </div>
    );
  }
}
