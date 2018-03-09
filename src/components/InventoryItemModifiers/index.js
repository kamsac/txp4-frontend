import React from 'react';
import './styles.scss';

export default class InventoryItemModifiers extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const modifiers = this.props.item.modifiers
      .filter((modifier) => modifier.value !== 1)
      .map((modifier) => {
        const percent = Math.round(modifier.value * 100) + '%';
        return (
          <li key={modifier.name}>{`${percent} of ${modifier.name}`}</li>
        );
      });

    return (
      <ul className="InventoryItemModifiers">
        {modifiers}
      </ul>
    )
  }
}
