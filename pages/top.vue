<template>
  <Layout>
    <div :class="$style.charaContainer">
      <v-img
        :class="[$style.chara, $style.hirari]"
        src="/assets/img/chara/hirari.png"
        :aspect-ratio="200/255"
        width="20vw"
        height="25.5vw"
        contain
        max-width="200px"
        max-height="255px" />
      <v-img
        :class="[$style.chara, $style.syerobu]"
        src="/assets/img/chara/syerobu.png"
        :aspect-ratio="200/246"
        width="20vw"
        height="24.6vw"
        contain
        max-width="200px"
        max-height="246px" />
    </div>
    <v-layout justify-space-around align-center wrap>
      <v-flex xs11 sm8 md6>
        <div :class="$style.flyerContainer">
          <v-img
            src="/assets/img/top.jpg"
            :aspect-ratio="2894/4093"
            min-width="290"
            contain
            class="grey lighten-2" />
          <v-img
            src="/assets/img/flyer/bg.jpg"
            :aspect-ratio="2894/4093"
            min-width="290"
            contain
            class="grey lighten-2"
            :class="[$style.flyerElement, $style.bg]" />
          <v-img
            src="/assets/img/flyer/colis.png"
            :aspect-ratio="2894/4093"
            min-width="290"
            contain
            class="transparent lighten-2"
            :class="[$style.flyerElement, $style.colis]" />
          <v-img
            src="/assets/img/flyer/dia.png"
            :aspect-ratio="2894/4093"
            min-width="290"
            contain
            class="transparent lighten-2"
            :class="[$style.flyerElement, $style.dia]" />
          <v-img
            src="/assets/img/flyer/jozefin.png"
            :aspect-ratio="2894/4093"
            min-width="290"
            contain
            class="transparent lighten-2"
            :class="[$style.flyerElement, $style.jozefin]" />
          <v-img
            src="/assets/img/flyer/tina.png"
            :aspect-ratio="2894/4093"
            min-width="290"
            contain
            class="transparent lighten-2"
            :class="[$style.flyerElement, $style.tina]" />
          <v-img
            src="/assets/img/flyer/fine.png"
            :aspect-ratio="2894/4093"
            min-width="290"
            contain
            class="transparent lighten-2"
            :class="[$style.flyerElement, $style.fine]" />
          <v-img
            src="/assets/img/flyer/white.png"
            :aspect-ratio="2894/4093"
            min-width="290"
            contain
            class="white lighten-2"
            :class="[$style.flyerElement, $style.white]" />
        </div>
      </v-flex>
      <v-flex xs11 sm11 md4 lg3>
        <v-layout justify-space-around align-center>
          <a data-size="large" href="https://twitter.com/intent/tweet?text=%E6%94%BF%E5%89%A3%E3%83%9E%E3%83%8B%E3%83%95%E3%82%A7%E3%82%B9%E3%83%86%E3%82%A3%E3%82%A2%E3%82%AA%E3%83%B3%E3%83%AA%E3%83%BC%E5%90%8C%E4%BA%BA%E8%AA%8C%E5%8D%B3%E5%A3%B2%E4%BC%9A%20%E7%B7%8A%E6%80%A5%E4%BA%A4%E6%B5%81%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88%20%E6%BC%95%E3%81%8E%E5%87%BA%E3%81%9B%EF%BC%81%E3%82%BD%E3%82%AF%E3%83%90%E3%82%A4%E6%B5%B7%E2%85%A1%20%E3%80%9C%E5%B8%B0%E3%81%A3%E3%81%A6%E3%81%8D%E3%81%A1%E3%82%83%E3%81%A3%E3%81%A6%E3%80%81%E3%82%A2%E3%82%A4%E3%83%A0%E3%82%BD%E3%82%A6%E3%83%AA%E3%83%BC%EF%BC%81%20%E5%85%AC%E5%BC%8F%E3%82%B5%E3%82%A4%E3%83%88&hashtags=%E6%94%BF%E5%89%A3%E3%83%9E%E3%83%8B%E3%83%95%E3%82%A7%E3%82%B9%E3%83%86%E3%82%A3%E3%82%A2,%E3%82%A2%E3%82%A4%E3%83%A0%E3%82%BD%E3%82%A6%E3%83%AA%E3%83%BC&url=https%3A%2F%2Ffestia.moe%2F&ref_src=twsrc%5Etfw" class="twitter-mention-button" data-show-count="false">Tweet</a>
        </v-layout>
        <v-layout justify-space-around align-center>
          <a class="twitter-timeline" data-height="500" href="https://twitter.com/seimani_only?ref_src=twsrc%5Etfw">Tweets by seimani_only</a>
        </v-layout>
      </v-flex>
    </v-layout>
  </Layout>
</template>

<script>
import Layout from "@/layouts/TopLayout";

export default {
  head () {
    return {
      script: [
        { src: "https://platform.twitter.com/widgets.js", defer: true },
      ],
      link: [
        {
          rel: "preload",
          href: "/assets/img/top.jpg",
          as: "image",
        },
      ],
    };
  },
  components: {
    Layout,
  },
};
</script>

