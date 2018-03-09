import React from 'react';
import './styles.scss';
import EquippedItem from '../EquippedItem';

export default class EquippedItems extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const items = this.props.items
      .filter((item) => item.equipped)
      .map((item) => {
      return (
        <EquippedItem key={item.id} item={item}/>
      );
    });

    return (
      <div className="EquippedItems">
        {items}
      </div>
    );
  }
}
