module.exports = {
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
  moduleNameMapper: {
    "^.+\\.(css|sass|scss)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png|gif|webp)$": "<rootDir>/__mocks__/file-mock.js",
    "\\.svg$": "<rootDir>/__mocks__/svg-mock.js",
  },
  testPathIgnorePatterns: ["node_modules", "\\.cache", "public"],
  transformIgnorePatterns: ["node_modules/(?!(gatsby)/)"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jsdom",
  globals: {
    __PATH_PREFIX__: "",
  },
};
