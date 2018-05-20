import PropTypes from 'prop-types';

export const ItemModifierPropTypesShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
});

export const ItemPropTypesShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  vendorId: PropTypes.string.isRequired,
  equipRegion: PropTypes.string.isRequired,
  tier: PropTypes.number.isRequired,
  modifiers: PropTypes.arrayOf(ItemModifierPropTypesShape),
});

export const InventoryPropTypesShape = PropTypes.shape({
  items: PropTypes.arrayOf(ItemPropTypesShape),
});

export const PlayerPropTypesShape = PropTypes.shape({
  login: PropTypes.string.isRequired,
  nick: PropTypes.string.isRequired,
});

export const ScorePropTypesShape = PropTypes.shape({
  player: PlayerPropTypesShape.isRequired,
  score: PropTypes.number.isRequired,
});

export const VendorPropTypesShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
});
