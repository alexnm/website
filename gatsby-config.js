module.exports = {
  siteMetadata: {
    title: 'Alex Moldovan',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'alexmoldovan.tech',
        short_name: 'alexmoldovan',
        start_url: '/',
        background_color: '#E65100',
        theme_color: '#E65100',
        display: 'standalone',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}
