import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { ItemPropTypesShape, VendorPropTypesShape } from '../../prop-types';

export default class InventoryItem extends React.Component {
  render() {
    const { item } = this.props;
    const vendor =
      this.props.vendors.find(iteratedVendor => iteratedVendor.id === this.props.item.vendorId);

    let className = 'InventoryItem';
    const imageClassName = `InventoryItem--${item.equipRegion}`;
    className += ` ${imageClassName}`;
    if (item === this.props.selectedItem) {
      className += ' InventoryItem--selected';
    }

    const styles = {};
    if (vendor) {
      styles.boxShadow = `inset 0 -4px 0 0 ${vendor.color}`;
    }

    return (
      <div
        className={className}
        style={styles}
        onClick={() => this.props.onSelectItem(this.props.item)}
        role="button"
        tabIndex={0}
        onKeyPress={() => null}
      />
    );
  }
}

InventoryItem.propTypes = {
  item: ItemPropTypesShape,
  vendors: PropTypes.arrayOf(VendorPropTypesShape).isRequired,
  onSelectItem: PropTypes.func,
  selectedItem: ItemPropTypesShape,
};

InventoryItem.defaultProps = {
  item: null,
  selectedItem: null,
  onSelectItem: () => null,
};
