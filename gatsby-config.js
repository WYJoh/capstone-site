module.exports = {
  siteMetadata: {
    title: "Disc Hierarchy",
    siteUrl: "https://confident-newton-9e2b70.netlify.app",
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
        trackingId: "UA-54516992-1",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-fontawesome-css",
  ],
};
