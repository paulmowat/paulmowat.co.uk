const siteMetadata = {
  title: 'Paul Mowat - Developer | Principal Solution Architect',
  author: 'Paul Mowat',
  headerTitle: 'Paul Mowat',
  email: 'paul@paulmowat.co.uk',
  description: 'Paul Mowat is an developer based near Aberdeen Scotland who currently works for OneAdvanced as a Principal Solution Architect.',
  language: 'en-gb',
  siteUrl: 'https://www.paulmowat.co.uk',
  image: '/static/images/me.jpg',
  socialBanner: '/static/images/twitter-card.png',
  github: 'https://github.com/paulmowat',
  twitter: 'https://twitter.com/paul_mowat',
  facebook: 'https://www.facebook.com/paul.mowat.3',
  linkedin: 'https://uk.linkedin.com/in/paulmowat',
  youtube: 'https://www.youtube.com/channel/UC1V9KmnmVzpwrnqENngdCAA',
  locale: 'en-GB',
  comment: {
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
    provider: 'giscus', // supported providers: giscus, utterances, disqus
    giscusConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://giscus.app/
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'title', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'custom',
      // theme when dark mode
      darkTheme: 'custom',
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: process.env.NEXT_PUBLIC_GISCUS_THEME_URL
    }
  }
}

module.exports = siteMetadata
