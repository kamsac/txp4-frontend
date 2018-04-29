import React from 'react';
import Page from '../Page';
import MainInventory from '../../containers/MainInventory';

export default class InventoryPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Page>
        <MainInventory />
      </Page>
    );
  }
}
