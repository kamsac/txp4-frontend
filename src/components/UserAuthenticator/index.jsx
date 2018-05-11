import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class UserAuthenticator extends React.Component {
  componentDidMount() {
    this.props.loginUser(this.props.magicLinkToken);
  }

  render() {
    const {
      isUserAuthenticated,
      isFetching,
    } = this.props;

    if (isUserAuthenticated) {
      return (
        <Redirect to="/inventory" />
      );
    }

    if (!isUserAuthenticated && isFetching) {
      return <p>You are being authenticated...</p>;
    }

    return <p>Something went wrong while trying to authenticate.</p>;
  }
}

UserAuthenticator.propTypes = {
  magicLinkToken: PropTypes.string.isRequired,
  loginUser: PropTypes.func.isRequired,
  isUserAuthenticated: PropTypes.bool.isRequired,
  isFetching: PropTypes.bool.isRequired,
};
