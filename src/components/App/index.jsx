import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import InventoryPage from '../InventoryPage/index';
import ScoresPage from '../ScoresPage/index';
import LoginPage from '../LoginPage';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={() => <Redirect to="/scores" />} />
          <Route exact path="/inventory" component={InventoryPage} />
          <Route exact path="/scores" component={ScoresPage} />
          <Route
            exact
            path="/auth/:magicLinkToken"
            component={(props) => {
              const { magicLinkToken } = props.match.params;
              return (
                <LoginPage magicLinkToken={magicLinkToken} />
              );
            }}
          />
        </div>
      </BrowserRouter>
    );
  }
}
