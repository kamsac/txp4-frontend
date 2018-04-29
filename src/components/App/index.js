import React, { Component } from 'react';
import './styles.scss';
import { BrowserRouter, Route } from 'react-router-dom'
import InventoryPage from '../InventoryPage';
import ScoresPage from '../ScoresPage';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

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
