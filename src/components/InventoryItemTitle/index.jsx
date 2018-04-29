import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { ItemPropTypesShape, VendorPropTypesShape } from '../../prop-types';

export default class InventoryItemTitle extends React.Component {
  render() {
    const { item } = this.props;
    const vendor =
      this.props.vendors.find(iteratedVendor => iteratedVendor.id === this.props.item.vendorId);

    return (
      <div className="InventoryItemTitle">
        {
          vendor ?
            <h1 className="InventoryItemTitle-header">
              <span style={{ color: vendor.color }}>{vendor.name}</span>
              {item.name} (tier {item.tier})
            </h1>
            :
            <h1 className="InventoryItemTitle-header">{item.name} (tier {item.tier})</h1>
        }
      </div>
    );
  }
}

InventoryItemTitle.propTypes = {
  item: ItemPropTypesShape.isRequired,
  vendors: PropTypes.arrayOf(VendorPropTypesShape).isRequired,
};