<style module>
.charaContainer {
  position: fixed;
  top: 50%;
  right: 50%;
  bottom: 50%;
  left: 50%;
  z-index: 114514810;
  pointer-events: none;

  & > .chara {
    display: block;
    overflow: visible;
    position: absolute;
    transform-origin: center center;
    transition: left 0.5s ease;

    &.hirari {
      top: 50vh;
      left: 50vw;
      animation: hovering_hirari 3s linear 0s infinite alternate;

      @media screen and (min-width: 960px) {
        & {
          left: 115px;
        }
      }

      @media screen and (min-width: 1264px) {
        & {
          left: 225px;
        }
      }

      @media screen and (min-width: 1904px) {
        & {
          left: 270px;
        }
      }
    }

    &.syerobu {
      top: -50vh;
      left: -50vw;
      animation: hovering_syerobu 3s linear 0s infinite alternate;

      @media screen and (min-width: 960px) {
        & {
          left: -495px;
        }
      }

      @media screen and (min-width: 1264px) {
        & {
          left: -630px;
        }
      }

      @media screen and (min-width: 1904px) {
        & {
          left: -950px;
        }
      }
    }

    @keyframes hovering_hirari {
      0% {
        transform: translate(calc(-100%), calc(-100% - 20vh)) rotate(-2deg);
        animation-timing-function: ease-in;
      }
      50% {
        transform: translate(calc(-100%), calc(-100% - 10vh)) rotate(2deg);
        animation-timing-function: ease-out;
      }
      100% {
        transform: translate(calc(-100%), calc(-100% - 0vh)) rotate(-2deg);
        animation-timing-function: ease-in;
      }
    }

    @keyframes hovering_syerobu {
      0% {
        transform: translate(0, 20vh) rotate(2deg);
        animation-timing-function: ease-in;
      }
      50% {
        transform: translate(0, 10vh) rotate(-2deg);
        animation-timing-function: ease-out;
      }
      100% {
        transform: translate(0, 0vh) rotate(2deg);
        animation-timing-function: ease-in;
      }
    }
  }
}

.flyerContainer {
  position: relative;
  min-width: 290px;
  overflow: hidden;

  & > .flyerElement {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;

    &.bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      animation: bg 2.1s cubic-bezier(0, 0, 0.68, 1.37) 0s 1 normal both;
    }

    &.colis {
      z-index: 10;
      animation: front 2.1s cubic-bezier(0, 0, 0.68, 1.37) 0s 1 normal both;
    }

    &.dia {
      z-index: 8;
      animation: front 1.8s cubic-bezier(0, 0, 0.68, 1.37) 0.3s 1 normal both;
    }

    &.jozefin {
      z-index: 4;
      animation: front 1.5s cubic-bezier(0, 0, 0.68, 1.37) 0.6s 1 normal both;
    }

    &.tina {
      z-index: 2;
      transform-origin: 8.98% 100%;
      animation: tina 1.6s ease 0.5s 1 normal both;
    }

    &.fine {
      z-index: 0;
      transform-origin: 86.73% 46.65%;
      animation: fine 1.6s ease 0.5s 1 normal both;
    }

    &.white {
      z-index: 20;
      opacity: 0;
      animation: whiteout 5s ease 2s 1 normal forwards;
    }
  }

  @keyframes bg {
    0% {
      opacity: 1;
    }
    99% {
      opacity: 1;
    }
    100% {
      display: none;
      opacity: 0;
    }
  }

  @keyframes front {
    0% {
      opacity: 0;
      transform: translate(0, -5%);
    }
    50% {
      opacity: 1;
      transform: translate(0, 0%);
    }
    99% {
      opacity: 1;
    }
    100% {
      display: none;
      opacity: 0;
    }
  }

  @keyframes tina {
    0% {
      z-index: 10;
      transform: translate(-10%, -5%) rotateZ(-20deg) rotateY(90deg) scale(1);
        animation-timing-function: ease-in;
    }
    25% {
      transform: translate(-5%, -2.5%) rotateZ(-10deg) rotateY(45deg) scale(1.2);
        animation-timing-function: ease-out;
    }
    50% {
      z-index: 2;
      transform: translate(0%, 0%) rotateZ(0deg) rotateY(0deg) scale(1);
    }
    99% {
      opacity: 1;
    }
    100% {
      display: none;
      opacity: 0;
    }
  }

  @keyframes fine {
    0% {
      opacity: 0;
      transform: translate(10%, -10%) rotateZ(-2deg);
    }
    10% {
      transform: translate(8%, -8%) rotateZ(2deg);
    }
    20% {
      transform: translate(6%, -6%) rotateZ(-2deg);
    }
    30% {
      transform: translate(4%, -4%) rotateZ(2deg);
    }
    40% {
      transform: translate(2%, -2%) rotateZ(-1deg);
    }
    50% {
      opacity: 1;
      transform: translate(0%, 0%) rotateZ(0deg);
    }
    99% {
      opacity: 1;
    }
    100% {
      display: none;
      opacity: 0;
    }
  }

  @keyframes whiteout {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      display: none;
    }
  }
}

:global(.twitter) {
  &-mention-button {
    margin-top: 10px;
    margin-bottom: 5px;

    @media all and (min-width: 960px) {
      margin-top: 0px;
    }
  }

  &-timeline {
    max-width: 500px !important;
  }
}
</style>
