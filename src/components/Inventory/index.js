import React from 'react';
import './styles.scss';
import InventoryService from '../../services/inventory/mock';

export default class Inventory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    InventoryService.getItems((items) => {
      this.setState({ items });
    });
  }

  render() {
    const items = this.state.items.map((item, index) => {
      const imageClassName = `Inventory-item--${item.type}`;

      return (
        <div className={`Inventory-item ${imageClassName}`} key={index}>

        </div>
      );
    });

    return (
      <div className="Inventory">
        <div className="Inventory-items">
          { items }
        </div>
      </div>
    );
  }
}
