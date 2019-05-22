module.exports = {
  siteMetadata: {
    title: `ClimateChoice`,
    author: `ClimateChoice`,
    description: `Learn how you can help prevent earth’s climate breaking down before it's too late.`,
    siteUrl: `https://climatechoice.co/`,
    defaultImage: `https://climatechoice.co/images/Seo/default.jpg`,
    social: {
      twitter: `climatechoice`
    }
  },
  plugins: [
    {
      resolve: `gatsby-plugin-scroll-indicator`,
      options: {
        // Configure color of the scroll indicator
        color: "#DC8C01",
        // Configure paths where the scroll indicator will appear
        paths: [
          "/change-how-you-eat",
          "/change-how-you-travel",
          "/change-your-lifestyle",
          "/choose-renewable-energy",
          "/use-less-energy"
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-2193289-8",
        head: false,
        anonymize: true,
        respectDNT: true,
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        cookieDomain: "climatechoice.co"
      }
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`
      }
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://shylands.us12.list-manage.com/subscribe/post?u=8a0a61ac67959bc53bf568501&amp;id=eaa9d680b0"
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`
            }
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`
        ]
      }
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    "gatsby-transformer-yaml",
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-advanced-sitemap`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ClimateChoice`,
        short_name: `ClimateChoice`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#00B364`,
        display: `minimal-ui`,
        icon: `content/assets/icon.png`
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`
  ],
  mapping: {
    "MarkdownRemark.frontmatter.author": `AuthorYaml`
  }
};
