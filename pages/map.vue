<template>
  <Layout>
    <v-layout justify-center align-center row wrap :class="$style.cards">
      <v-flex xs12 sm11 lg9>
        <v-card>
          <v-layout justify-center align-center wrap>
            <v-flex xs12>
              <v-card-title class="display-1">
                会場情報
              </v-card-title>
            </v-flex>
            <v-flex xs12 md7 lg8 xl8 justify-center align-center>
              <v-card-text>
                <iframe :class="$style.map" frameborder="0" src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ72ldClKJGGARtnxJr7Xybg4&zoom=17&key=AIzaSyAAaCUU3jjAQggZTpe8AE_6DQxQ6TP8cLA" allowfullscreen style="border:0" />
              </v-card-text>
            </v-flex>
            <v-flex xs12 md5 lg4 xl3>
              <v-card-text>
                <h2 class="headline">
                  交通手段
                </h2>
                <div><v-icon>pin_drop</v-icon>会場: 綿商会館 4階＆1階</div>
                <div><v-icon>watch</v-icon>日程: 2019年9月22日(日)</div>
                <br>
                <div><v-icon>train</v-icon>都営新宿線 馬喰横山駅 徒歩6分</div>
                <div><v-icon>train</v-icon>都営浅草線 東日本橋駅 徒歩6分</div>
                <div><v-icon>train</v-icon>東京メトロ日比谷線 人形町駅 徒歩6分</div>
                <div><v-icon>train</v-icon>JR総武線 馬喰町駅 徒歩9分</div>
                <br>
                公式サイトによる案内は<a href="http://www.mensyou.co.jp/map.htm" target="_blank">こちら</a>
              </v-card-text>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
      <v-flex xs12 sm11 lg9>
        <v-card>
          <v-layout justify-center align-center row wrap>
            <v-flex xs10>
              <v-card-title>
                <h2 class="headline" :class="$style.header">
                  駅が多すぎてよく分からない人へ
                </h2>
              </v-card-title>
            </v-flex>
            <v-flex xs12>
              <v-card-text>
                <v-list two-line>
                  <v-list-tile>
                    <v-list-tile-content>
                      <v-list-tile-title>新宿/多摩方面の人</v-list-tile-title>
                      <v-list-tile-sub-title>⇒都営新宿線がおすすめです。</v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-divider />
                  <v-list-tile>
                    <v-list-tile-content>
                      <v-list-tile-title>品川/横浜方面の人</v-list-tile-title>
                      <v-list-tile-sub-title>⇒京急線(浅草線直通)がおすすめです。</v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-divider />
                  <v-list-tile>
                    <v-list-tile-content>
                      <v-list-tile-title>上野/赤羽/北千住方面の人</v-list-tile-title>
                      <v-list-tile-sub-title>⇒日比谷線がおすすめです。</v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-divider />
                  <v-list-tile>
                    <v-list-tile-content>
                      <v-list-tile-title>千葉方面の人</v-list-tile-title>
                      <v-list-tile-sub-title>⇒総武線がおすすめです。</v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
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
                  会場MAP
                </h2>
              </v-card-title>
            </v-flex>
            <v-flex xs12 sm11 md9 lg5>
              <h3 class="title" />
              <v-card-text>
                <v-hover>
                  <v-card slot-scope="{ hover }" flat nuxt href="/assets/img/map/layout_4f.jpg" target="_blank" :elevation="hover ? 5 : 0">
                    <v-img
                      src="/assets/img/map/layout_4f.jpg"
                      :aspect-ratio="1024/768"
                      min-width="290"
                      contain
                      class="grey lighten-2" />
                  </v-card>
                </v-hover>
              </v-card-text>
            </v-flex>
            <v-flex xs12 sm11 md9 lg5>
              <h3 class="title" />
              <v-card-text>
                <v-hover>
                  <v-card slot-scope="{ hover }" flat nuxt href="/assets/img/map/layout_1f.jpg" target="_blank" :elevation="hover ? 5 : 0">
                    <v-img
                      src="/assets/img/map/layout_1f.jpg"
                      :aspect-ratio="1024/768"
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
    title: "会場情報",
  },
  components: {
    Layout,
  },
};
</script>

<style module>
.cards {
  & > * {
  padding: 10px 0;
  }
}

.map {
  width: 100%;
  height: 400px;

  @media screen and (min-width:960px) {
    & {
      height: 500px;
    }
  }
}

.header {
  margin: 0 auto;
}
</style>
