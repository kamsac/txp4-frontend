import React from 'react';
import './styles.scss';

export default class ScoreTable extends React.Component {
  constructor(props) {
    super(props);

    this.rowsLimit = props.rowsLimit || 10;
  }

  render() {
    const scoreTableRows = this.props.scores
      .slice(0, this.rowsLimit)
      .map((score) => {
        return (
          <tr className="ScoreTable-row" key={score.player.login}>
            <td className="ScoreTable-cell ScoreTable-cell--nickname">{score.player.nickname}</td>
            <td className="ScoreTable-cell ScoreTable-cell--points">{score.points}</td>
          </tr>
        );
      });

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
