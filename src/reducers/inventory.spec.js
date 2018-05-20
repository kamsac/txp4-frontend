import inventoryReducer from './inventory';
import {
  INVENTORY_REQUEST, requestInventory,
  INVENTORY_SUCCESS, receiveInventory,
  INVENTORY_FAILURE, inventoryError,
  EQUIP_REQUEST, requestEquipItem,
  EQUIP_SUCCESS, receiveEquipItem,
  EQUIP_FAILURE, equipItemError,
} from '../actions/inventory';
import { ITEMS } from '../resources/players/mock';

test(`${INVENTORY_REQUEST}`, () => {
  const previousState = {
    isFetching: false,
    value: {
      items: [],
    },
  };

  const expectedState = {
    isFetching: true,
    value: {
      items: [],
    },
  };

  const someLogin = 'lymak';
  const action = requestInventory(someLogin);
  const state = inventoryReducer(previousState, action);
  expect(state).toEqual(expectedState);
});

test(`${INVENTORY_SUCCESS}`, () => {
  const someItems = [
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

  const inventoryApiResponse = {
    items: someItems,
  };

  const previousState = {
    isFetching: false,
    value: {
      items: [],
    },
  };

  const expectedState = {
    isFetching: false,
    value: {
      items: someItems,
    },
  };

  const someLogin = 'lymak';

  const action = receiveInventory(someLogin, inventoryApiResponse);
  const state = inventoryReducer(previousState, action);

  expect(state).toEqual(expectedState);
});

test(`${INVENTORY_FAILURE}`, () => {
  const previousState = {
    isFetching: true,
    value: {
      items: [],
    },
  };

  const expectedState = {
    isFetching: false,
    value: {
      items: [],
    },
  };

  const someLogin = 'lymak';
  const action = inventoryError(someLogin);
  const state = inventoryReducer(previousState, action);
  expect(state).toEqual(expectedState);
});

test(`${EQUIP_REQUEST}`, () => {
  const someItems = [
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
    isFetching: false,
    value: {
      items: someItems,
    },
  };
  const expectedState = {
    isFetching: true,
    value: {
      items: someItems,
    },
  };
  const someItem = ITEMS[0];
  const someLogin = 'lymak';
  const action = requestEquipItem(someLogin, someItem);
  const state = inventoryReducer(previousState, action);
  expect(state).toEqual(expectedState);
});

describe(`${EQUIP_SUCCESS}`, () => {
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
      isFetching: true,
      value: {
        items: previousItems,
      },
    };

    const expectedState = {
      isFetching: false,
      value: {
        items: expectedItems,
      },
    };

    const inventoryApiResponse = {
      items: expectedItems,
    };

    const someLogin = 'lymak';
    const action = receiveEquipItem(someLogin, inventoryApiResponse);

    const state = inventoryReducer(previousState, action);

    expect(state).toEqual(expectedState);
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
      isFetching: true,
      value: {
        items: previousItems,
      },
    };

    const expectedState = {
      isFetching: false,
      value: {
        items: expectedItems,
      },
    };

    const inventoryApiResponse = {
      items: expectedItems,
    };

    const someLogin = 'lymak';
    const action = receiveEquipItem(someLogin, inventoryApiResponse);

    const state = inventoryReducer(previousState, action);

    expect(state).toEqual(expectedState);
  });
});

test(`${EQUIP_FAILURE}`, () => {
  const someItems = [
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
    isFetching: true,
    value: {
      items: someItems,
    },
  };
  const expectedState = {
    isFetching: false,
    value: {
      items: someItems,
    },
  };
  const someLogin = 'lymak';
  const action = equipItemError(someLogin);
  const state = inventoryReducer(previousState, action);
  expect(state).toEqual(expectedState);
});
