import inventoryReducer from './inventory';
import { RECEIVE_INVENTORY, EQUIP_ITEM } from '../actions/inventory';

test(`${RECEIVE_INVENTORY}`, () => {
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
          value: 1,
        },
      ],
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
          value: 0.4,
        },
        {
          name: 'acceleration',
          value: 1,
        },
      ],
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
          value: 2,
        },
      ],
    },
  ];

  const previousState = {
    items: [],
  };

  const action = {
    type: RECEIVE_INVENTORY,
    payload: { items },
  };

  const expectedState = {
    items,
  };

  const state = inventoryReducer(previousState, action);

  expect(state).toEqual(expectedState);
});

describe(`${EQUIP_ITEM}`, () => {
  it('should equip first item', () => {
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
            value: 1,
          },
        ],
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
            value: 0.4,
          },
          {
            name: 'acceleration',
            value: 1,
          },
        ],
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
            value: 2,
          },
        ],
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
            value: 1,
          },
        ],
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
            value: 0.4,
          },
          {
            name: 'acceleration',
            value: 1,
          },
        ],
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
            value: 2,
          },
        ],
      },
    ];

    const previousState = {
      items: previousItems,
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
              value: 0.4,
            },
            {
              name: 'acceleration',
              value: 1,
            },
          ],
        },
      },
    };

    const expectedState = {
      items: expectedItems,
    };

    const state = inventoryReducer(previousState, action);

    expect(state.items).toEqual(expectedState.items);
  });

  it('should equip item with same equip region as previous one and override it', () => {
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
            value: 1,
          },
        ],
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
            value: 0.4,
          },
          {
            name: 'acceleration',
            value: 1,
          },
        ],
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
            value: 2,
          },
        ],
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
            value: 1,
          },
        ],
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
            value: 0.4,
          },
          {
            name: 'acceleration',
            value: 1,
          },
        ],
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
            value: 2,
          },
        ],
      },
    ];

    const previousState = {
      items: previousItems,
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
              value: 0.4,
            },
            {
              name: 'acceleration',
              value: 1,
            },
          ],
        },
      },
    };

    const expectedState = {
      items: expectedItems,
    };

    const state = inventoryReducer(previousState, action);

    expect(state.items).toEqual(expectedState.items);
  });
});
