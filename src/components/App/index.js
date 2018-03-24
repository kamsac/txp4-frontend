import React, { Component } from 'react';
import './styles.scss';
import { BrowserRouter, Route } from 'react-router-dom'
import MainScoreTable from '../../containers/MainScoreTable';
import MainInventory from '../../containers/MainInventory';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <h1>TXP4</h1>
          <Route exact path="/scores" component={MainScoreTable} />
          <Route exact path="/inventory" component={MainInventory} />
        </div>
      </BrowserRouter>
    );
  }
}
