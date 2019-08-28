<template>
  <Layout>
    <v-layout justify-center align-center row wrap :class="$style.cards">
      <v-flex xs12 sm11 lg9>
        <v-card>
          <v-layout justify-center align-center row wrap>
            <v-flex xs10>
              <v-card-title>
                <h2 class="headline" :class="$style.header">
                  諸注意
                </h2>
              </v-card-title>
            </v-flex>
            <v-flex xs12 offset-xs1>
              <h3 class="title">
                開催当日のスケジュール（予定）
              </h3>
              <v-card-text>
                08:45〜 会場設営<br>
                10:00〜 サークル入場開始、更衣室開放<br>
                11:30 【即売会開始】更衣室一時閉鎖<br>
                14:00 【即売会終了】宅急便受付開始<br>
                15:00 【アフターイベント開始】更衣室再開放<br>
                16:00 【アフターイベント終了】<br>
                〜17:00 会場撤収、更衣室閉鎖<br>
                <br>
                ※スケジュールは変更になることがあります
              </v-card-text>
            </v-flex>
            <v-flex xs12 offset-xs1>
              <h3 class="title">
                参加費
              </h3>
              <v-card-text>
                即売会参加 500円（入場特典アイテム兼入場証をお渡しいたします）<br>
                ※今回のアフターイベント参加費は不要です。参加自由ですのでお気軽にご参加ください。
              </v-card-text>
            </v-flex>
            <v-flex xs12 offset-xs1>
              <h3 class="title">
                再入場方法
              </h3>
              <v-card-text>
                イベント時間中は入場証を、戦挙管理委員（スタッフ）にお見せください。
              </v-card-text>
            </v-flex>
            <v-flex xs12 offset-xs1>
              <h3 class="title">
                迷惑行為、危険行為の禁止
              </h3>
              <v-card-text>
                ・会場内外で走る、受付より外の会場外共用部に長時間立ち止まるなどはおやめください。<br>
                ・会場は禁煙、禁酒です。喫煙は指定された喫煙スペース(1階の荷捌き室)にてお願いします。<br>
                ・会場内や会場周辺での勧誘行為、パフォーマンスなどの混乱が予想される行為は禁止です。<br>
                ・モデルガン・エアガンなどの武器類、楽器などの大きな音の鳴る物、引火物、アルコール、ペット、その他危険と思われるものの持ち込みは禁止です。
              </v-card-text>
            </v-flex>
            <v-flex xs12 offset-xs1>
              <h3 class="title">
                会場内撮影について
              </h3>
              <v-card-text>
                ・会場内での動画撮影は一切禁止です。<br>
                ・会場内での写真撮影はサークルスペースや展示物、コスプレ撮影に限り可能です。ただし、人物が写り込まないようにご注意の上、もし写り込んでしまったものをSNS等にアップロードする場合は、必ず加工を施し個人の特定ができないようにしてください。<br>
                ・サークルスペース撮影やコスプレ撮影の際、また撮影したものをSNSにアップロードする際にも必ずサークルや被写体コスプレイヤーに許可を得てください。<br>
                ・コスプレ撮影を行う場合はサークルスペースが写り込まないようにご注意ください。
              </v-card-text>
            </v-flex>
            <v-flex xs12 offset-xs1>
              <h3 class="title">
                会場利用規約厳守のお願い
              </h3>
              <v-card-text>
                ・共用部のコンセントの使用は禁止です。<br>
                ・荷物は受付より外の共用部には絶対に置かないでください。<br>
                ・ゴミは所定の場所にお捨てください。また、ゴミの分別にご協力ください。<br>
                ・会場内非常口の前に荷物を置かないようにお願いいたします。
              </v-card-text>
            </v-flex>
            <v-flex xs12 offset-xs1>
              <h3 class="title">
                落とし物について
              </h3>
              <v-card-text>
                ・落とし物・忘れ物などは本部までお届けください。<br>
                ・金銭・貴重品の紛失につきましては当イベント主催者では責任を負いかねますので、管理にご注意ください。
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
                即売会を皆様に楽しんでいただくため、ご協力お願い致します。<br>
                会場内で頒布行為をしたい方は是非ともサークル参加を！<br>
                <br>
                <h4 class="subheading font-weight-bold">
                  ＊設営・撤収作業への協力のお願い＊
                </h4>
                <br>
                今回、会場内設営と撤収の作業をお手伝いいただける総理を募集いたします。<br>
                事前の連絡は不要です。<br>
                当日のスムーズなイベント開催のためにも、総理の皆さんのご協力をお願い致します。<br>
                作業内容：<br>
                &nbsp;&nbsp;机・椅子・ホワイトボードなどの展開、片付け、整列<br>
                作業時間：<br>
                &nbsp;&nbsp;設営&nbsp;8:45集合〜9:45終了（予定）<br>
                &nbsp;&nbsp;撤収&nbsp;16:00開始〜17:00解散（予定）<br>
                必要な道具：<br>
                &nbsp;&nbsp;特になし（手荒れや怪我が心配な方は、軍手などをご用意ください）<br>
                その他：<br>
                &nbsp;&nbsp;設営作業の集合時間は【8:45】、集合場所は【4階】です。<br>
                &nbsp;&nbsp;作業時は、現場の戦挙管理委員の指示に従ってください。
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
    title: "参加者全般",
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
