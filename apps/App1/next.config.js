const withTM = require("next-transpile-modules")([
  "@obby/components",
  "@obby/lib",
]);

module.exports = withTM({
  distDir: "build",
  async redirects() {
    return [];
  },
  async rewrites() {
    return [];
  },
});
