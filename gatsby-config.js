module.exports = {
  siteMetadata: {
    title: `West Hoxton Mutual Aid`,
    description: `A website for the West Hoxton Mutual Aid volunteer group`,
    author: `@jafrog`,
    credentials: {
      mapboxgl: {
        accessToken: "pk.eyJ1IjoiamFmcm9nIiwiYSI6ImNrODVycjFidjA5YXYzZm90bGlhb3NtZGIifQ.SQAaDJZO5xzVJsMMRlYMTw"
      }
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `flies`,
        path: `${__dirname}/src/files`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `West Hoxton Mutual Aid`,
        short_name: `westhoxtonaid`,
        start_url: `/`,
        background_color: `#2F4858`,
        theme_color: `#E03616`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
  `gatsby-plugin-netlify-cms`,
    {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `markdown-pages`,
      path: `${__dirname}/content`,
    },
  },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
