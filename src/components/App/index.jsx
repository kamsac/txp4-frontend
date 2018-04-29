import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './styles.scss';
import InventoryPage from '../InventoryPage/index';
import ScoresPage from '../ScoresPage/index';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/inventory" component={InventoryPage} />
          <Route exact path="/scores" component={ScoresPage} />
        </div>
      </BrowserRouter>
    );
  }
}
