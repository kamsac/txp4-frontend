import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { ScorePropTypesShape } from '../../prop-types';

export default class ScoreTable extends React.Component {
  componentDidMount() {
    this.props.requestScores();
  }

  render() {
    const scoreTableRows = this.props.scores
      .slice(0, this.props.rowsLimit)
      .map(score => (
        <tr className="ScoreTable-row" key={score.player.login}>
          <td className="ScoreTable-cell ScoreTable-cell--nickname">{score.player.nick}</td>
          <td className="ScoreTable-cell ScoreTable-cell--points">{score.score}</td>
        </tr>
      ));

    return (
      <table className="ScoreTable">
        <thead>
          <tr className="ScoreTable-headerRow">
            <th className="ScoreTable-cell ScoreTable-cell--nickname">Nickname</th>
            <th className="ScoreTable-cell ScoreTable-cell--points">Points</th>
          </tr>
        </thead>
        <tbody>
          { scoreTableRows }
        </tbody>
      </table>
    );
  }
}

ScoreTable.propTypes = {
  scores: PropTypes.arrayOf(ScorePropTypesShape).isRequired,
  rowsLimit: PropTypes.number,
  requestScores: PropTypes.func.isRequired,
};

ScoreTable.defaultProps = {
  rowsLimit: 10,
};
