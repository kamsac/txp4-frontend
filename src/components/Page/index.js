import React from 'react';
import Navbar from '../Navbar';

export default class Page extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Page">
        <Navbar/>
        <div className="PageContent">
          {this.props.children}
        </div>
      </div>
    );
  }
}
