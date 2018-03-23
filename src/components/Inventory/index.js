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
    this.props.updateItems();
  }

  render() {
    const items = this.props.items
      .filter((item) => !item.equipped)
      .map((item) => {
        return (
          <InventoryItem
            key={item.id}
            item={item}
            selectedItem={this.props.selectedItem}
            onSelectItem={this.props.onSelectItem}
          />
        );
      });

    return (
      <div className="Inventory">
        <EquippedItems items={this.props.items}/>
        <div className="Inventory-items">
          {items}
        </div>
        <InventoryItemDetails
          item={this.props.selectedItem}
          onEquipItem={this.props.onEquipItem}
        />
      </div>
    );
  }
}
