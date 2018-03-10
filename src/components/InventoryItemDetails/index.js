import React from 'react';
import './styles.scss';
import InventoryService from '../../services/inventory/mock';
import InventoryItemModifiers from '../InventoryItemModifiers';
import InventoryItemTitle from '../InventoryItemTitle';

export default class InventoryItemDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  handleEquipItem(item, event) {
    InventoryService.equipItem(item, (response) => {
      this.props.onEquipItem(item);
    });
  }

  render() {
    const item = this.props.item;

    if (item) {

      return (
        <div className="InventoryItemDetails">
          <InventoryItemTitle item={item}/>
          <InventoryItemModifiers item={item}/>

          <button onClick={(event) => this.handleEquipItem(item, event)}>Equip this item</button>
        </div>
      );
    } else {
      return (
        <div className="InventoryItemDetails">
          <p>Select item to display details.</p>
        </div>
      )
    }
  }
}
