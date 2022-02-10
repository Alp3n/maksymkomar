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
        // url: "http://localhost/maksymkomar/?graphql=true",
        url: "https://maksymkomar.adamwalukiewicz.pl/?graphql=true",
      },
    },
    /* {
      resolve: "@pasdo501/gatsby-source-woocommerce",
      options: {
        // Base URL of WordPress site
        api: "https://maksymkomar.adamwalukiewicz.pl",
        // true if using https. false otherwise.
        https: true,
        api_keys: {
          consumer_key: `ck_7ac24e3ab46119a60538a57b9ef10edf42848632`,
          consumer_secret: `cs_88283aa9e0460881bedf6a6c08c7faf2554984c7`,
        },
        // Array of strings with fields you'd like to create nodes for...
        fields: ["products", "products/categories", "products/attributes"],
      },
    }, */
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
