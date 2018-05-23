import moxios from 'moxios';
import {
  requestInventory,
  receiveInventory,
  inventoryError,
  requestEquipItem,
  receiveEquipItem,
  equipItemError,
  loadPlayerInventory,
  equipItem,
} from './inventory';
import { ITEMS } from '../resources/players/mock';
import dotenvConfiguration from '../dotenv-configuration';
import { ACCESS_TOKEN } from '../resources/auth/mock';

test('requestInventory', () => {
  const someLogin = 'lymak';
  expect(requestInventory(someLogin)).toMatchSnapshot();
});

test('receiveInventory', () => {
  const someInventory = {
    items: [
      {
        id: 'a1a1a1',
        name: 'Tire',
        vendorId: 'aaa',
        equipRegion: 'tire',
        tier: 3,
        isEquipped: true,
        modifiers: [
          {
            name: 'acceleration',
            value: 1.2,
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
        ],
      },
    ],
  };
  const someLogin = 'lymak';
  expect(receiveInventory(someLogin, someInventory)).toMatchSnapshot();
});

test('inventoryError', () => {
  const someLogin = 'lymak';
  expect(inventoryError(someLogin)).toMatchSnapshot();
});

test('requestEquipItem', () => {
  const someLogin = 'lymak';
  const someItem = ITEMS[0];
  expect(requestEquipItem(someLogin, someItem)).toMatchSnapshot();
});

test('receiveEquipItem', () => {
  const someLogin = 'lymak';
  const someInventory = {
    items: [ITEMS[0], ITEMS[1], ITEMS[2]],
  };
  expect(receiveEquipItem(someLogin, someInventory)).toMatchSnapshot();
});

test('equipItemError', () => {
  const someLogin = 'lymak';
  expect(equipItemError(someLogin)).toMatchSnapshot();
});

describe('loadPlayerInventory', () => {
  test('with success', (done) => {
    moxios.install();
    dotenvConfiguration.API_URL = jest.fn().mockReturnValue('https://localhost:9000/api');
    const someLogin = 'lymak';
    const someItems = [
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
    const someInventory = {
      items: someItems,
    };
    const dispatchMock = jest.fn();
    moxios.withMock(() => {
      loadPlayerInventory(someLogin)(dispatchMock);
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request
          .respondWith({
            status: 200,
            response: {
              inventory: someInventory,
            },
          })
          .then(() => {
            expect(request.url).toEqual(`${dotenvConfiguration.API_URL}/players/${someLogin}/inventory`);
            expect(dispatchMock).toBeCalledWith(requestInventory(someLogin));
            expect(dispatchMock).toBeCalledWith(receiveInventory(someLogin, someInventory));
            expect(dispatchMock).not.toBeCalledWith(inventoryError(someLogin));

            moxios.uninstall();
            done();
          });
      });
    });
  });

  test('with failure', (done) => {
    moxios.install();
    dotenvConfiguration.API_URL = jest.fn().mockReturnValue('https://localhost:9000/api');
    const someLogin = 'lymak';
    const someItems = [
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
    const someInventory = {
      items: someItems,
    };
    const dispatchMock = jest.fn();
    moxios.withMock(() => {
      loadPlayerInventory(someLogin)(dispatchMock);
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request
          .respondWith({
            status: 500,
            response: {
              inventory: someInventory,
            },
          })
          .then(() => {
            expect(request.url).toEqual(`${dotenvConfiguration.API_URL}/players/${someLogin}/inventory`);
            expect(dispatchMock).toBeCalledWith(requestInventory(someLogin));
            expect(dispatchMock).not.toBeCalledWith(receiveInventory(someLogin, someInventory));
            expect(dispatchMock).toBeCalledWith(inventoryError(someLogin));

            moxios.uninstall();
            done();
          });
      });
    });
  });
});

describe('equipItem', () => {
  test('with success', (done) => {
    moxios.install();
    const someLogin = 'lymak';
    const itemToBeEquipped = {
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
    };
    const someItems = [
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
    const someInventory = {
      items: someItems,
    };
    const dispatchMock = jest.fn();
    equipItem(someLogin, itemToBeEquipped)(dispatchMock);
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request
        .respondWith({
          status: 200,
          response: {
            inventory: someInventory,
          },
        })
        .then(() => {
          expect(request.url)
            .toEqual(`${dotenvConfiguration.API_URL}/players/${someLogin}/inventory/${itemToBeEquipped.id}/equip`);
          expect(dispatchMock).toBeCalledWith(requestEquipItem(someLogin, itemToBeEquipped));
          expect(dispatchMock).toBeCalledWith(receiveEquipItem(someLogin, someInventory));
          expect(dispatchMock).not.toBeCalledWith(equipItemError(someLogin));
          moxios.uninstall();
          done();
        });
    });
  });

  test('with failure', (done) => {
    moxios.install();
    const someLogin = 'lymak';
    const itemToBeEquipped = {
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
    };
    const someItems = [
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
    const someInventory = {
      items: someItems,
    };
    const dispatchMock = jest.fn();
    equipItem(someLogin, itemToBeEquipped)(dispatchMock);
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request
        .respondWith({
          status: 500,
          response: {
            inventory: someInventory,
          },
        })
        .then(() => {
          expect(request.url)
            .toEqual(`${dotenvConfiguration.API_URL}/players/${someLogin}/inventory/${itemToBeEquipped.id}/equip`);
          expect(dispatchMock).toBeCalledWith(requestEquipItem(someLogin, itemToBeEquipped));
          expect(dispatchMock).not.toBeCalledWith(receiveEquipItem(someLogin, someInventory));
          expect(dispatchMock).toBeCalledWith(equipItemError(someLogin));
          moxios.uninstall();
          done();
        });
    });
  });

  test('should be authorized', () => {
    moxios.install();
    const someLogin = 'lymak';
    const itemToBeEquipped = {
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
    };
    const dispatchMock = jest.fn();
    localStorage.__STORE__['accessToken'] = ACCESS_TOKEN; // eslint-disable-line
    equipItem(someLogin, itemToBeEquipped)(dispatchMock);
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      expect(request.headers.Authorization).toEqual(`Bearer ${ACCESS_TOKEN}`);
      moxios.uninstall();
    });
  });
});
