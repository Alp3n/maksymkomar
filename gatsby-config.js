module.exports = {
  siteMetadata: {
    title: `Maksym Komar - Hipnoterapeuta`,
    description: `Profesjonalny Hipnoterapeuta. Zadzwoń lub napisz a dostaniesz szczegółową informacje na temat wizyt lub sesji Online.`,
    author: `alp3n`,
    siteUrl: `https://maksymkomar.com/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {},
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "https://maksymkomar.adamwalukiewicz.pl/?graphql=true",
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `montserrat\:300,300i,400,400i,700,700i`,
          `marcellus\:300,300i,400,400i,700,700i`,
        ],
      },
    },
  ],
}
