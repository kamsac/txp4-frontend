const ITEMS = [
  {
    name: "Tire",
    vendor: {
      name: "Super",
      color: "#8f0",
    },
    type: "tire",
    tier: 3,
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
    name: "Less tired",
    vendor: {
      name: "Safe",
      color: "#f80",
    },
    type: "tire",
    tier: 1,
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
    name: "Shit engine",
    vendor: {
      name: "Heavy",
      color: "#800",
    },
    type: "engine",
    tier: 2,
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
    name: "Some tire",
    vendor: {
      name: "Light",
      color: "#08f",
    },
    type: "tire",
    tier: 2,
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
    name: "Tire",
    vendor: {
      name: "Super",
      color: "#8f0",
    },
    type: "tire",
    tier: 3,
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
    name: "Duper engine",
    vendor: {
      name: "Super",
      color: "#8f0",
    },
    type: "engine",
    tier: 2,
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
];

const InventoryService = {
  getItems(cb) {
    setTimeout(() => cb(ITEMS), 100);
  },

  equipItem(item, cb) {
    setTimeout(() => cb(item), 100);
  }
};

export default InventoryService;