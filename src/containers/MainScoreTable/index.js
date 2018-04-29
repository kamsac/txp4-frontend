import { connect } from 'react-redux';
import ScoreTable from '../../components/ScoreTable/index';
import { requestScores } from '../../actions/scores';

const mapStateToProps = state => ({
  scores: state.scores,
});

const mapDispatchToProps = dispatch => ({
  requestScores: () => dispatch(requestScores()),
});

const MainScoreTable = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ScoreTable);

export default MainScoreTable;
