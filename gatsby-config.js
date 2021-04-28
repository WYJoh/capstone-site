module.exports = {
  siteMetadata: {
    title: "Disc Hierarchy",
    siteUrl: "https://app.netlify.com/sites/confident-newton-9e2b70",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "sAZg2ivj-0c3-gX0UG9s2K48l42-JtRpn_Fyqzm-bSs",
        spaceId: "c3zlvfx34l4k",
      },
    },
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "123456",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-fontawesome-css",
  ],
};
