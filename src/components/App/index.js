import React, { Component } from 'react';
import './styles.scss';
import ScoreTable from '../ScoreTable';
import ScoresService from '../../services/scores/mock';
import Inventory from '../Inventory';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scores: []
    };
  }

  componentDidMount() {
    ScoresService.getScores((scores) => {
      this.setState({ scores });
    });
  }

  render() {
    return (
      <div className="App">
        <h1>TXP4</h1>
        <ScoreTable scores={this.state.scores} />
        <Inventory/>
      </div>
    );
  }
}

export default App;
