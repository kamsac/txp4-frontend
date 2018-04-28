import { equipItem, receiveItems, selectItem } from './inventory';

test('receiveItems', () => {
  const someItems = [
    {
      id: "a1a1a1",
      name: "Tire",
      vendorId: 'aaa',
      equipRegion: "tire",
      tier: 3,
      isEquipped: true,
      modifiers: [
        {
          name: "acceleration",
          value: 1.2,
        },
      ],
    },
    {
      id: "b2b2b2",
      name: "Less tired",
      vendorId: 'bbb',
      equipRegion: "tire",
      tier: 1,
      isEquipped: false,
      modifiers: [
        {
          name: "maxSpeed",
          value: 0.4,
        },
      ],
    },
  ];

  expect(receiveItems(someItems)).toMatchSnapshot();
});

test('equipItem', () => {
  const someItem = {
    id: "e5e5e5",
    name: "Tire",
    vendorId: 'aaa',
    equipRegion: "tire",
    tier: 3,
    isEquipped: false,
    modifiers: [
      {
        name: "maxSpeed",
        value: 1,
      },
    ],
  };

  expect(equipItem(someItem)).toMatchSnapshot();
});
