<template>
  <v-responsive v-if="start" :aspect-ratio="182 / 257" max-width="calc((100vh - 50px - 40px) * 182 / 257)">
    <template v-if="state === 0" />
    <svg v-else-if="state <= 3" width="182" height="257" viewBox="0 0 182 257" style="width: 100%; height: 100%;">
      <Gear v-show="state === 1" y="37.5" width="182" height="182" :path="pathObject">
        <template slot="pathAnimations">
          <animate begin="0" dur="2" attributeName="stroke-dashoffset" to="0" fill="freeze" repeatCount="1" />
          <animateTransform begin="2.5" dur="2" attributeName="transform" type="rotate" values="1 10 10;3 10 10;" fill="freeze" repeatCount="1" calcMode="discrete" />
          <animateTransform begin="5"
                            dur="0.7"
                            attributeName="transform"
                            type="rotate"
                            values="5 10 10;8 10 10;14 10 10;"
                            fill="freeze"
                            repeatCount="1"
                            calcMode="discrete" />
          <animateTransform begin="5.7"
                            dur="1.3"
                            attributeName="transform"
                            type="rotate"
                            values="14 10 10;17 10 10;20 10 10;23 10 10;26 10 10;29 10 10;32 10 10;35 10 10;38 10 10;41 10 10;44 10 10;47 10 10;50 10 10;53 10 10;56 10 10;59 10 10;62 10 10;65 10 10;68 10 10;71 10 10;74 10 10;77 10 10;80 10 10;83 10 10;86 10 10;89 10 10;92 10 10;95 10 10;98 10 10;101 10 10;104 10 10;107 10 10;110 10 10;113 10 10;116 10 10;119 10 10;122 10 10;125 10 10;128 10 10;131 10 10;134 10 10;137 10 10;140 10 10;143 10 10;146 10 10;149 10 10;152 10 10;155 10 10;158 10 10;161 10 10;164 10 10;167 10 10;170 10 10;173 10 10;176 10 10;179 10 10;182 10 10;185 10 10;188 10 10;191 10 10;194 10 10;197 10 10;200 10 10;203 10 10;206 10 10;209 10 10;212 10 10;215 10 10;218 10 10;221 10 10;224 10 10;227 10 10;230 10 10;233 10 10;236 10 10;239 10 10;242 10 10;245 10 10;248 10 10;251 10 10;254 10 10;257 10 10;260 10 10;263 10 10;266 10 10;269 10 10;272 10 10;275 10 10;278 10 10;281 10 10;284 10 10;287 10 10;290 10 10;293 10 10;296 10 10;299 10 10;302 10 10;305 10 10;308 10 10;311 10 10;314 10 10;317 10 10;320 10 10;323 10 10;326 10 10;329 10 10;332 10 10;335 10 10;338 10 10;341 10 10;344 10 10;347 10 10;350 10 10;353 10 10;356 10 10;359 10 10"
                            repeatCount="1"
                            calcMode="discrete" />
          <animateTransform begin="7"
                            dur="0.3"
                            attributeName="transform"
                            type="rotate"
                            values="0 10 10;180 10 10;"
                            repeatCount="indefinite" />
          <animate begin="13"
                   dur="1.5"
                   attributeName="opacity"
                   to="0"
                   fill="freeze"
                   repeatCount="1" />
        </template>
      </Gear>
      <g v-show="state === 2" fill="#ffffff" font-family="Noto Sans JP" font-size="25" text-anchor="middle">
        <text x="70" y="120">
          もう一度
        </text>
      </g>
      <g v-show="state === 3" fill="#ffffff" font-family="Noto Sans JP" font-size="25" text-anchor="middle">
        <text x="110" y="160">
          あの感動を
        </text>
      </g>
    </svg>
    <svg v-else width="182" height="257" viewBox="0 0 182 257" style="width: 100%; height: 100%;">
      <defs>
        <path id="star" d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" />
      </defs>
      <filter id="flyer_chara_blackout">
        <feColorMatrix
          in="SourceGraphic"
          type="matrix"
          values="0 0 0 0 0
                    0 0 0 0 0
                    0 0 0 0 0
                    0 0 0 1 0" />
      </filter>
      <filter id="flyer_flash_blur">
        <feGaussianBlur in="SourceGraphic" stdDeviation="1">
          <animate attributeName="stdDeviation" begin="2.9" dur="0.1" to="3" />
        </feGaussianBlur>
      </filter>
      <g v-show="state === 4">
        <image width="182" height="257" preserveAspectRatio="none" xlink:href="/assets/img/flyer_bg.jpg" opacity="0">
          <animate attributeName="opacity" begin="0" dur="0.5" from="0" to="1" fill="freeze" />
        </image>
        <g>
          <image v-for="(chara, index) in charas"
                 :key="index"
                 :x="chara.x"
                 :y="chara.y"
                 :width="chara.w"
                 :height="chara.h"
                 xlink:href="/assets/img/flyer_c0.png"
                 opacity="0"
                 filter="url(#flyer_chara_blackout)">
            <animate attributeName="opacity" :begin="1+index*0.05" dur="0.2" from="0" to="1" fill="freeze" />
            <animate attributeName="y" :begin="1+index*0.05" dur="0.2" :to="40+chara.y" fill="freeze" calcMode="paced" />
            <animate attributeName="y" :begin="1.1+index*0.05" dur="0.2" :to="30+chara.y" fill="freeze" calcMode="paced" />
          </image>
        </g>
        <circle cx="91" cy="128.5" r="0" fill="white" opacity="0.9" filter="url(#flyer_flash_blur)">
          <animate attributeName="r" begin="2" dur="0.1" to="2" fill="freeze" />
          <animate attributeName="r" begin="2.2" dur="0.8" to="0" fill="freeze" />
          <animate attributeName="r" begin="3" dur="0.1" to="160" fill="freeze" calcMode="paced" />
          <animate attributeName="opacity" begin="2" dur="0.3" to="0.8" fill="freeze" />
          <animate attributeName="opacity" begin="3" dur="1" to="1" fill="freeze" calcMode="paced" />
        </circle>
        <g v-for="([[x1, y1], [x2, y2]], index) in generateBezierLines(130, 16)" :key="index">
          <path :id="`flyer_star_path${index}`" :d="`M 91,128.5 q ${x1},${y1} ${x2},${y2}`" fill="none" />
          <use xlink:href="#star" transform="scale(0.4) translate(-12, -12)" :fill="starColors[index%4]" opacity="0">
            <animateTransform attributeName="transform" type="rotate" values="0 12 12; 360 12 12" begin="0" dur="1" repeatCount="indefinite" additive="sum" />
            <animate attributeName="opacity" to="1" begin="2" dur="0.01" repeatCount="1" fill="freeze" />
            <animate attributeName="opacity" to="0" begin="2.5" dur="2.5" repeatCount="1" fill="freeze" />
            <animateMotion begin="2" dur="3" repeatCount="1" fill="freeze" calcMode="paced">
              <mpath :xlink:href="`#flyer_star_path${index}`" />
            </animateMotion>
          </use>
          <template v-for="i in 3">
            <use :key="i" xlink:href="#star" transform="scale(0.8) translate(-12, -12)" :fill="starColors[(i%2 + index)%4]" opacity="0">
              <animateTransform attributeName="transform" type="rotate" values="0 12 12; 360 12 12" begin="0" dur="1" repeatCount="indefinite" additive="sum" />
              <animate attributeName="opacity" to="1" :begin="3+i*0.2" dur="0.001" repeatCount="1" fill="freeze" />
              <animate attributeName="opacity" to="0" :begin="3+i*0.2+0.5" dur="2.5" repeatCount="1" fill="freeze" />
              <animateMotion :begin="3+i*0.2" dur="3" repeatCount="1" fill="freeze" calcMode="paced">
                <mpath :xlink:href="`#flyer_star_path${index}`" />
              </animateMotion>
            </use>
          </template>
        </g>
      </g>
    </svg>
  </v-responsive>
