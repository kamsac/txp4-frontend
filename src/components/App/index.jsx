import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import InventoryPageContainer from '../../containers/InventoryPageContainer';
import ScoresPage from '../ScoresPage/index';
import LoginPage from '../LoginPage';
import PlayerPageContainer from '../../containers/PlayerPageContainer';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={() => <Redirect to="/scores" />} />
          <Route exact path="/inventory" component={InventoryPageContainer} />
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
          <Route
            exact
            path="/player/:playerLogin"
            component={(props) => {
              const { playerLogin } = props.match.params;
              return (
                <PlayerPageContainer playerLogin={playerLogin} />
              );
            }}
          />
        </div>
      </BrowserRouter>
    );
  }
}
