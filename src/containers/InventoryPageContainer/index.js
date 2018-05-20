import { connect } from 'react-redux';
import InventoryPage from '../../components/InventoryPage';
import { getUserLogin } from '../../reducers/auth';

const mapStateToProps = state => ({
  userLogin: getUserLogin(state),
});

const InventoryPageContainer = connect(mapStateToProps)(InventoryPage);

export default InventoryPageContainer;
