const VuetifyLoaderPlugin = require("vuetify-loader/lib/plugin");

const shared = {
  title: "政剣マニフェスティアオンリーイベント 2019 公式サイト",
  description: "政剣マニフェスティアオンリーイベント 2019の公式サイトです",
  image: "ogp_icon.jpg",
  favicon: "favicon.ico",
  origin: (process.env.NODE_ENV === "develop") ? `http://localhost${(process.env.PORT ? `:${process.env.PORT}` : "3000")}/` : "https://festia.moe/",
};

module.exports = {
  mode: "spa",

  /*
  ** Headers of the page
  */
  head: {
    title: "",
    titleTemplate(subTitle) {
      const title = "政剣マニフェスティアオンリーイベント 2019 公式サイト";
      return (subTitle) ? `${subTitle} - ${title}` : title;
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "google", content: "notranslate" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "ja_JP" },
      { property: "og:title", content: shared.title },
      { property: "og:site_name", content: shared.title },
      { property: "og:url", content: shared.origin },
      { property: "og:description", content: shared.description },
      { property: "og:image", content: `${shared.origin}${shared.image}` },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: shared.title },
      { name: "twitter:image", content: `${shared.origin}${shared.image}` },
      { name: "twitter:description", content: shared.description },
      { hid: "description", name: "description", content: shared.description },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons",
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Noto+Sans+JP&text=%E3%81%82%E3%81%AE%E6%84%9F%E5%8B%95%E3%82%92%E3%82%82%E3%81%86%E4%B8%80%E5%BA%A6",
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c:700&text=%E6%94%BF%E5%89%A3%E3%83%9E%E3%83%8B%E3%83%95%E3%82%A7%E3%82%B9%E3%83%86%E3%82%A3%E3%82%A2%E3%82%AA%E3%83%B3%E3%83%AA%E3%83%BC%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88%202019",
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Noto+Sans+JP:700&text=%E9%96%8B%E5%82%AC%E6%B1%BA%E5%AE%9A%EF%BC%81",
      },
      {
        rel: "preload",
        href:
          "/assets/img/flyer_bg.jpg",
        as: "image",
      },
      {
        rel: "preload",
        href:
          "/assets/img/flyer_c0.png",
        as: "image",
      },
    ],
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: "#fff" },

  /*
  ** Global CSS
  */
  css: [
    "~/assets/style/app.styl",
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    "@/plugins/vuetify",
    "@/plugins/pe",
    { src: "@/plugins/vuePersistedstate", ssr: false },
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    transpile: ["vuetify/lib"],
    plugins: [new VuetifyLoaderPlugin()],
    loaders: {
      stylus: {
        import: ["~assets/style/variables.styl"],
      },
    },

    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/,
          options: {
            fix: true,
          },
        });
      }
    },

    postcss: {
      syntax: "postcss-scss",
      plugins: {
        "postcss-nested": {},
        "postcss-css-variables": {},
        "postcss-calc": {},
      },
    },
  },
};
