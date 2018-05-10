import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

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
    ];
  }

  render() {
    const navigationItems = this.navigationItems.map(navigationItem => (
      <li key={navigationItem.label} className="NavigationItem">
        <Link to={navigationItem.href} className="NavigationItem__anchor">
          {navigationItem.label}
        </Link>
      </li>
    ));

    return (
      <div className="Navbar">
        <div className="Navbar__ContentMargin">
          <h1 className="AppTitle">TXP4</h1>
          <ul className="Navigation">
            {navigationItems}
          </ul>
        </div>
      </div>
    );
  }
}
