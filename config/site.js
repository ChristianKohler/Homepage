module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Christian Kohler', // Navigation and Site Title
  titleAlt: 'Christian Kohler', // Title for JSONLD
  description: 'Christian Kohler',
  url: 'https://christiankohler.net', // Domain of your site. No trailing slash!
  siteUrl: 'https://christiankohler.net', // url + pathPrefix
  siteLanguage: 'en', // Language Tag on <html> element
  logo: 'static/logo/logo.png', // Used for SEO
  banner: 'static/logo/banner.png',
  // JSONLD / Manifest
  favicon: 'static/logo/favicon.png', // Used for manifest favicon generation
  shortName: 'ChrisKBlog', // shortname for manifest. MUST be shorter than 12 characters
  author: 'Chris', // Author for schemaORGJSONLD
  themeColor: '#3e7bf2',
  backgroundColor: '#d3e0ff',
  twitter: '@kohlerchristian', // Twitter Username
};
