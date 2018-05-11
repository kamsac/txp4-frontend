import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import NavbarContainer from '../../containers/NavbarContainer';

export default class Page extends React.Component {
  render() {
    return (
      <div className="Page">
        <NavbarContainer />
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
