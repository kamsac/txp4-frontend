import getRandomApiMockResponseTime from '../get-random-api-mock-response-time';

export const VENDORS = [
  {
    id: 'aaa',
    name: 'Super',
    color: '#8f0',
  },
  {
    id: 'bbb',
    name: 'Safe',
    color: '#f80',
  },
  {
    id: 'ccc',
    name: 'Heavy',
    color: '#800',
  },
  {
    id: 'ddd',
    name: 'Light',
    color: '#08f',
  },
];

const VendorsResourceMock = {
  getVendors() {
    return new Promise((resolve) => {
      const response = {
        data: VENDORS,
      };
      setTimeout(() => resolve(response), getRandomApiMockResponseTime());
    });
  },
};

export default VendorsResourceMock;
