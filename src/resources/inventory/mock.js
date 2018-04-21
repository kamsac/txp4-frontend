const ITEMS = [
  {
    id: "a1a1a1",
    name: "Tire",
    vendorId: 'aaa',
    equipRegion: "tire",
    tier: 3,
    isEquipped: true,
    modifiers: [
      {
        name: "maxSpeed",
        value: 1,
      },
      {
        name: "acceleration",
        value: 1.2,
      },
      {
        name: "steering",
        value: 1.1,
      },
      {
        name: "breaking",
        value: 1.2,
      },
      {
        name: "grip",
        value: 1.5,
      },
      {
        name: "gravity",
        value: 1,
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
      {
        name: "acceleration",
        value: 1,
      },
      {
        name: "steering",
        value: 1.4,
      },
      {
        name: "breaking",
        value: 2,
      },
      {
        name: "grip",
        value: 3,
      },
      {
        name: "gravity",
        value: 1,
      },
    ],
  },
  {
    id: "c3c3c3",
    name: "Shit engine",
    vendorId: 'ccc',
    equipRegion: "engine",
    tier: 2,
    isEquipped: false,
    modifiers: [
      {
        name: "maxSpeed",
        value: 2,
      },
      {
        name: "acceleration",
        value: 1.8,
      },
      {
        name: "steering",
        value: 1,
      },
      {
        name: "breaking",
        value: 1,
      },
      {
        name: "grip",
        value: 0.2,
      },
      {
        name: "gravity",
        value: 1.5,
      },
    ],
  },
  {
    id: "d4d4d4",
    name: "Some tire",
    vendorId: 'ddd',
    equipRegion: "tire",
    tier: 2,
    isEquipped: false,
    modifiers: [
      {
        name: "maxSpeed",
        value: 1,
      },
      {
        name: "acceleration",
        value: 1,
      },
      {
        name: "steering",
        value: 1,
      },
      {
        name: "breaking",
        value: 1.1,
      },
      {
        name: "grip",
        value: 0.8,
      },
      {
        name: "gravity",
        value: 0.9,
      },
    ],
  },
  {
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
      {
        name: "acceleration",
        value: 1.2,
      },
      {
        name: "steering",
        value: 1.1,
      },
      {
        name: "breaking",
        value: 1.2,
      },
      {
        name: "grip",
        value: 1.5,
      },
      {
        name: "gravity",
        value: 1,
      },
    ],
  },
  {
    id: "f6f6f6",
    name: "Duper engine",
    vendorId: 'aaa',
    equipRegion: "engine",
    tier: 2,
    isEquipped: false,
    modifiers: [
      {
        name: "maxSpeed",
        value: 1.5,
      },
      {
        name: "acceleration",
        value: 3,
      },
      {
        name: "steering",
        value: 1,
      },
      {
        name: "breaking",
        value: 1,
      },
      {
        name: "grip",
        value: 1,
      },
      {
        name: "gravity",
        value: 1.5,
      },
    ],
  },
  {
    id: "f7f7f7",
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
      {
        name: "acceleration",
        value: 1.2,
      },
      {
        name: "steering",
        value: 1.1,
      },
      {
        name: "breaking",
        value: 1.2,
      },
      {
        name: "grip",
        value: 1.5,
      },
      {
        name: "gravity",
        value: 1,
      },
    ],
  },
  {
    id: "g8g8g8",
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
      {
        name: "acceleration",
        value: 1,
      },
      {
        name: "steering",
        value: 1.4,
      },
      {
        name: "breaking",
        value: 2,
      },
      {
        name: "grip",
        value: 3,
      },
      {
        name: "gravity",
        value: 1,
      },
    ],
  },
  {
    id: "h9h9h9",
    name: "Shit engine",
    vendorId: 'ccc',
    equipRegion: "engine",
    tier: 2,
    isEquipped: false,
    modifiers: [
      {
        name: "maxSpeed",
        value: 2,
      },
      {
        name: "acceleration",
        value: 1.8,
      },
      {
        name: "steering",
        value: 1,
      },
      {
        name: "breaking",
        value: 1,
      },
      {
        name: "grip",
        value: 0.2,
      },
      {
        name: "gravity",
        value: 1.5,
      },
    ],
  },
  {
    id: "i0i0i0",
    name: "Some tire",
    vendorId: 'ddd',
    equipRegion: "tire",
    tier: 2,
    isEquipped: false,
    modifiers: [
      {
        name: "maxSpeed",
        value: 1,
      },
      {
        name: "acceleration",
        value: 1,
      },
      {
        name: "steering",
        value: 1,
      },
      {
        name: "breaking",
        value: 1.1,
      },
      {
        name: "grip",
        value: 0.8,
      },
      {
        name: "gravity",
        value: 0.9,
      },
    ],
  },
  {
    id: "j1j1j1",
    name: "Transmission",
    vendorId: 'ccc',
    equipRegion: "transmission",
    tier: 3,
    isEquipped: false,
    modifiers: [
      {
        name: "maxSpeed",
        value: 0.7,
      },
      {
        name: "acceleration",
        value: 1.5,
      },
      {
        name: "steering",
        value: 1,
      },
      {
        name: "breaking",
        value: 1,
      },
      {
        name: "grip",
        value: 1,
      },
      {
        name: "gravity",
        value: 1,
      },
    ],
  },
];

const InventoryResourceMock = {
  getItems() {
    return new Promise((resolve, reject) => {
      const response = {
        data: ITEMS,
      };
      setTimeout(() => resolve(response), 100);
    });
  },

  equipItem(item) {
    return new Promise((resolve, reject) => {
      const response = {
        data: ITEMS,
      };
      setTimeout(() => resolve(ITEMS), 100);
    });
  },
};

export default InventoryResourceMock;