</template>

<script>
import Gear from "@/components/Gear";

export default {
  components: {
    Gear,
  },
  props: {
    start: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      state: 0,
      pathObject: {
        stroke: "#af9c20",
        "stroke-linecap": "round",
      },
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
      starColors: [
        "#ffbf36",
        "#d373f5",
        "#52fb55",
        "#13eae8",
      ],
    };
  },
  async mounted() {
    this.state = 1;
    await this.$pe.delay(9000);
    this.state = 2;
    await this.$pe.delay(1000);
    this.state = 1;
    await this.$pe.delay(1000);
    this.state = 3;
    await this.$pe.delay(1000);
    this.state = 1;
    await this.$pe.delay(4000);
    this.state = 0;
    await this.$pe.delay(0);
    this.state = 4;
    await this.$pe.delay(10000);
    this.state = 0;
  },
  methods: {
    // いい感じのベジエ曲線の座標を作るやつ
    generateBezierLines(r, n) {
      const result = [];

      for (let i = 0; i < n; ++i) {
        const d = 360 / n * i;

        result.push([this.rotatePoint(r, r / 2, d), this.rotatePoint(0, r * 2, d)]);
      }

      return result;
    },
    // 回転行列
    rotatePoint(x, y, d) {
      const rad = Math.PI / 180 * d;

      const x2 = x * Math.cos(rad) - y * Math.sin(rad);
      const y2 = x * Math.sin(rad) + y * Math.cos(rad);

      return [x2, y2];
    },
  },
};
</script>
