import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import InventoryItem from '../InventoryItem/index';
import EquippedInventoryItemDetails from '../EquippedItemDetails/index';
import { ItemPropTypesShape, VendorPropTypesShape } from '../../prop-types';

export default class EquipRegion extends React.Component {
  render() {
    return (
      <div className="EquipRegion">
        <InventoryItem item={this.props.item} vendors={this.props.vendors} />
        <EquippedInventoryItemDetails item={this.props.item} vendors={this.props.vendors} />
      </div>
    );
  }
}

EquipRegion.propTypes = {
  item: ItemPropTypesShape.isRequired,
  vendors: PropTypes.arrayOf(VendorPropTypesShape).isRequired,
};
