import { connect } from 'react-redux';
import { equipItem, loadPlayerInventory } from '../../actions/inventory';
import { requestVendors } from '../../actions/vendors';
import Inventory from '../../components/Inventory/index';
import { getPlayerInventoryItems } from '../../reducers/inventory';
import { getUserLogin } from '../../reducers/auth';

const mapStateToProps = (state, ownProps) => ({
  items: getPlayerInventoryItems(state, ownProps.ownerLogin),
  equipRegions: ['tire', 'engine', 'transmission'],
  vendors: state.vendors,
  isUserOwner: ownProps.ownerLogin === getUserLogin(state),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadPlayerInventory: () => dispatch(loadPlayerInventory(ownProps.ownerLogin)),
  onEquipItem: item => dispatch(equipItem(ownProps.ownerLogin, item)),
  requestVendors: () => dispatch(requestVendors()),
});

const MainInventory = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Inventory);

export default MainInventory;
