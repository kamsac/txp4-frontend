import React from 'react';
import './styles.scss';
import InventoryItemModifiers from '../InventoryItemModifiers';
import InventoryItemTitle from '../InventoryItemTitle';

export default class EquippedInventoryItemDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const item = this.props.item;

    return (
      <div className="EquippedInventoryItemDetails">
        <InventoryItemTitle item={item}/>
        <InventoryItemModifiers item={item} />
      </div>
    );
  }
}
