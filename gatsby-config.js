module.exports = {
  siteMetadata: {
    title: `Woodeco Hardwood Flooring`,
    description: `We combine modern designs with eco-friendly, high-quality materials. Woodeco flooring is the perfect choice for anyone looking to make the final addition to their home while being kind to the Earth’s forests.`,
    image: "/card.jpg",
    siteUrl: "https://woodeco.netlify.app/",
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/data/projects`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {},
    },
    {
      resolve: "gatsby-plugin-transition-link",
      options: {
        layout: require.resolve(`./src/components/layout.js`),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://woodeco.netlify.app/",
        sitemap: "https://woodeco.netlify.app/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Woodeco Hardwood Flooring`,
        short_name: `Woodeco Floors`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/assets/favicon.ico`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Rufina`,
            variants: [`400`, `700`],
          },
          {
            family: `Lato`,
            variants: [`400`, `700`, `900`],
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
