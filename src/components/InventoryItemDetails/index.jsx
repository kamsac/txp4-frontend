import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import InventoryItemModifiers from '../InventoryItemModifiers/index';
import InventoryItemTitle from '../InventoryItemTitle/index';
import { ItemPropTypesShape, VendorPropTypesShape } from '../../prop-types';
import Button from '../Button';

export default class InventoryItemDetails extends React.Component {
  render() {
    const { item, showControls } = this.props;

    if (item) {
      return (
        <div className="InventoryItemDetails">
          <InventoryItemTitle item={item} vendors={this.props.vendors} />
          <InventoryItemModifiers item={item} />
          {showControls &&
            <Button type="primary" onClick={() => this.props.onEquipItem(item)}>Equip this item</Button>
          }
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
  showControls: PropTypes.bool.isRequired,
};

InventoryItemDetails.defaultProps = {
  item: null,
};
