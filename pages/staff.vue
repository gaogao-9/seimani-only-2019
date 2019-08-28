<template>
  <Layout>
    <v-layout justify-center align-center fill-height :class="$style.cards">
      <v-flex xs12 sm10 md8 lg6>
        <v-card>
          <v-layout justify-center align-center row wrap>
            <v-flex xs10>
              <v-card-title>
                <h2 class="headline" :class="$style.header">
                  スタッフ一覧
                </h2>
              </v-card-title>
            </v-flex>
            <v-card-text>
              <h3 class="title mb-2">
                主催メンバー
              </h3>
              <v-layout row wrap>
                <v-flex v-for="{ id } in staff.core" :key="id" xs3 d-flex>
                  <v-hover>
                    <v-card slot-scope="{ hover }" flat nuxt :href="`https://twitter.com/${id}`" target="_blank" :elevation="hover ? 5 : 0">
                      <v-img
                        :src="`/assets/img/staff/${id}.jpg`"
                        aspect-ratio="1"
                        class="grey lighten-2">
                        <v-layout
                          slot="placeholder"
                          fill-height
                          align-center
                          justify-center
                          ma-0>
                          <v-progress-circular indeterminate color="grey lighten-5" />
                        </v-layout>
                      </v-img>
                    </v-card>
                  </v-hover>
                </v-flex>
              </v-layout>
            </v-card-text>
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
    title: "スタッフ一覧",
  },
  components: {
    Layout,
  },
  data () {
    return {
      staff: {
        core: [
          {
            id: "gaogao_9",
            name: "がお",
          },
          {
            id: "nyan_nyee",
            name: "にゃんにー",
          },
          {
            id: "mimeino",
            name: "あけ",
          },
          {
            id: "non_affleck",
            name: "のんアフ",
          },
        ],
      },
    };
  },
};
</script>

<style module>
.cards {
  & > * {
  padding: 10px 0;
  }
}

.header {
  margin: 0 auto;
}
</style>
