import {connect} from 'react-redux';
import {equipItem, selectItem, updateItems} from '../../actions/inventory';
import Inventory from '../../components/Inventory';

const mapStateToProps = state => ({
  items: state.inventory.items,
  selectedItem: state.inventory.selectedItem,
});

const mapDispatchToProps = dispatch => ({
  updateItems: () => dispatch(updateItems()),
  onSelectItem: selectedItem => dispatch(selectItem(selectedItem)),
  onEquipItem: item => dispatch(equipItem(item)),
});

const MainInventory = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Inventory);

export default MainInventory;
