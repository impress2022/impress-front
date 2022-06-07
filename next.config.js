const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
module.exports = withBundleAnalyzer({
  images: {
    domains: [
      process.env.DOMAIN,
      'kkhwmfs.cluster030.hosting.ovh.net'
    ],
  },
});
