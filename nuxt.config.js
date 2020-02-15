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
  titleTemplate: '%s - Nuxt Starter',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },

    // hid is used as unique identifier. Do not use `vmid` for it as it will not work
    { hid: 'description', name: 'description', content: 'Meta description' }
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
