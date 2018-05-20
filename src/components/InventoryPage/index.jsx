import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import Page from '../Page/index';
import MainInventory from '../../containers/MainInventory/index';

export default class InventoryPage extends React.Component {
  render() {
    if (!this.props.userLogin) {
      return <Redirect to="/" />;
    }

    return (
      <Page>
        <MainInventory ownerLogin={this.props.userLogin} />
      </Page>
    );
  }
}

InventoryPage.propTypes = {
  userLogin: PropTypes.string,
};

InventoryPage.defaultProps = {
  userLogin: null,
};
