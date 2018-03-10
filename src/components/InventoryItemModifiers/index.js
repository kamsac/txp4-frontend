import React from 'react';
import './styles.scss';
import classNames from 'classnames';

export default class InventoryItemModifiers extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const modifiers = this.props.item.modifiers
      .filter((modifier) => modifier.value !== 1)
      .sort((modifierA, modifierB) => modifierB.value - modifierA.value)
      .map((modifier) => {
        const percent = Math.round(modifier.value * 100) + '%';
        const className = classNames('InventoryItemModifiers-modifier', {
          'InventoryItemModifiers-modifier--positive': modifier.value > 1,
          'InventoryItemModifiers-modifier--negative': modifier.value < 1,
        });
        return (
          <li key={modifier.name} className={className}>{`${percent} of ${modifier.name}`}</li>
        );
      });

    return (
      <ul className="InventoryItemModifiers">
        {modifiers}
      </ul>
    )
  }
}
