const VENDORS = [
  {
    id: 'aaa',
    name: "Super",
    color: "#8f0",
  },
  {
    id: 'bbb',
    name: "Safe",
    color: "#f80",
  },
  {
    id: 'ccc',
    name: "Heavy",
    color: "#800",
  },
  {
    id: 'ddd',
    name: "Light",
    color: "#08f",
  },
];

const VendorsService = {
  getVendors(cb) {
    setTimeout(() => cb(VENDORS), 100);
  },
};

export default VendorsService;
