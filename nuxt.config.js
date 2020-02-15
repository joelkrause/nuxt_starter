import axios from "axios"
let dynamicRoutes = () => {
  const routes = axios
    .get("http://gatsbywordpressforms.local/wp-json/wp/v2/pages")
    .then(res => {
      return res.data.map(page => `/${page.slug}`)
    })
  console.log(routes)
  return routes
}

export default {
  siteName: 'Nuxt Test',
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  /* Page Transitions */
  pageTransition: {
    name: "default",
    mode: "out-in"
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  generate: {
    routes: dynamicRoutes
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    "~/plugins/pages.server.js",
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    'nuxt-lazy-load'
  ],
  styleResources: {
    scss: [
        'assets/styles/global.scss',
    ]
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
