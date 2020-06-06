import dotenv from 'dotenv'
import lang from './lang/en-US'

dotenv.config()
const {
  homepage: { meta }
} = lang

export default {
  target: 'static',
  ssr: true,
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png'
      },
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png'
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'mask-icon', color: '#c5517d', href: '/safari-pinned-tab.svg' },
      { rel: 'dns-prefetch', href: '//www.googletagmanager.com/' },
      { rel: 'preconnect', href: 'https://www.googletagmanager.com/' },
      { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com/',
        crossorigin: true
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Montserrat:wght@900&family=Open+Sans:ital,wght@0,400;0,700;0,900;1,400&display=swap'
      }
    ],
    meta: [{ name: 'msapplication-TileColor', content: '#c5517d' }],
    script: [
      { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
    ],
    bodyAttrs: {
      class: ['font-sans font-regular']
    }
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#C5517D' },
  loadingIndicator: {
    name: 'cube-grid',
    color: '#C5517D',
    background: '212121'
  },
  /*
   ** Global CSS
   */
  css: ['~assets/css/_animations.scss'],

  purgeCSS: {
    whitelist: [
      'dark-mode',
      'ul',
      'ol',
      'li',
      'text-primary-base',
      'md:inline'
    ],
    whitelistPatternsChildren: [/service-description$/, /svg.*/],
    purgeCSSInDev: true
  },

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    // { src: '~plugins/ga.js', mode: 'client' },
    '~plugins/contentful.js'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Doc: https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources',
    // Doc: https://github.com/nuxt-community/svg-module
    '@nuxtjs/svg',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    // Doc: https://github.com/nuxt/components
    // TODO: Remove when upgrading to nuxt 2.13+
    '@nuxt/components',
    // Doc: https://github.com/nuxt-community/color-mode-module
    '@nuxtjs/color-mode',
    // Doc: https://github.com/nuxt-community/imagemin-module
    '@nuxtjs/imagemin',
    // Doc: https://github.com/nuxt-community/gtm-module
    '@nuxtjs/gtm',
    // Doc: https://github.com/nuxt-community/fontawesome-module
    '@nuxtjs/fontawesome'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    'nuxt-i18n',
    'nuxt-trailingslash-module',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    '@nuxtjs/markdownit'
  ],

  pwa: {
    meta: {
      favicon: false,
      name: meta.title,
      description: meta.description,
      ogSiteName: meta.shortName,
      ogImage: '/site_card_en.png',
      twitterCreator: 'devolt_one'
    },
    manifest: {
      name: meta.title,
      shortName: meta.shortName,
      description: meta.description
    }
  },

  gtm: {
    dev: false,
    id: process.env.GTM_ID || 'GTM-XXXXXXX'
  },

  env: {
    GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID || 'UA-XXXXXXXX-X',
    GTM_ID: process.env.GTM_ID || 'GTM-XXXXXXX',

    CTF_SPACE_ID: process.env.CTF_SPACE_ID || 'YOURSPACEID',
    CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN || 'YOURACCESSTOKEN',
    CTF_ENVIRONMENT: process.env.CTF_ENVIRONMENT || 'master',

    DOMAIN_EN: process.env.DOMAIN_EN || 'en.nuxt-app.localhost:3000',
    DOMAIN_RU: process.env.DOMAIN_RU || 'ru.nuxt-app.localhost:3000'
  },

  i18n: {
    // differentDomains: true,
    locales: [
      {
        code: 'ru',
        iso: 'ru-RU',
        file: 'ru-RU.json',
        name: 'Русский'
        // domain: process.env.DOMAIN_RU || 'ru.nuxt-app.localhost:3000'
      },
      {
        code: 'en',
        iso: 'en-US',
        file: 'en-US.json',
        name: 'English'
        // domain: process.env.DOMAIN_EN || 'en.nuxt-app.localhost:3000'
      }
    ],
    defaultLocale: 'ru',
    // vuex: {
    //   syncLocale: true
    // },
    vueI18n: {
      fallbackLocale: 'en',
      warnHtmlInMessage: 'off'
    },
    seo: false,
    lazy: true,
    langDir: 'lang/'
  },

  robots: {
    sitemap: (process.env.URL || 'http://localhost:3000') + '/sitemap.xml'
  },

  sitemap: {
    hostname: process.env.URL || 'http://localhost:3000',
    // shortcut notation (basic)
    i18n: 'ru'
  },

  imagemin: {
    imageminOptions: {
      plugins: [
        ['gifsicle', { interlaced: true }],
        ['jpegtran', { progressive: true }],
        ['optipng', { optimizationLevel: 5 }]
      ]
    }
  },

  fontawesome: {
    icons: {
      brands: ['faVk', 'faInstagram', 'faGithub', 'faTwitter']
    }
  },

  markdownit: {
    injected: true
  },

  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    vendor: ['axios', 'contentful'],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
