import React from 'react';
import './styles.scss';
import InventoryItemDetails from '../InventoryItemDetails';
import EquippedItems from '../EquippedItems';
import InventoryItem from '../InventoryItem';

export default class Inventory extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestItems();
    this.props.requestVendors();
  }

  render() {
    const items = this.props.items
      .filter((item) => !item.isEquipped)
      .map((item) => {
        return (
          <InventoryItem
            key={item.id}
            item={item}
            selectedItem={this.props.selectedItem}
            onSelectItem={this.props.onSelectItem}
            vendors={this.props.vendors}
          />
        );
      });

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
          item={this.props.selectedItem}
          onEquipItem={this.props.onEquipItem}
          vendors={this.props.vendors}
        />
      </div>
    );
  }
}
