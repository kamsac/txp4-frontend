import React from 'react';
import './styles.scss';
import InventoryItemModifiers from '../InventoryItemModifiers';
import InventoryItemTitle from '../InventoryItemTitle';

export default class InventoryItemDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const item = this.props.item;

    if (item) {
      return (
        <div className="InventoryItemDetails">
          <InventoryItemTitle item={item} vendors={this.props.vendors}/>
          <InventoryItemModifiers item={item}/>

          <button onClick={() => this.props.onEquipItem(item)}>Equip this item</button>
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
