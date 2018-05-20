import { connect } from 'react-redux';
import ScoreTable from '../../components/ScoreTable/index';
import { loadScores } from '../../actions/scores';
import { getScores } from '../../reducers/scores';

const mapStateToProps = state => ({
  scores: getScores(state),
});

const mapDispatchToProps = dispatch => ({
  loadScores: () => dispatch(loadScores()),
});

const MainScoreTable = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ScoreTable);

export default MainScoreTable;
