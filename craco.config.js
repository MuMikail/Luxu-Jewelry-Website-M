module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Disable source-map-loader for three.js
      webpackConfig.module.rules.forEach((rule) => {
        if (rule.enforce === 'pre' && rule.use) {
          rule.use.forEach((loader) => {
            if (loader.loader && loader.loader.includes('source-map-loader')) {
              loader.exclude = /node_modules\/three/;
            }
          });
        }
      });
      return webpackConfig;
    },
  },
};
