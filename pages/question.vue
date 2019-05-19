<template>
  <Layout>
    <v-layout align-center row wrap :class="$style.cards">
      <v-flex v-for="({subtitle, list}, questionIndex) in qa" :key="questionIndex" xs12 sm10 offset-sm1 md12 offset-md0>
        <v-card>
          <v-layout justify-center align-center wrap>
            <v-flex xs12>
              <v-card-title class="display-1">
                {{ subtitle }}
              </v-card-title>
              <v-card-text>
                <div v-for="(talkBlock, talkBlockIndex) in list" :key="talkBlockIndex">
                  <Talk v-for="({chara, icon, text}, talkIndex) in talkBlock"
                        :key="talkIndex"
                        :chara="chara"
                        :emotion="icon">
                    <span v-html="text" />
                  </Talk>
                </div>
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
import Talk from "@/components/Talk";

export default {
  head: {
    title: "会場情報",
  },
  components: {
    Layout,
    Talk,
  },
  data() {
    return {

      qa: [
        {
          subtitle: "マクシーンの　おしえて！マージョリー先生",
          list: [
            [
              {
                chara: "maxine",
                icon: "smile",
                text: "マージョリー先生！1年ぶりに帰ってきました！",
              },
              {
                chara: "marjorie",
                icon: "default",
                text: "2019年9月22日に開催される、2回目のオンリーイベントね。",
              },
              {
                chara: "maxine",
                icon: "smile2",
                text: "前回はマージョリー先生に色々教わったおかげでとっても楽しめましたが、今回は変更点が多いって総理が言ってました。",
              },
              {
                chara: "marjorie",
                icon: "thinking",
                text: "そうなのよ。特に、会場が前回とは違う場所だから、そのあたりも中心に教えていくわ。総理もマクシーンと一緒に、確認していくわよ。",
              },
            ],
          ],
        },
        {
          subtitle: "イベントについて",
          list: [
            [
              {
                chara: "maxine",
                icon: "smile",
                text: "政マニオンリーにもイベント名が付いたんですね。",
              },
              {
                chara: "marjorie",
                icon: "smile",
                text: "そうなの。確かに1年前の今頃は「政マニオンリー」って<a target=\"_blank\" href=\"https://only2018.festia.moe/question/#qa-1-0\">呼んでたわね。</a>",
              },
              {
                chara: "maxine",
                icon: "sad",
                text: "その当時は正式なイベント名がありませんでしたね……。",
              },
              {
                chara: "marjorie",
                icon: "default",
                text: "今回の正式なイベント名は『政剣マニフェスティアオンリー同人誌即売会　緊急交流イベント　漕ぎ出せ！ソクバイ海Ⅱ　〜帰ってきちゃって、アイムソウリー！〜』。……前回のものを捩ってるのね。",
              },
              {
                chara: "maxine",
                icon: "panic",
                text: "は、はわ……正式名称が60文字以上ある……。呼ぶのも書くのも大変……。",
              },
              {
                chara: "marjorie",
                icon: "thinking",
                text: "だから略称は『アイムソウリー』よ。以下、全てアイムソウリー呼びでいくわ。",
              },
              {
                chara: "maxine",
                icon: "sad",
                text: "『アイムソウリー』ですか……『アイムソーリー』と間違えそう。",
              },
              {
                chara: "marjorie",
                icon: "smile",
                text: "イベントに集まるのが『総理（ソウリ）』だから『アイムソウリー』、で覚えてほしいわね。",
              },
            ],
            [
              {
                chara: "maxine",
                icon: "default",
                text: "『アイムソウリー』って、どんなイベントですか？",
              },
              {
                chara: "marjorie",
                icon: "smile2",
                text: "DMM GAMES様で配信中のオンラインゲーム「政剣マニフェスティア」のファンイベントね。",
              },
            ],
            [
              {
                chara: "maxine",
                icon: "default",
                text: "公式のイベントなのでしょうか？",
              },
              {
                chara: "marjorie",
                icon: "thinking",
                text: "非公式よ。実在の人物、団体とは関係ないわ。ホントに一切関係ないから。",
              },
            ],
            [
              {
                chara: "maxine",
                icon: "sad",
                text: "サークル参加しない総理も、参加費はかかりますか？",
              },
              {
                chara: "marjorie",
                icon: "sad",
                text: "少しだけ、参加費を頂く予定だと主催が言っていたわ。参加する総理には、入場チケット代わりのアイテムを用意する予定、とも。",
              },
            ],
            [
              {
                chara: "maxine",
                icon: "smile",
                text: "当日のタイムテーブルはどうなりますか？",
              },
              {
                chara: "marjorie",
                icon: "default",
                text: "「参加者全般」に掲載されているからそこを見るといいわ。",
              },
            ],
            [
              {
                chara: "maxine",
                icon: "smile",
                text: "写真撮影や動画撮影はできますか？",
              },
              {
                chara: "marjorie",
                icon: "smile",
                text: "写真撮影は可能よ。ただし、必ず被写体の方の許可を得た上で撮影を行うこと。ウェブやSNSへの投稿も、必ず被写体の方から許可を得てから投稿するように。",
              },
              {
                chara: "marjorie",
                icon: "thinking",
                text: "動画撮影は禁止。動画撮影なんてしてたら、燃やすからね。",
              },
            ],
            [
              {
                chara: "maxine",
                icon: "panic",
                text: "はわっ！　いい写真が撮れたから記念にイ●スタに上げたい！　けど、背景に他の人が写り込んじゃってる……",
              },
              {
                chara: "marjorie",
                icon: "thinking",
                text: "周囲が写り込んでしまった場合、モザイクやぼかしなどの画像処理を施すとか、被写体の方と同様に許可を得るとか、十分な配慮をお願いするわ",
              },
            ],
          ],
        },
        {
          subtitle: "会場について",
          list: [
            [
              {
                chara: "maxine",
                icon: "smile",
                text: "前回と会場が違うんですよね？",
              },
              {
                chara: "marjorie",
                icon: "default",
                text: "そうね。今回は会場が東京都内、綿商会館の4階ね。中央区の日本橋富沢町にあるわ。",
              },
              {
                chara: "maxine",
                icon: "sad",
                text: "地名がピンとこないのですが、どのあたりでしょう？",
              },
              {
                chara: "marjorie",
                icon: "smile2",
                text: "今回の会場は、日比谷線・浅草線の人形町駅や、都営新宿線の馬喰横山駅が近いのかしら。",
              },
              {
                chara: "maxine",
                icon: "smile",
                text: "新宿線……あ、神保町にも九段下にも電車一本で行けちゃいますね。",
              },
              {
                chara: "marjorie",
                icon: "smile",
                text: "マクシーン、そんなところに何か用でも？",
              },
              {
                chara: "maxine",
                icon: "panic",
                text: "……いえ、特にはないのですが。",
              },
            ],
            [
              {
                chara: "maxine",
                icon: "sad",
                text: "和室は今回あるのでしょうか？",
              },
              {
                chara: "marjorie",
                icon: "sad2",
                text: "今回、使える和室はないわ。",
              },
              {
                chara: "maxine",
                icon: "sad2",
                text: "密会の間がないのは残念かも。",
              },
              {
                chara: "marjorie",
                icon: "smile",
                text: "ただ、休憩スペースの用意はあるらしいから、疲れたらそこを使うといいみたい。",
              },
            ],
            [
              {
                chara: "maxine",
                icon: "sad",
                text: "前回はゴミを持ち帰るのがちょっと大変だったんですが……。",
              },
              {
                chara: "marjorie",
                icon: "smile2",
                text: "今回は会場にゴミ箱があるから、そこに捨てるだけでOKよ。",
              },
              {
                chara: "maxine",
                icon: "smile2",
                text: "はわっ！それはいいですね！",
              },
              {
                chara: "marjorie",
                icon: "thinking",
                text: "もちろん分別はしなきゃいけないから、書いてある通りに捨ててね。",
              },
              {
                chara: "maxine",
                icon: "smile",
                text: "もちろんです！",
              },
              {
                chara: "marjorie",
                icon: "default",
                text: "それと、段ボールのゴミがあったら、本部にまとめて出してね。",
              },
              {
                chara: "maxine",
                icon: "smile2",
                text: "わかりました！",
              },
            ],
            [
              {
                chara: "maxine",
                icon: "smile",
                text: "車での来場は可能ですか？",
              },
              {
                chara: "marjorie",
                icon: "sad",
                text: "特別な理由がない場合、自家用車は使わず、公共の交通機関を使うようにお願いしたいわね。会場に来場者用の駐車場はないから。<br>万が一、車で来ざるを得ない場合、近隣の有料駐車場を使うようにして。",
              },
            ],
            [
              {
                chara: "maxine",
                icon: "smile",
                text: "会場内で飲食は可能ですか？",
              },
              {
                chara: "marjorie",
                icon: "smile2",
                text: "できるわ。もちろん会場を汚さないように、ゴミもちゃんと捨てて。なんでも燃やせばいいってわけじゃないからね。",
              },
            ],
            [
              {
                chara: "maxine",
                icon: "default",
                text: "喫煙は可能ですか？",
              },
              {
                chara: "marjorie",
                icon: "thinking",
                text: "喫煙所は1階の給湯室に用意しているから、そこを使って欲しいわね。喫煙所を除いた建物内と周辺道路は禁煙になっているから気をつけて。",
              },
            ],
            [
              {
                chara: "maxine",
                icon: "smile",
                text: "コスプレ参加は可能ですか？",
              },
              {
                chara: "marjorie",
                icon: "smile2",
                text: "できるわ。今回こそマクシーンもコスプレするの？",
              },
              {
                chara: "maxine",
                icon: "panic",
                text: "はわわっ！　制服とかちょっといいかなって思ってたりは……しますけど……",
              },
            ],
          ],
        },
        {
          subtitle: "サークル参加について",
          list: [
            [
              {
                chara: "maxine",
                icon: "sad",
                text: "サークル参加費はいくらですか？",
              },
              {
                chara: "marjorie",
                icon: "default",
                text: "1スペース3500円よ。詳しくは、サークル参加案内をしっかりと読むこと。",
              },
            ],
            [
              {
                chara: "maxine",
                icon: "sad2",
                text: "宅配搬入は可能ですか？",
              },
              {
                chara: "marjorie",
                icon: "thinking",
                text: "可能よ。後日、サークル参加を申し込んだ総理の元に詳細な連絡が行くことになっているから、それを待つように。",
              },
            ],
            [
              {
                chara: "maxine",
                icon: "sad",
                text: "頒布したいものがたくさんある総理は、どういう搬入ルートになるのか不安ですね……",
              },
              {
                chara: "marjorie",
                icon: "default",
                text: "申込時に申告があった頒布予定量に合わせて、対応してくれるらしい。大量に頒布予定の総理には、申込後に個別に連絡が行くわ。主催からは、ご協力のほど、よろしくお願いいたします、とのことよ。",
              },
            ],
            [
              {
                chara: "maxine",
                icon: "smile",
                text: "食べ物の頒布は可能ですか？",
              },
              {
                chara: "marjorie",
                icon: "default",
                text: "製造元がはっきりとしている市販品は頒布可能よ。個包装されていないものや、手作りのものは頒布不可。気をつけて。",
              },
            ],
          ],
        },
        {
          subtitle: "このQ&Aについて",
          list: [
            [
              {
                chara: "maxine",
                icon: "smile2",
                text: "マージョリー先生、さすが、物知りですね！",
              },
              {
                chara: "marjorie",
                icon: "default",
                text: "そんなことはないわ。偶然知っていただけ。",
              },
              {
                chara: "maxine",
                icon: "panic",
                text: "ただ、私、まだ疑問があって解決できないのですが……",
              },
              {
                chara: "marjorie",
                icon: "smile2",
                text: "そればかりは、私にはどうにもならないから、戦挙管理委員会にメール(seimani.only[at]gmail.com)か<a target=\"_blank\" href=\"https://twitter.com/seimani_only\">Twitter</a>で連絡を取るといいわ。できる限りで答えてくれるはずよ。<br>このQ&Aも随時更新予定という話だから、チェックしておいて。",
              },
            ],
          ],
        },
      ],
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
