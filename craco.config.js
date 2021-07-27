
const { createJestConfig } = require("@craco/craco");

const cracoConfig = require("./craco.config.js");
const jestConfig = createJestConfig(cracoConfig);

module.exports = 
{
  ...jestConfig,
  plugins: [
    {
      plugin: require("craco-cesium")(),
    },
  ],
};
