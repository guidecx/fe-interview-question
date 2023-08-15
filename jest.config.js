module.exports = {
  roots: ["<rootDir>"],
  displayName: "Tests",
  automock: false,

  moduleDirectories: ["node_modules", "<rootDir>"],

  testEnvironment: "jsdom",

  // setupFiles: ['react-app-polyfill/jsdom', '../config/test/setup.js'],

  transform: {
    "^.+\\.(t|j)sx?$": [
      "next/dist/build/swc/jest-transformer",
      { nextConfig: {} },
    ],
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
};
