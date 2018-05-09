module.exports = {
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFiles: [
    '<rootDir>/jest-setup.js',
    'jest-localstorage-mock',
  ],
  moduleNameMapper: {
    '\\.(css|scss)$': '<rootDir>/jest-empty-mock.js',
    '\\.(png|jpg|gif)$': '<rootDir>/jest-empty-mock.js',
  },
};
