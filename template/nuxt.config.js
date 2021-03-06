module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '{{ name }}',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '{{escape description }}' },
      { 'http-equiv': 'Cache-Control', content: 'no-cache, max-age=86400' },
      { 'http-equiv': 'X-Content-Type-Options', content: 'nosniff' },
      { 'http-equiv': 'Referrer-Policy', content: 'strict-origin-when-cross-origin' },
      { 'http-equiv': 'Content-Security-Policy',
        content: `
          default-src 'self';
          img-src 'self' data:;
          script-src 'self' 'unsafe-inline';
          style-src 'self' 'unsafe-inline';
          font-src 'self';
          connect-src 'self'; frame-src 'self';`
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Determine dev mode
  */
  dev: (process.env.NODE_ENV !== 'production'),

  /*
  ** Determine environment variables
  */
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },

  /*
  ** Import Sass manifest files
  */
  css: [
    '@/assets/sass/main.scss'
  ],

  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },

    /*
    ** Add legacy-browser support
    */
    postcss: [
      require('autoprefixer')({
        browsers: ['> 5%', 'ie >= 11']
      })
    ]
  },

  /*
  ** Import modules for global use
  */
  modules: [
    ['bootstrap-vue/nuxt', { css: false }],
  ],

  /*
  ** Add API handlers and other middleware
  */
  serverMiddleware: [
    '~/api/example.js'
  ]
}
