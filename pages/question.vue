<template>
  <Layout>
    <v-layout align-center row wrap :class="$style.cards">
      <v-flex xs12 sm10 offset-sm1 md12 offset-md0>
        <v-card>
          <v-layout justify-center align-center wrap>
            <v-flex xs12>
              <v-card-title class="display-1">
                Q&amp;A
              </v-card-title>
            </v-flex>
            <v-flex xs12 md6 offset-md0 justify-center align-center>
              <v-card-text>
                <iframe :class="$style.map" frameborder="0" src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ72ldClKJGGARtnxJr7Xybg4&zoom=17&key=AIzaSyAAaCUU3jjAQggZTpe8AE_6DQxQ6TP8cLA" allowfullscreen style="border:0" />
              </v-card-text>
            </v-flex>
            <v-flex xs10 sm8 md5 offset-xs1 offset-sm2 offset-md1>
              <h2 class="headline">
                交通手段
              </h2>
              <v-card-text>
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
      <v-flex xs12 sm10 offset-sm1 md12 offset-md0>
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
  </Layout>
</template>

<script>
import Layout from "@/layouts/TopLayout";

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
