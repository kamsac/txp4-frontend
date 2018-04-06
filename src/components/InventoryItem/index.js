import React from 'react';
import './styles.scss';

export default class InventoryItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const item = this.props.item;
    const vendor = this.props.vendors.find(vendor => vendor.id === this.props.item.vendorId);

    let className = 'InventoryItem';
    const imageClassName = `InventoryItem--${item.equipRegion}`;
    className += ` ${imageClassName}`;
    if (item === this.props.selectedItem) {
      className += ' InventoryItem--selected';
    }

    let styles = {};
    if (vendor) {
      styles.boxShadow = `inset 0 -4px 0 0 ${vendor.color}`;
    }

    return (
      <div onClick={() => this.props.onSelectItem(this.props.item)} className={className} style={styles} />
    );
  }
}
