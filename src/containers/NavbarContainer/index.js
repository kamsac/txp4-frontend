import { connect } from 'react-redux';
import { loginUser, logoutUser } from '../../actions/auth';
import { getIsUserAuthenticated, getUserLogin, getUserNick } from '../../reducers/auth';
import Navbar from '../../components/Navbar';

const mapStateToProps = state => ({
  isUserLogged: getIsUserAuthenticated(state),
  userLogin: getUserLogin(state),
  userNick: getUserNick(state),
});

const mapDispatchToProps = dispatch => ({
  loginUser: () => dispatch(loginUser()),
  logoutUser: () => dispatch(logoutUser()),
});

const NavbarContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navbar);

export default NavbarContainer;
