/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Felds — Full stack web dev",
    description: `Full stack web dev based in São Paulo, Brazil.`,
  },
  pathPrefix: "/",
  plugins: [
    // ----
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`open sans:300,400`],
        display: "swap",
      },
    },
  ],
}
