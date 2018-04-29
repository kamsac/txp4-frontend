import { connect } from 'react-redux';
import { equipItem, requestItems } from '../../actions/inventory';
import { requestVendors } from '../../actions/vendors';
import Inventory from '../../components/Inventory/index';

const mapStateToProps = state => ({
  items: state.player.inventory.items,
  equipRegions: ['tire', 'engine', 'transmission'],
  vendors: state.vendors,
});

const mapDispatchToProps = dispatch => ({
  requestItems: () => dispatch(requestItems()),
  onEquipItem: item => dispatch(equipItem(item)),
  requestVendors: () => dispatch(requestVendors()),
});

const MainInventory = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Inventory);

export default MainInventory;
