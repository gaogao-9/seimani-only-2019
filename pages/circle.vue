<template>
  <Layout>
    <v-layout justify-center align-center row wrap :class="$style.cards">
      <v-flex xs12 sm11 lg9>
        <v-card>
          <v-layout justify-center align-center row wrap>
            <v-flex xs10>
              <v-card-title>
                <h2 class="headline" :class="$style.header">
                  サークル参加をする方へ
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
                なお、ご不明な点がございましたら、お気軽に主催メールアドレス宛にお問い合わせください。
              </v-card-text>
            </v-flex>
            <v-flex xs12 offset-xs1>
              <h3 class="title">
                イベント名
              </h3>
              <v-card-text>
                政剣マニフェスティアオンリー同人誌即売会<br>
                緊急交流イベント「漕ぎ出せ！ソクバイ海Ⅱ」<br>
                ～帰ってきちゃって、アイムソウリー！～
              </v-card-text>
            </v-flex>
            <v-flex xs12 offset-xs1>
              <h3 class="title">
                日程・会場
              </h3>
              <v-card-text>
                2019年9月22日（日曜日）<br>
                綿商会館 4階
              </v-card-text>
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
                サークル参加費用
              </h3>
              <v-card-text>
                1スペース 3500円<br>
                [含まれるもの]<br>
                ・長机半分（幅900mm*奥行600mm）<br>
                ・イス1脚<br>
                ・入場証2枚<br>
                ・パンフレット引換券1枚<br>
                ※追加イス 500円/1脚（追加は最大2脚まで）<br>
                ※追加入場証 500円/1枚（追加は最大1枚まで）<br>
                <br>
                ※複数スペース申込・合体申込可能<br>
                例）2スペース申込 7000円<br>
                [含まれるもの]<br>
                ・長机1つ分（幅1800mm*奥行600mm）<br>
                ・イス2脚<br>
                ・入場証4枚<br>
                ・パンフレット引換券2枚<br>
                ※追加イス 500円/1脚（追加は最大4脚まで）<br>
                ※追加入場証 500円/1枚（追加は最大2枚まで）<br>
                <br>
                ※参加費支払方法の詳細は、申込締切後にメールにてご連絡いたします。
              </v-card-text>
            </v-flex>
            <v-flex xs12 offset-xs1>
              <h3 class="title">
                申込締切
              </h3>
              <v-card-text>
                2019年7月15日（海の日・月曜日） 23:59まで<br>
                ※申込後のキャンセルはお受けできません。
              </v-card-text>
            </v-flex>
            <v-flex xs12 offset-xs1>
              <h3 class="title">
                参加申込方法
              </h3>
              <v-card-text>
                「オンライン申し込みフォーム」からお申し込み下さい。<br>
              </v-card-text>
            </v-flex>
            <v-flex xs12 offset-xs1>
              <h3 class="title">
                サークルカットについて
              </h3>
              <v-card-text>
                psd形式のテンプレートを用意しております。ご活用ください。<br>
                作成上の注意事項は、サークルカットのテンプレート内にある「カット作成の注意点」に記載しております。必ずお読みください。<br>
                ※アナログ原稿およびオフラインでのサークルカット受付は行いません。<br>
                <br>
                <a href="/assets/bin/cut_win.zip">
                  サークルカットテンプレート(ZIP形式)
                </a>
              </v-card-text>
            </v-flex>
            <v-flex xs12 offset-xs1>
              <h3 class="title">
                宅配便による搬入・搬出
              </h3>
              <v-card-text>
                ヤマト運輸の宅急便をご利用いただけます。<br>
                伝票の記載例など、注意点は後日改めてご案内します。
              </v-card-text>
            </v-flex>
            <v-flex xs12 offset-xs1>
              <h3 class="title">
                その他
              </h3>
              <v-card-text>
                ・イベント当日、戦挙管理委員（スタッフ）が頒布物の確認を行うことがあります。ご協力をお願いいたします。<br>
                ・頒布印刷物について、奥付または奥付に準ずる欄に著者名やサークル名の表記がない場合、頒布をお断りすることがあります。<br>
                ・申込フォームの「成人向け作品」欄にて「無」を選択されたサークル様は、形態を問わず成人向け作品の頒布および展示が禁止となります。変更がある場合は、事前に戦挙管理委員会までご連絡ください。<br>
                ・会場内電源の使用には、戦挙管理委員会に許可を得てください。無許可で使用を行なっていた場合、使用中止をお願いする場合がございます。<br>
                ・駐車場のご用意はできません。搬入・搬出時に車両を使用する場合は、事前に戦挙管理委員会までご相談ください。<br>
                ・飲食は可能ですが、会場を汚されないようにお願いいたします。<br>
                ・ゴミは所定の場所にお捨てください。また、ゴミの分別にご協力ください。<br>
                ・会場内非常口の前には荷物を置かないようにお願いいたします。<br>
                ・その他お困りの事や不明点がございましたら、最寄りの戦挙管理委員までお声がけください。
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
                  プライバシーポリシー
                </h2>
              </v-card-title>
            </v-flex>
            <v-flex xs12 offset-xs1>
              <v-card-text>
                戦挙管理委員会（以下「当会」といいます）は、個人情報の保護に関する法令等を遵守するとともに、本プライバシーポリシーを遵守します。<br>
                1. 個人情報の定義<br>
                &nbsp;&nbsp;個人情報とは、氏名、住所、生年月日、年齢、性別、電話番号、電子メールアドレス、IPアドレス、銀行口座番号のうち、1つあるいは2つ以上を組み合せることによって、特定の個人を識別できるものを指します。<br>
                2. 個人情報の取得<br>
                &nbsp;&nbsp;当会は、個人情報を、適正な手段により取得いたします。<br>
                3. 個人情報の利用目的<br>
                &nbsp;&nbsp;当会は、主催する即売会・イベント等において、個人情報を、以下の目的で利用し、ご本人の同意を頂いた範囲内においてのみ取り扱います。<br>
                (1) 即売会・イベント等の運営に必要な情報を処理するため<br>
                (2) 即売会・イベント等に関する重要事項を参加者に連絡するため<br>
                (3) 即売会・イベント等の運営上のトラブルを解決するため<br>
                4. 個人情報の第三者への提供<br>
                &nbsp;&nbsp;当会は、個人情報保護法その他の法令により認められる事由がある場合を除き、ご本人の同意なくして、第三者に提供・開示しません。<br>
                5. 個人情報の安全管理<br>
                &nbsp;&nbsp;当会は、個人情報を適切に管理し、個人情報の漏えい、滅失、毀損等に対する予防措置を講じます。<br>
                6. 個人情報の開示、訂正、苦情等<br>
                &nbsp;&nbsp;当会は、個人情報について、開示、訂正、苦情等について、ご本人からのお申出があった場合には、お申出頂いた方がご本人であることを確認の上、個人情報保護法の定めに従い、速やかに対応いたします。<br>
                7. プライバシーポリシーの変更<br>
                &nbsp;&nbsp;当会は、必要に応じて、本プライバシーポリシーの内容を改定することがあります。その場合、変更箇所を速やかに公表するものとします。<br>
                8. お問い合わせ窓口<br>
                &nbsp;&nbsp;戦挙管理委員会&nbsp;seimani.only[at]gmail.com
              </v-card-text>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
      <v-flex xs12 sm11 lg9>
        <v-card>
          <v-layout justify-center align-center row wrap>
            <v-flex xs10>
              <v-card-text>
                <v-checkbox block ripple label="以上の内容を熟読しました。" disabled />
                <v-btn color="success" disabled block round ripple large target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSdQvAO4IzVp-1LDVgHnNdN4QvNNy5ezFmjWN8naOYua0PWh2Q/viewform">
                  サークル参加する
                </v-btn>
              </v-card-text>
              <v-card-text>
                参加受付を終了しました。
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
  components: {
    Layout,
  },
  data () {
    return {
      isRead: false,
    };
  },
  head: {
    title: "サークル参加",
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
