<template>
  <Layout>
    <v-layout justify-center align-center row wrap :class="$style.cards">
      <v-flex xs12 sm11 lg9>
        <v-card>
          <v-layout justify-center align-center row wrap>
            <v-flex xs12>
              <v-card-title>
                <h2 class="headline" :class="$style.header">
                  サークルカット一覧
                </h2>
              </v-card-title>
            </v-flex>
            <v-flex xs12 lg11>
              <h3 class="title" />
              <v-card-text>
                <v-hover>
                  <v-card slot-scope="{ hover }" flat nuxt href="/assets/img/map/circlecut.png" target="_blank" :elevation="hover ? 5 : 0">
                    <v-img
                      src="/assets/img/map/circlecut.png"
                      :aspect-ratio="4962/1677"
                      min-width="290"
                      contain
                      class="grey lighten-2" />
                  </v-card>
                </v-hover>
              </v-card-text>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout justify-center align-center row wrap :class="$style.cards">
      <v-flex xs12 sm11 lg9>
        <v-card>
          <v-layout justify-center align-center row wrap>
            <v-flex xs12>
              <v-card-title>
                <h2 class="headline" :class="$style.header">
                  サークル配置図
                </h2>
              </v-card-title>
            </v-flex>
            <v-flex xs12 sm11 lg9>
              <h3 class="title" />
              <v-card-text>
                <v-hover>
                  <v-card slot-scope="{ hover }" flat nuxt href="/assets/img/map/circlemap.jpg" target="_blank" :elevation="hover ? 5 : 0">
                    <v-img
                      src="/assets/img/map/circlemap.jpg"
                      :aspect-ratio="5600/5680"
                      min-width="290"
                      contain
                      class="grey lighten-2" />
                  </v-card>
                </v-hover>
              </v-card-text>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </Layout>
</template>

<script>
import Layout from "@/layouts/DefaultLayout";

export default {
  head: {
    title: "サークル参加",
  },
  components: {
    Layout,
  },
  data () {
    return {
      isRead: false,
    };
  },
};
</script>

<style module>
.cards {
  & > * {
    padding: 10px 0;
    line-height: 1.8;
  }
}

.header {
  margin: 0 auto;
}
</style>
