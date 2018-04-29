import React from 'react';
import Page from '../Page/index';
import MainInventory from '../../containers/MainInventory/index';

export default class InventoryPage extends React.Component {
  render() {
    return (
      <Page>
        <MainInventory />
      </Page>
    );
  }
}
