import React from 'react';
import './styles.scss';

export default class EquipRegionPlaceholder extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    const imageClassName = `InventoryItem--${this.props.equipRegion}`;
    const itemClassName = `EquipRegionPlaceholder__Item ${imageClassName}`;

    return (
      <div className="EquipRegionPlaceholder">
        <div className={itemClassName} />
        <div className="EquipRegionPlaceholder__Details">
          <h1 className="EquipRegionPlaceholder__Title">{this.props.equipRegion}</h1>
          <p>No custom {this.props.equipRegion} is equipped.</p>
        </div>
      </div>
    )
  };
}
