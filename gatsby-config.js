module.exports = {
  siteMetadata: {
    title: `Maksym Komar - Hipnoterapeuta`,
    description: `Profesjonalny Hipnoterapeuta. Zadzwoń lub napisz a dostaniesz szczegółową informacje na temat wizyt lub sesji Online.`,
    author: `alp3n`,
    siteUrl: `https://maksymkomar.netlify.app/`,
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
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          quality: 100,
          breakpoints: [600, 1200, 1920],
        },
      },
    },
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
        schema: {
          perPage: 20, // currently set to 100
          requestConcurrency: 5, // currently set to 15
          previewRequestConcurrency: 2, // currently set to 5
        },
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
    "gatsby-plugin-netlify",
    // {
    //   resolve: `gatsby-plugin-gdpr-cookies`,
    //   options: {
    //     googleAnalytics: {
    //       trackingId: 'YOUR_GOOGLE_ANALYTICS_TRACKING_ID', // leave empty if you want to disable the tracker
    //       cookieName: 'gatsby-gdpr-google-analytics', // default
    //       anonymize: true, // default
    //       allowAdFeatures: false // default
    //     },
    //     googleTagManager: {
    //       trackingId: 'YOUR_GOOGLE_TAG_MANAGER_TRACKING_ID', // leave empty if you want to disable the tracker
    //       cookieName: 'gatsby-gdpr-google-tagmanager', // default
    //       dataLayerName: 'dataLayer', // default
    //     },
    //     facebookPixel: {
    //       pixelId: 'YOUR_FACEBOOK_PIXEL_ID', // leave empty if you want to disable the tracker
    //       cookieName: 'gatsby-gdpr-facebook-pixel', // default
    //     },

    //     // defines the environments where the tracking should be available  - default is ["production"]
    //     environments: ['production'/* , 'development' */]
    //   },
    // },
    `gatsby-transformer-inline-svg`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
    },
  ],
}
