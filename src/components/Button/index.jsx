import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

export default class Button extends React.Component {
  render() {
    return (
      <button className="Button" {...this.props}>
        {this.props.children}
      </button>
    );
  }
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
};
