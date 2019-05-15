<template>
  <Layout>
    <v-layout align-center row wrap :class="$style.cards">
      <v-flex xs12 sm10 offset-sm1 md12 offset-md0>
        <v-card>
          <v-layout justify-center align-center row wrap>
            <v-flex xs10>
              <v-card-title>
                <h2 class="headline" :class="$style.header">
                  コスプレ参加のやつ
                </h2>
              </v-card-title>
            </v-flex>
            <v-flex xs12 offset-xs1>
              <h3 class="title">
                はじめに
              </h3>
              <v-card-text>
                当イベントにて二次創作作品の頒布や展示を希望される総理には、サークル参加の事前申込をお願いしております。<br>
                下記の諸注意をお読みいただいた上で、所定の方法にてお申し込みください。<br>
                なお、ご不明な点がございましたら、お気軽にメールアドレス宛にお問い合わせください。
              </v-card-text>
            </v-flex>
            <v-flex xs12 offset-xs1>
              <h3 class="title">
                イベント名
              </h3>
              <v-card-text>
                政剣マニフェスティアオンリー同人誌即売会緊急交流イベント<br>
                漕ぎ出せ！ソクバイ海Ⅱ ～関係ないけど、アイムソウリー！～
              </v-card-text>
            </v-flex>
            <v-flex xs12 offset-xs1>
              <h3 class="title">
                日程・会場
              </h3>
              <v-card-text>
                2019年9月22日（日曜日）<br>
                綿商会館 4階＆1階
              </v-card-text>
            </v-flex>
            <v-flex xs12 offset-xs1>
              <h3 class="title">
                開催当日のスケジュール
              </h3>
              <v-card-text>
                <nuxt-link to="/common/">
                  参加者全般ページを参照
                </nuxt-link>
              </v-card-text>
            </v-flex>
            <v-flex xs12 offset-xs1>
              <h3 class="title">
                サークル参加資格
              </h3>
              <v-card-text>
                ☆「政剣マニフェスティア」の二次創作作品を1点以上頒布または展示できること<br>
                ☆ 開催当日までメールで《確実に》連絡可能であること<br>
                ☆ "戦挙権"を持っていること
              </v-card-text>
            </v-flex>
            <v-flex xs12 offset-xs1>
              <h3 class="title">
                申込締切
              </h3>
              <v-card-text>
                2018年7月20日 23:59まで<br>
                ※申込後のキャンセルはお受けできません。
              </v-card-text>
            </v-flex>
            <v-flex xs12 offset-xs1>
              <h3 class="title">
                その他
              </h3>
              <v-card-text>
                ・緊急の場合を除き、個人的な呼び出しはできません。<br>
                ・ケガをした方、気分の悪くなった方はスタッフまでお申し出ください。<br>
                ・飲食物の持ち込みは可能ですが、会場を汚されないよう十分ご注意ください。<br>
                ・コスプレまたはコスプレと判断されるような服装での入場・退場は禁止です。コスプレをされる場合、所定の更衣室でのお着替えをお願い致します。<br>
                ・会場外における事故・トラブルにつきましては当イベント主催者では保証できません。ご来場、ご帰宅の際はご注意ください。<br>
                <br>
                コスプレ諸注意は<nuxt-link to="/cosplay/">
                  コスプレ参加者向けのページ
                </nuxt-link>に掲載しております。<br>
                コスプレ参加予定の方はご一読ください。<br>
                <br>
                <h4 class="subheading font-weight-bold">
                  ※一般参加者の同人誌、同人グッズ、あるいはそれに準ずるものの頒布行為の禁止※
                </h4>

                <br>
                一般参加者の上記行為を全面的に禁止させていただきます。<br>
                一般参加者からサークル参加者への差し入れ等は良識の範囲内でお願い致します。<br>
                目に余る行為が見受けられた場合はご退場をお願いいただく場合もございます。<br>
                即売会を皆様に楽しんでいただくため、ご協力お願い致します。
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
    title: "コスプレ参加",
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
    line-height: 1.8;
  }
}

.header {
  margin: 0 auto;
}
</style>
