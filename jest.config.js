const nextJest = require("next/jest");

const makeConfig = nextJest({ dir: "./" });

module.exports = makeConfig({
  roots: ["<rootDir>"],
  displayName: "Tests",
  automock: false,
  moduleDirectories: ["node_modules", "<rootDir>"],

  testEnvironment: "jsdom",

  // setupFiles: ['react-app-polyfill/jsdom', '../config/test/setup.js'],

  setupFilesAfterEnv: ["<rootDir>/config/tests/setupTests.ts"],

  modulePathIgnorePatterns: ["<rootDir>/resources/"],

  transform: {
    "^.+\\.(t|j)sx?$": [
      "next/dist/build/swc/jest-transformer",
      { nextConfig: {} },
    ],
    // Use babel-jest to transpile tests with the next/babel preset
    // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
  },

  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.json",
    },
  },

  // setupFilesAfterEnv: ['<rootDir>/__tests__/setup.ts'],
  //
  // testMatch: ['<rootDir>/**/*.{spec,test}.{ts,tsx}'],
  //
  // testPathIgnorePatterns: ['node_modules/', '<rootDir>/.next/'],
  //
  // testURL: 'http://localhost',
  //
  // moduleNameMapper: {
  //   '^~/tests/(.*)': '__tests__/$1',
  //   '^@/(.*)': '$1',
  //   '^.+\\.module\\.(css|less|sass|scss)$': 'identity-obj-proxy',
  //   '\\.(scss|css|less)$': 'identity-obj-proxy',
  // },
  //
  // watchPlugins: [
  //   'jest-watch-typeahead/filename',
  //   'jest-watch-typeahead/testname',
  // ],
});
