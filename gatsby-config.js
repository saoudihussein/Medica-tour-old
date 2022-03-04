module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "frontEnd",
  },
  // flags: {
  //   DEV_SSR: true
  // },
 plugins: [
      // Simple config, passing URL
      {
        resolve: "gatsby-source-graphql",
        options: {
          // Arbitrary name for the remote schema Query type
          typeName: "SWAPI",
          // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
          fieldName: "swapi",
          // Url to query from
          url: "https://imscproject.com/medica/graphql",
        },
      },
      {
        resolve: `gatsby-plugin-styled-components`,
        options: {
          // Add any options here
        },
      },
     {
      resolve: `gatsby-plugin-scroll-reveal`,
        threshold: 1, // Percentage of an element's area that needs to be visible to launch animation
        once: true, // Defines if animation needs to be launched once
        disable: false, // Flag for disabling animations
        // Advanced Options
        selector: '[data-sal]', // Selector of the elements to be animated
        animateClassName: 'sal-animate', // Class name which triggers animation
        disabledClassName: 'sal-disabled', // Class name which defines the disabled state
        rootMargin: '0% 50%', // Corresponds to root's bounding box margin
        enterEventName: 'sal:in', // Enter event name
        exitEventName: 'sal:out', 
        resolve: 'gatsby-plugin-page-transitions',
        options: {
        transitionTime: 2000
      },
     },
      `@material-ui/core`,
      `@material-ui/icons`,
      `@fullpage/react-fullpage`,
      `gatsby-plugin-transition-link`,
      `smooth-scroll`,
      `react-update-url-on-scroll`,
      `react-minimal-side-navigation`,
      `react-animate-on-scroll`,
      `react-use`,
      `react`,
      `html-react-parser`,
      `react-transition-group`,
      `react-page-scroller`,
      `react-full-page`,
      `gatsby-plugin-image`,
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
  ],
  
};
