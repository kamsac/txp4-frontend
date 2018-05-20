import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.scss';
import { ScorePropTypesShape } from '../../prop-types';
import trackmaniaStyleParser from '../../trackmania-style-parser';

export default class ScoreTable extends React.Component {
  componentDidMount() {
    this.props.loadScores();
  }

  render() {
    const scoreTableRows = this.props.scores
      .slice(0, this.props.rowsLimit)
      .map(score => (
        <tr className="ScoreTable-Row" key={score.player.login}>
          <td className="ScoreTable-Cell ScoreTable-Cell--Nickname">
            <Link
              to={`/player/${score.player.login}`}
              className="ScoreTable-Cell-Anchor"
              dangerouslySetInnerHTML={{
                __html: trackmaniaStyleParser(score.player.nick),
              }}
            />
          </td>
          <td className="ScoreTable-Cell ScoreTable-Cell--Points">
            <Link
              to={`/player/${score.player.login}`}
              className="ScoreTable-Cell-Anchor"
            >
              {score.score}
            </Link>

          </td>
        </tr>
      ));

    return (
      <table className="ScoreTable">
        <thead>
          <tr className="ScoreTable-HeaderRow">
            <th className="ScoreTable-HeaderCell ScoreTable-Cell--Nickname">Nickname</th>
            <th className="ScoreTable-HeaderCell ScoreTable-Cell--Points">Points</th>
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
  loadScores: PropTypes.func.isRequired,
};

ScoreTable.defaultProps = {
  rowsLimit: 10,
};
