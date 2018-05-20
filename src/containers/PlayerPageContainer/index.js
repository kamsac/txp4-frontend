import { connect } from 'react-redux';
import PlayerPage from '../../components/PlayerPage';
import { loadPlayer } from '../../actions/players';
import { getPlayerNick } from '../../reducers/players';

const mapStateToProps = (state, ownProps) => ({
  playerNick: getPlayerNick(state, ownProps.playerLogin),
});

const mapDispatchToProps = dispatch => ({
  loadPlayer: playerLogin => dispatch(loadPlayer(playerLogin)),
});

const PlayerPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlayerPage);

export default PlayerPageContainer;
