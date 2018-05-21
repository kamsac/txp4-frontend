import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import InventoryItemDetails from '../InventoryItemDetails/index';
import EquippedItems from '../EquippedItems/index';
import InventoryItem from '../InventoryItem/index';
import { ItemPropTypesShape, VendorPropTypesShape } from '../../prop-types';

export default class Inventory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedItem: null,
    };

    this.selectItem = this.selectItem.bind(this);
  }

  componentDidMount() {
    this.props.loadPlayerInventory();
    this.props.loadVendors();
  }

  selectItem(item) {
    this.setState({
      selectedItem: item,
    });
  }

  render() {
    if (!this.props.items || !this.props.vendors) {
      return <div />;
    }

    const items = this.props.items
      .filter(item => !item.isEquipped)
      .map(item => (
        <InventoryItem
          key={item.id}
          item={item}
          selectedItem={this.state.selectedItem}
          onSelectItem={this.selectItem}
          vendors={this.props.vendors}
        />
      ));

    return (
      <div className="Inventory">
        <EquippedItems
          items={this.props.items}
          equipRegions={this.props.equipRegions}
          vendors={this.props.vendors}
        />
        <div className="InventoryItems">
          {items}
        </div>
        <InventoryItemDetails
          item={this.state.selectedItem}
          onEquipItem={this.props.onEquipItem}
          vendors={this.props.vendors}
          showControls={this.props.isUserOwner}
        />
      </div>
    );
  }
}

Inventory.propTypes = {
  items: PropTypes.arrayOf(ItemPropTypesShape),
  vendors: PropTypes.arrayOf(VendorPropTypesShape),
  loadPlayerInventory: PropTypes.func.isRequired,
  loadVendors: PropTypes.func.isRequired,
  equipRegions: PropTypes.arrayOf(PropTypes.string).isRequired,
  onEquipItem: PropTypes.func.isRequired,
  isUserOwner: PropTypes.bool.isRequired,
};

Inventory.defaultProps = {
  items: null,
  vendors: null,
};
