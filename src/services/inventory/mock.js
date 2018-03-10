const ITEMS = [
  {
    id: "a1a1a1",
    name: "Tire",
    vendor: {
      name: "Super",
      color: "#8f0",
    },
    type: "tire",
    tier: 3,
    equipped: true,
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
    vendor: {
      name: "Safe",
      color: "#f80",
    },
    type: "tire",
    tier: 1,
    equipped: false,
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
    vendor: {
      name: "Heavy",
      color: "#800",
    },
    type: "engine",
    tier: 2,
    equipped: true,
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
    vendor: {
      name: "Light",
      color: "#08f",
    },
    type: "tire",
    tier: 2,
    equipped: false,
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
    vendor: {
      name: "Super",
      color: "#8f0",
    },
    type: "tire",
    tier: 3,
    equipped: false,
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
    vendor: {
      name: "Super",
      color: "#8f0",
    },
    type: "engine",
    tier: 2,
    equipped: false,
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
    vendor: {
      name: "Super",
      color: "#8f0",
    },
    type: "tire",
    tier: 3,
    equipped: false,
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
    vendor: {
      name: "Safe",
      color: "#f80",
    },
    type: "tire",
    tier: 1,
    equipped: false,
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
    vendor: {
      name: "Heavy",
      color: "#800",
    },
    type: "engine",
    tier: 2,
    equipped: false,
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
    vendor: {
      name: "Light",
      color: "#08f",
    },
    type: "tire",
    tier: 2,
    equipped: false,
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
    name: "Tire",
    vendor: {
      name: "Super",
      color: "#8f0",
    },
    type: "tire",
    tier: 3,
    equipped: false,
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
];

const InventoryService = {
  getItems(cb) {
    setTimeout(() => cb(ITEMS), 100);
  },

  equipItem(item, cb) {
    item.equipped = true;
    setTimeout(() => cb(Object.assign({}, item)), 100);
  },
};

export default InventoryService;