import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import dotenvConfiguration from '../../dotenv-configuration';
import './styles.scss';
import trackmaniaStyleParser from '../../trackmania-style-parser';

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
        <NavLink
          to={navigationItem.href}
          className="NavigationItem__anchor"
          activeClassName="NavigationItem__anchor--active"
        >
          {navigationItem.label}
        </NavLink>
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
                <li className="NavigationItem">
                  <NavLink
                    to={`/player/${this.props.userLogin}`}
                    className="NavigationItem__anchor"
                    activeClassName="NavigationItem__anchor--active"
                  >
                    <span
                      dangerouslySetInnerHTML={{
                      __html: trackmaniaStyleParser(this.props.userNick),
                      }}
                    />
                  </NavLink>
                </li>
              </ul>
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
