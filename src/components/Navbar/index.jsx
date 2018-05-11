import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import dotenvConfiguration from '../../dotenv-configuration';
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

    if (!dotenvConfiguration.API_URL) {
      this.navigationItems.push({
        href: '/auth/someToken',
        label: 'login mock',
      });
    }
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
          {this.props.isUserLogged &&
            <div className="LoggedUser">
              <ul className="Navigation Navigation--LoggedUser">
                <li className="NavigationItem">
                  <div
                    className="NavigationItem__anchor"
                    onClick={this.props.logoutUser}
                    role="button"
                    tabIndex={0}
                    onKeyPress={() => null}
                  >
                    Logout
                  </div>
                </li>
              </ul>
              <Link to={`/player/${this.props.userLogin}`} className="LoggedUser__nick">
                { this.props.userNick }
              </Link>
            </div>
          }
        </div>
      </div>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  isUserLogged: PropTypes.bool.isRequired,
  userLogin: PropTypes.string,
  userNick: PropTypes.string,
};

Navbar.defaultProps = {
  userLogin: null,
  userNick: null,
};
