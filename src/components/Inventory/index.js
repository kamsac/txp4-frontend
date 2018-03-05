import React from 'react';
import './styles.scss';
import InventoryService from '../../services/inventory/mock';
import InventoryItemDetails from '../InventoryItemDetails';

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

  render() {
    const items = this.state.items.map((item, index) => {
      let className = 'Inventory-item';
      const imageClassName = `Inventory-item--${item.type}`;
      className += ` ${imageClassName}`;
      if (item === this.state.selectedItem) {
        className += ' Inventory-item--selected';
      }

      let styles = {};
      if (item.vendor) {
        styles.boxShadow = `inset 0 -4px 0 0 ${item.vendor.color}`;
      }

      return (
        <div className={className} style={styles} key={index}
             onClick={(event) => this.handleInventoryItemClick(item, event)}>
        </div>
      );
    });

    return (
      <div className="Inventory">
        <div className="Inventory-items">
          {items}
        </div>
        <InventoryItemDetails item={this.state.selectedItem} />
      </div>
    );
  }
}
