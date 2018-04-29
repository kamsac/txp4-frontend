import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../Navbar/index';

export default class Page extends React.Component {
  render() {
    return (
      <div className="Page">
        <Navbar />
        <div className="PageContent">
          {this.props.children}
        </div>
      </div>
    );
  }
}

Page.propTypes = {
  children: PropTypes.element.isRequired,
};
