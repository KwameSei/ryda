// metro.config.js

const { getDefaultConfig } = require('metro-config');

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig();

  return {
    resolver: {
      assetExts: [...assetExts, 'db'], // Add any additional asset extensions you need
      sourceExts: [...sourceExts, 'jsx', 'js', 'json', 'ts', 'tsx'], // Add any source file extensions you're using
    },
  };
})();
