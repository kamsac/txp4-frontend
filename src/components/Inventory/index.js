import React from 'react';
import './styles.scss';
import InventoryService from '../../services/inventory/mock';
import InventoryItemDetails from '../InventoryItemDetails';
import EquippedItems from '../EquippedItems';
import InventoryItem from '../InventoryItem';

export default class Inventory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      selectedItem: null,
    };
  }

  componentDidMount() {
    InventoryService.getItems((items) => {
      this.setState({ items });
    });
  }

  handleInventoryItemClick(item, event) {
    this.setState({
      selectedItem: item
    });
  }

  handleEquipItem(equippedItem) {
    const items = this.state.items
      .map((inventoryItem) => {
        if (inventoryItem.type === equippedItem.type) {
          inventoryItem.equipped = false;
        }

        if (inventoryItem === equippedItem) {
          inventoryItem.equipped = true;
        }

        return inventoryItem;
      });

    this.setState({
      items,
      selectedItem: null,
    });
  }

  render() {
    const items = this.state.items
      .filter((item) => !item.equipped)
      .map((item) => {
        return (
          <InventoryItem key={item.id} item={item} selectedItem={this.state.selectedItem}
            onSelect={(event) => this.handleInventoryItemClick(item, event)} />
        );
      });

    return (
      <div className="Inventory">
        <EquippedItems items={this.state.items} />
        <div className="Inventory-items">
          {items}
        </div>
        <InventoryItemDetails
          item={this.state.selectedItem}
          onEquipItem={(item) => this.handleEquipItem(item)}
        />
      </div>
    );
  }
}
