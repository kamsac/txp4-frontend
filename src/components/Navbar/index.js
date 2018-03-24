import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.navigationItems = [
      {
        href: '/inventory',
        label: 'Inventory',
      },
      {
        href: '/scores',
        label: 'Scores',
      },
    ]
  }

  render() {
    const navigationItems = this.navigationItems.map((navigationItem) => {
      return (
        <li key={navigationItem.label} className="NavigationItem">
          <Link to={navigationItem.href} className="NavigationItem__anchor">{navigationItem.label}</Link>
        </li>
      );
    });

    return (
      <div className="Navbar">
        <h1 className="AppTitle">TXP4</h1>
        <ul className="Navigation">
          {navigationItems}
        </ul>
      </div>
    );
  }
}
