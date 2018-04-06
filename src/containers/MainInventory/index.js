import {connect} from 'react-redux';
import {equipItem, selectItem, requestItems} from '../../actions/inventory';
import {requestVendors} from '../../actions/vendors';
import Inventory from '../../components/Inventory';

const mapStateToProps = state => ({
  items: state.inventory.items,
  selectedItem: state.inventory.selectedItem,
  equipRegions: ['tire', 'engine', 'transmission'],
  vendors: state.vendors,
});

const mapDispatchToProps = dispatch => ({
  requestItems: () => dispatch(requestItems()),
  onSelectItem: selectedItem => dispatch(selectItem(selectedItem)),
  onEquipItem: item => dispatch(equipItem(item)),
  requestVendors: () => dispatch(requestVendors()),
});

const MainInventory = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Inventory);

export default MainInventory;
