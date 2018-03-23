import React from 'react';
import './styles.scss';

export default class InventoryItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const item = this.props.item;

    let className = 'InventoryItem';
    const imageClassName = `InventoryItem--${item.type}`;
    className += ` ${imageClassName}`;
    if (item === this.props.selectedItem) {
      className += ' InventoryItem--selected';
    }

    let styles = {};
    if (item.vendor) {
      styles.boxShadow = `inset 0 -4px 0 0 ${item.vendor.color}`;
    }

    return (
      <div onClick={() => this.props.onSelectItem(this.props.item)} className={className} style={styles} />
    );
  }
}
