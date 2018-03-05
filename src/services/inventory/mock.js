const ITEMS = [
  {
    name: "Super tire",
    vendor: {
      name: "Super Vendor",
      color: "#8f0",
    },
    type: "tire",
    tier: 3,
    stats: {
      maxSpeed: 1,
      acceleration: 1.2,
      steering: 1.1,
      breaking: 1.2,
      grip: 1.5,
      gravity: 1,
    },
  },
  {
    name: "Safe tire",
    vendor: {
      name: "Safe Vendor",
      color: "#f80",
    },
    type: "tire",
    tier: 1,
    stats: {
      maxSpeed: 0.4,
      acceleration: 1,
      steering: 1.4,
      breaking: 2,
      grip: 3,
      gravity: 1,
    },
  },
  {
    name: "Heavy engine",
    vendor: {
      name: "Heavy Vendor",
      color: "#800",
    },
    type: "engine",
    tier: 2,
    stats: {
      maxSpeed: 2,
      acceleration: 1.8,
      steering: 1,
      breaking: 1,
      grip: 0.2,
      gravity: 1.5,
    },
  },
  {
    name: "Light tire",
    vendor: {
      name: "Light Vendor",
      color: "#08f",
    },
    type: "tire",
    tier: 2,
    stats: {
      maxSpeed: 1,
      acceleration: 1,
      steering: 1,
      breaking: 1.1,
      grip: 0.8,
      gravity: 0.9,
    },
  },
  {
    name: "Super tire",
    vendor: {
      name: "Super Vendor",
      color: "#8f0",
    },
    type: "tire",
    tier: 3,
    stats: {
      maxSpeed: 1,
      acceleration: 1.2,
      steering: 1.1,
      breaking: 1.2,
      grip: 1.5,
      gravity: 1,
    },
  },
  {
    name: "Super Duper engine",
    vendor: {
      name: "Super Vendor",
      color: "#8f0",
    },
    type: "engine",
    tier: 2,
    stats: {
      maxSpeed: 1.5,
      acceleration: 3,
      steering: 1,
      breaking: 1,
      grip: 1,
      gravity: 1.5,
    },
  },
];

const InventoryService = {
  getItems(cb) {
    setTimeout(() => cb(ITEMS), 100);
  },
};

export default InventoryService;