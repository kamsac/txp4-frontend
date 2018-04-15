import { inventoryReducer } from './inventory';
import { RECEIVE_ITEMS, SELECT_ITEM, EQUIP_ITEM } from '../actions/inventory';

const any = null;

test(`${RECEIVE_ITEMS}`, () => {
  const items = [
    {
      id: 'a1a1a1',
      name: 'Tire',
      vendorId: 'aaa',
      equipRegion: 'tire',
      tier: 3,
      isEquipped: true,
      modifiers: [
        {
          name: 'maxSpeed',
          value: 1
        },
      ]
    },
    {
      id: 'b2b2b2',
      name: 'Less tired',
      vendorId: 'bbb',
      equipRegion: 'tire',
      tier: 1,
      isEquipped: false,
      modifiers: [
        {
          name: 'maxSpeed',
          value: 0.4
        },
        {
          name: 'acceleration',
          value: 1
        },
      ]
    },
    {
      id: 'c3c3c3',
      name: 'Shit engine',
      vendorId: 'ccc',
      equipRegion: 'engine',
      tier: 2,
      isEquipped: false,
      modifiers: [
        {
          name: 'maxSpeed',
          value: 2
        },
      ]
    },
  ];

  const previousState = {
    items: [],
    selectedItem: any,
  };

  const action = {
    type: RECEIVE_ITEMS,
    payload: { items },
  };

  const expectedState = {
    items,
    selectedItem: any,
  };

  const state = inventoryReducer(previousState, action);

  expect(state).toEqual(expectedState);
});

test(`${SELECT_ITEM}`, () => {
  const previousState = {
    items: any,
    selectedItem: null,
  };

  const selectedItem = {
    id: 'c3c3c3',
    name: 'Shit engine',
    vendorId: 'ccc',
    equipRegion: 'engine',
    tier: 2,
    isEquipped: false,
    modifiers: [
      {
        name: 'maxSpeed',
        value: 2
      },
    ]
  };

  const action = {
    type: SELECT_ITEM,
    payload: { selectedItem }
  };

  const expectedState = {
    items: any,
    selectedItem
  };

  const state = inventoryReducer(previousState, action);

  expect(state).toEqual(expectedState);
});

describe(`${EQUIP_ITEM}`, () => {
  it(`should equip first item`, () => {
    const previousItems = [
      {
        id: 'a1a1a1',
        name: 'Tire',
        vendorId: 'aaa',
        equipRegion: 'tire',
        tier: 3,
        isEquipped: false,
        modifiers: [
          {
            name: 'maxSpeed',
            value: 1
          },
        ]
      },
      {
        id: 'b2b2b2',
        name: 'Less tired',
        vendorId: 'bbb',
        equipRegion: 'tire',
        tier: 1,
        isEquipped: false,
        modifiers: [
          {
            name: 'maxSpeed',
            value: 0.4
          },
          {
            name: 'acceleration',
            value: 1
          },
        ]
      },
      {
        id: 'c3c3c3',
        name: 'Shit engine',
        vendorId: 'ccc',
        equipRegion: 'engine',
        tier: 2,
        isEquipped: false,
        modifiers: [
          {
            name: 'maxSpeed',
            value: 2
          },
        ]
      },
    ];

    const expectedItems = [
      {
        id: 'a1a1a1',
        name: 'Tire',
        vendorId: 'aaa',
        equipRegion: 'tire',
        tier: 3,
        isEquipped: false,
        modifiers: [
          {
            name: 'maxSpeed',
            value: 1
          },
        ]
      },
      {
        id: 'b2b2b2',
        name: 'Less tired',
        vendorId: 'bbb',
        equipRegion: 'tire',
        tier: 1,
        isEquipped: true,
        modifiers: [
          {
            name: 'maxSpeed',
            value: 0.4
          },
          {
            name: 'acceleration',
            value: 1
          },
        ]
      },
      {
        id: 'c3c3c3',
        name: 'Shit engine',
        vendorId: 'ccc',
        equipRegion: 'engine',
        tier: 2,
        isEquipped: false,
        modifiers: [
          {
            name: 'maxSpeed',
            value: 2
          },
        ]
      },
    ];

    const previousState = {
      items: previousItems,
      selectedItem: any,
    };

    const action = {
      type: EQUIP_ITEM,
      payload: {
        item: {
          id: 'b2b2b2',
          name: 'Less tired',
          vendorId: 'bbb',
          equipRegion: 'tire',
          tier: 1,
          isEquipped: false,
          modifiers: [
            {
              name: 'maxSpeed',
              value: 0.4
            },
            {
              name: 'acceleration',
              value: 1
            },
          ]
        },
      },
    };

    const expectedState = {
      items: expectedItems,
      selectedItem: any,
    };

    const state = inventoryReducer(previousState, action);

    expect(state.items).toEqual(expectedState.items);
  });

  it(`should equip item with same equip region as previous one and override it`, () => {
    const previousItems = [
      {
        id: 'a1a1a1',
        name: 'Tire',
        vendorId: 'aaa',
        equipRegion: 'tire',
        tier: 3,
        isEquipped: true,
        modifiers: [
          {
            name: 'maxSpeed',
            value: 1
          },
        ]
      },
      {
        id: 'b2b2b2',
        name: 'Less tired',
        vendorId: 'bbb',
        equipRegion: 'tire',
        tier: 1,
        isEquipped: false,
        modifiers: [
          {
            name: 'maxSpeed',
            value: 0.4
          },
          {
            name: 'acceleration',
            value: 1
          },
        ]
      },
      {
        id: 'c3c3c3',
        name: 'Shit engine',
        vendorId: 'ccc',
        equipRegion: 'engine',
        tier: 2,
        isEquipped: false,
        modifiers: [
          {
            name: 'maxSpeed',
            value: 2
          },
        ]
      },
    ];

    const expectedItems = [
      {
        id: 'a1a1a1',
        name: 'Tire',
        vendorId: 'aaa',
        equipRegion: 'tire',
        tier: 3,
        isEquipped: false,
        modifiers: [
          {
            name: 'maxSpeed',
            value: 1
          },
        ]
      },
      {
        id: 'b2b2b2',
        name: 'Less tired',
        vendorId: 'bbb',
        equipRegion: 'tire',
        tier: 1,
        isEquipped: true,
        modifiers: [
          {
            name: 'maxSpeed',
            value: 0.4
          },
          {
            name: 'acceleration',
            value: 1
          },
        ]
      },
      {
        id: 'c3c3c3',
        name: 'Shit engine',
        vendorId: 'ccc',
        equipRegion: 'engine',
        tier: 2,
        isEquipped: false,
        modifiers: [
          {
            name: 'maxSpeed',
            value: 2
          },
        ]
      },
    ];

    const previousState = {
      items: previousItems,
      selectedItem: any,
    };

    const action = {
      type: EQUIP_ITEM,
      payload: {
        item: {
          id: 'b2b2b2',
          name: 'Less tired',
          vendorId: 'bbb',
          equipRegion: 'tire',
          tier: 1,
          isEquipped: false,
          modifiers: [
            {
              name: 'maxSpeed',
              value: 0.4
            },
            {
              name: 'acceleration',
              value: 1
            },
          ]
        },
      },
    };

    const expectedState = {
      items: expectedItems,
      selectedItem: any,
    };

    const state = inventoryReducer(previousState, action);

    expect(state.items).toEqual(expectedState.items);
  });
});
