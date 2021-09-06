const withImages = require("next-images");

// probably we'll remove withImages after we have API's
module.exports = withImages({
  webpack(config, { dev }) {
    if (dev) {
      config.module.rules.push({
        test: /\.js$/,
        loader: "eslint-loader",
        exclude: [/node_modules/, /.next/, /out/],
        enforce: "pre",
        options: {
          emitWarning: true,
          fix: true,
        },
      });
    }
    return config;
  },
});
