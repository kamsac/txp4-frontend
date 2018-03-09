import React from 'react';
import './styles.scss';

export default class InventoryItem extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick(event) {
    if (this.props.onSelect) {
      this.props.onSelect(this.props.item);
    }
  }

  render() {
    const item = this.props.item;

    let className = 'Inventory-item';
    const imageClassName = `Inventory-item--${item.type}`;
    className += ` ${imageClassName}`;
    if (item === this.props.selectedItem) {
      className += ' Inventory-item--selected';
    }

    let styles = {};
    if (item.vendor) {
      styles.boxShadow = `inset 0 -4px 0 0 ${item.vendor.color}`;
    }

    return (
      <div onClick={(event) => this.handleClick(event)} className={className} style={styles} />
    );
  }
}
