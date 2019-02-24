<template>
  <v-app :dark="isDark" :class="[$style.app]">
    <v-toolbar app clipped-right :flat="isDark" height="40">
      <v-toolbar-title>
        <nuxt-link :to="this.$route.name === `index` ? `/` : `/top/`" :class="$style.headerLink">
          政剣マニフェスティアオンリーイベント 2019
        </nuxt-link>
      </v-toolbar-title>
      <v-spacer />
      <v-toolbar-side-icon @click="drawer = !drawer" />
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" mobile-break-point="800" fixed right clipped :floating="isDark" app>
      <v-list>
        <v-list-tile v-for="(item, i) in items" :key="i" v-ripple :to="item.to" router exact>
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-content fluid>
      <slot />
    </v-content>
    <v-footer height="40" app absolute>
      <v-layout justify-center align-center row wrap :class="$style.contentWrapper">
        <span>政剣マニフェスティアオンリーイベント</span>
        &nbsp;
        <span>選挙管理委員会</span>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  props: {
    theme: {
      type: String,
      validate: (s) => ["light", "dark"].includes(s),
      default: "dark",
    },
  },
  data() {
    return {
      drawer: false,
      items: [
        {
          icon: "home",
          title: "トップページ",
          to: this.$route.name === "index" ? "/" : "/top/",
        },
        {
          icon: "supervised_user_circle",
          title: "スタッフ一覧",
          to: "/staff",
        },
      ],
    };
  },
  computed: {
    isDark() {
      return this.theme === "dark";
    },
  },
};
</script>

<style module>
.app {
  transition: background 0.3s;
}

.headerLink {
  color: inherit;
  text-decoration: inherit;
}
</style>
