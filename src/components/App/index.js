import React, { Component } from 'react';
import './styles.scss';
import MainScoreTable from '../../containers/MainScoreTable';
import MainInventory from '../../containers/MainInventory';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scores: []
    };
  }

  render() {
    return (
      <div className="App">
        <h1>TXP4</h1>
        <MainScoreTable />
        <MainInventory />
      </div>
    );
  }
}
