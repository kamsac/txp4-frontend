import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import InventoryItemModifiers from '../InventoryItemModifiers/index';
import InventoryItemTitle from '../InventoryItemTitle/index';
import { ItemPropTypesShape, VendorPropTypesShape } from '../../prop-types';

export default class InventoryItemDetails extends React.Component {
  render() {
    const { item } = this.props;

    if (item) {
      return (
        <div className="InventoryItemDetails">
          <InventoryItemTitle item={item} vendors={this.props.vendors} />
          <InventoryItemModifiers item={item} />

          <button onClick={() => this.props.onEquipItem(item)}>Equip this item</button>
        </div>
      );
    }
    return (
      <div className="InventoryItemDetails">
        <p>Select item to display details.</p>
      </div>
    );
  }
}

InventoryItemDetails.propTypes = {
  item: ItemPropTypesShape,
  vendors: PropTypes.arrayOf(VendorPropTypesShape).isRequired,
  onEquipItem: PropTypes.func.isRequired,
};

InventoryItemDetails.defaultProps = {
  item: null,
};
