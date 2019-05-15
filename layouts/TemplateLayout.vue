<template>
  <v-app :dark="isDark" :class="[$style.app]">
    <v-toolbar color="secondary" :class="$style.header" app clipped-right :flat="isDark" height="40">
      <v-toolbar-title>
        <nuxt-link :to="this.$route.name === `index` ? `/` : `/top/`" :class="$style.headerLink">
          政剣マニフェスティアオンリー同人誌即売会 緊急交流イベント
        </nuxt-link>
      </v-toolbar-title>
      <v-spacer />
      <v-toolbar-side-icon :class="$style.headerButton" @click="drawer = !drawer" />
    </v-toolbar>
    <v-navigation-drawer v-model="drawer"
                         :class="$style.navigation"
                         disable-resize-watcher
                         mobile-break-point="800"
                         fixed
                         right
                         clipped
                         floating
                         app>
      <v-list>
        <v-list-tile v-for="(item, i) in items" :key="i" v-ripple :class="$style.navigationListItem" :to="item.to" nuxt router exact>
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-content :class="$style.content" fluid>
      <slot />
    </v-content>
    <v-footer :class="$style.footer" color="secondary" height="40" app absolute>
      <Footer>
        <span>政剣マニフェスティアオンリーイベント</span>
        &nbsp;
        <span>選挙管理委員会</span>
      </Footer>
    </v-footer>
  </v-app>
</template>

<script>
import Footer from "@/components/footer";

export default {
  components: {
    Footer,
  },
  props: {
    theme: {
      type: String,
      validate: (s) => ["light", "dark"].includes(s),
      default: "light",
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
          icon: "directions",
          title: "会場情報",
          to: "/map/",
        },
        {
          icon: "face",
          title: "参加者全般",
          to: "/common/",
        },
        {
          icon: "account_circle",
          title: "サークル参加",
          to: "/circle/",
        },
        {
          icon: "category",
          title: "コスプレ参加",
          to: "/cosplay/",
        },
        {
          icon: "supervised_user_circle",
          title: "スタッフ一覧",
          to: "/staff/",
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
:global(.page) {
  &-enter-active, &-leave-active {
    max-height: 100vh;
    overflow: hidden;
    transition: opacity 0.4s ease,
      transform 0.4s cubic-bezier(0.50, -2.5, 0.5, 2.5);

    .navigation {
      display: none !important;
    }
  }

  &-enter-active {
    transform-origin: center top;

    .footer {
      transition: opacity 0.4s 0.4s ease;
    }
  }

  &-leave-active {
    transform-origin: center bottom;

    .footer {
      opacity: 0;
      transition: none !important;
    }
  }

  &-enter {
    opacity: 0;
    transform: translate(0) scale(0.9);

    .footer {
      opacity: 0;
    }
  }

  &-leave-to {
    opacity: 0;
    transform: translate(0, 0) scale(0.9);
  }
}

.header {
  .headerLink, .headerButton {
    color: #ffffff !important;
  }
}

.headerLink {
  color: inherit;
  text-decoration: inherit;
}

.navigation {
  background-color: #4b7dac !important;
  box-shadow: 2px 6px 6px 0px rgba(0, 0, 0, 0.28);

  & .navigationListItem * {
    color: #ffffff;
  }
}

.content {
  background-image: linear-gradient(transparent 80%,hsla(0,0%,100%,.3) 0,hsla(0,0%,100%,.3)),linear-gradient(90deg,transparent 80%,hsla(0,0%,100%,.3) 0,hsla(0,0%,100%,.3));
  background-repeat: repeat;
  background-size: 40px 40px;
  background-color: #8095bf;
}

.footer {
  z-index: 114514;
}
</style>
