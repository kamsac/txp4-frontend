import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import InventoryItemModifiers from '../InventoryItemModifiers/index';
import InventoryItemTitle from '../InventoryItemTitle/index';
import { ItemPropTypesShape, VendorPropTypesShape } from '../../prop-types';

export default class EquippedInventoryItemDetails extends React.Component {
  render() {
    const { item } = this.props;

    return (
      <div className="EquippedInventoryItemDetails">
        <InventoryItemTitle item={item} vendors={this.props.vendors} />
        <InventoryItemModifiers item={item} />
      </div>
    );
  }
}

EquippedInventoryItemDetails.propTypes = {
  item: ItemPropTypesShape.isRequired,
  vendors: PropTypes.arrayOf(VendorPropTypesShape).isRequired,
};
