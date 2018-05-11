import { connect } from 'react-redux';
import { loginUser } from '../../actions/auth';
import UserAuthenticator from '../../components/UserAuthenticator';
import { getIsFetchingLogin, getIsUserAuthenticated, getUserLogin } from '../../reducers/auth';

const mapStateToProps = state => ({
  isUserAuthenticated: getIsUserAuthenticated(state),
  userLogin: getUserLogin(state),
  isFetching: getIsFetchingLogin(state),
});

const mapDispatchToProps = dispatch => ({
  loginUser: magicLinkToken => dispatch(loginUser(magicLinkToken)),
});

const mergeProps = (stateProps, dispatchProps, ownProps) => (
  Object.assign({}, stateProps, dispatchProps, ownProps, {
    magicLinkToken: ownProps.magicLinkToken,
  })
);

const UserAuthenticatorContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
)(UserAuthenticator);

export default UserAuthenticatorContainer;
