import React from 'react';
import PropTypes from 'prop-types';
import Page from '../Page';
import UserAuthenticatorContainer from '../../containers/UserAuthentificatorContainer';

export default class LoginPage extends React.Component {
  render() {
    return (
      <Page>
        <UserAuthenticatorContainer magicLinkToken={this.props.magicLinkToken} />
      </Page>
    );
  }
}

LoginPage.propTypes = {
  magicLinkToken: PropTypes.string.isRequired,
};
