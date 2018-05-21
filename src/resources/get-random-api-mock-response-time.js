const min = 100;
const max = 1000;

export default function getRandomApiMockResponseTime() {
  return ((max - min) * Math.random()) + min;
}
