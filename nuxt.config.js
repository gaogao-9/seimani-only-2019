const VuetifyLoaderPlugin = require("vuetify-loader/lib/plugin");

const shared = {
  title: "政剣マニフェスティアオンリー同人誌即売会 緊急交流イベント 漕ぎ出せ！ソクバイ海Ⅱ 〜帰ってきちゃって、アイムソウリー！ 公式サイト",
  description: "政剣マニフェスティアオンリー同人誌即売会 緊急交流イベント 漕ぎ出せ！ソクバイ海Ⅱ 〜帰ってきちゃって、アイムソウリー！の公式サイトです",
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
      const title = "政剣マニフェスティアオンリー同人誌即売会 緊急交流イベント 漕ぎ出せ！ソクバイ海Ⅱ 〜帰ってきちゃって、アイムソウリー！ 公式サイト";
      return (subTitle) ? `${subTitle} | ${title}` : title;
    },
    htmlAttrs: {
      lang: "ja"
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
        href: "https://fonts.googleapis.com/css?family=Montserrat:400,700",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Noto+Sans+JP:400,700",
      },
      {
        rel: "preload",
        href: "/assets/img/top.png",
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
    "~/assets/style/base.css",
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
        "postcss-for": {},
        "postcss-functions": {
          functions: {
            round: (num, pre=0) => (+num).toFixed(pre),
            join: (...args) => args.join(""),
          }
        },
        "postcss-nested": {},
        "postcss-css-variables": {},
        "postcss-calc": { selectors: true },
      },
    },
  },
  workbox: {
    dev: false,
  },
};
