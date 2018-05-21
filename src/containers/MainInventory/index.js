import { connect } from 'react-redux';
import Inventory from '../../components/Inventory/index';
import { equipItem, loadPlayerInventory } from '../../actions/inventory';
import { loadVendors } from '../../actions/vendors';
import { getPlayerInventoryItems } from '../../reducers/inventory';
import { getUserLogin } from '../../reducers/auth';
import { getVendors } from '../../reducers/vendors';

const mapStateToProps = (state, ownProps) => ({
  items: getPlayerInventoryItems(state, ownProps.ownerLogin),
  equipRegions: ['tire', 'engine', 'transmission'],
  vendors: getVendors(state),
  isUserOwner: ownProps.ownerLogin === getUserLogin(state),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadPlayerInventory: () => dispatch(loadPlayerInventory(ownProps.ownerLogin)),
  onEquipItem: item => dispatch(equipItem(ownProps.ownerLogin, item)),
  loadVendors: () => dispatch(loadVendors()),
});

const MainInventory = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Inventory);

export default MainInventory;
