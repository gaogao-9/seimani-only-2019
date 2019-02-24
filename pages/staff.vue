<template>
  <Layout>
    <v-layout>
      <v-flex xs12 sm10 offset-sm1>
        <v-card>
          <v-container class="headline">
            主催メンバー
          </v-container>
          <v-container grid-list-sm fluid>
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
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </Layout>
</template>

<script>
import Layout from "@/layouts/DefaultLayout";

export default {
  head: {
    title: "スタッフ",
  },
  components: {
    Layout,
  },
  data() {
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
