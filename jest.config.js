module.exports = {
  preset: 'react-native',
  setupFiles: [
    './jest.setup.js',
    './node_modules/react-native-gesture-handler/jestSetup.js',
  ],
  setupFilesAfterEnv: ['./jest-after-env.setup.js'],
};
