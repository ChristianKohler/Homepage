module.exports = {
  siteMetadata: {
    title: `Chris Kohler`,
    name: `Chris Kohler`,
    siteUrl: `https://christiankohler.net`,
    description: `This is my description that will be used in the meta tags and important for search results`,
    hero: {
      heading: `<b>Hi, I am Chris</b>, I live in Zurich, Switzerland. I am a software engineer with a <b>passion for JavaScript</b> and Web Technologies.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/kohlerchristian`,
      },
      {
        name: `github`,
        url: `https://github.com/christiankohler`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/mrchriskohler`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/mr-christian-kohler/`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
  ],
};
