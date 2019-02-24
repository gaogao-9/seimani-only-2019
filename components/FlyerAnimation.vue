<template>
  <v-responsive v-if="start" :aspect-ratio="182 / 257" max-width="calc((100vh - 50px - 40px) * 182 / 257)">
    <template v-if="!isShow" style="width: 100%; height: 100%;" />
    <svg v-else width="182" height="257" viewBox="0 0 182 257" style="width: 100%; height: 100%;">
      <svg width="182" height="257" viewBox="0 0 182 257" style="width: 100%; height: 100%;">
        <image width="182" height="257" preserveAspectRatio="none" xlink:href="/assets/img/flyer_bg.jpg" />
        <g>
          <image v-for="(chara, index) in charas"
                 :key="index"
                 :x="chara.x"
                 :y="30+chara.y"
                 :width="chara.w"
                 :height="chara.h"
                 xlink:href="/assets/img/flyer_c0.png" />
        </g>
      </svg>
      <g
        stroke="#ffffff"
        stroke-width="0.2"
        fill="#005fd9"
        style="font-family: 'M PLUS Rounded 1c'"
        font-weight="700"
        font-size="10"
        text-anchor="middle"
        letter-spacing="2">
        <text x="91" y="180">
          政剣マニフェスティア
        </text>
        <text x="91" y="195">
          オンリーイベント 2019
        </text>
        <text x="91" y="230" letter-spacing="4" style="font-family: 'Noto Sans JP'" stroke-width="0.4" font-size="22" fill="#ff1919">
          開催決定！
        </text>
      </g>
      <rect x="0" y="0" width="182" height="257" fill="#ffffff">
        <animate begin="1"
                 dur="1"
                 attributeName="opacity"
                 from="1"
                 to="0"
                 fill="freeze"
                 repeatCount="1" />
      </rect>
    </svg>
  </v-responsive>
</template>

<script>
export default {
  props: {
    start: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      isShow: false,
      charas: [
        {
          x: 4.01225,
          y: -10,
          w: 53.9755,
          h: 211.28,
        },
        {
          x: 124.01225,
          y: -10,
          w: 53.9755,
          h: 211.28,
        },
        {
          x: 34.01225,
          y: 0,
          w: 53.9755,
          h: 211.28,
        },
        {
          x: 94.01225,
          y: 0,
          w: 53.9755,
          h: 211.28,
        },
        {
          x: 64.01225,
          y: 10,
          w: 53.9755,
          h: 211.28,
        },
      ],
    };
  },
  watch: {
    start() {
      this.tickIsShow();
    },
  },
  methods: {
    async tickIsShow() {
      await this.$pe.delay(100);

      this.isShow = true;
    },
  },
};
</script>
