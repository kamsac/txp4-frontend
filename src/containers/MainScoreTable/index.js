import React from 'react';
import {connect} from 'react-redux';
import ScoreTable from '../../components/ScoreTable';
import {requestScores} from '../../actions/scores';

class MainScoreTable extends React.Component{
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(requestScores());
  }

  render() {
    return (
      <ScoreTable scores={this.props.scores}/>
    )
  }
}

const mapStateToProps = state => ({
  scores: state.scores,
});

export default connect(
  mapStateToProps,
)(MainScoreTable);
