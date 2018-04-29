import React from 'react';
import classNames from 'classnames';
import './styles.scss';
import { ItemPropTypesShape } from '../../prop-types';

export default class InventoryItemModifiers extends React.Component {
  render() {
    const modifiers = this.props.item.modifiers
      .filter(modifier => modifier.value !== 1)
      .sort((modifierA, modifierB) => modifierB.value - modifierA.value)
      .map((modifier) => {
        const percent = `${Math.round(modifier.value * 100)}%`;
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
    );
  }
}

InventoryItemModifiers.propTypes = {
  item: ItemPropTypesShape.isRequired,
};
