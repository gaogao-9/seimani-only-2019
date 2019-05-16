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
        <v-img
          src="/assets/img/top.png"
          aspect-ratio="1"
          min-width="290"
          contain
          class="grey lighten-2"
          :class="$style.banner" />
      </v-flex>
      <v-flex xs11 sm11 md4 lg3>
        <v-layout justify-space-around align-center>
          <a data-size="large" href="https://twitter.com/intent/tweet?text=%E6%94%BF%E5%89%A3%E3%83%9E%E3%83%8B%E3%83%95%E3%82%A7%E3%82%B9%E3%83%86%E3%82%A3%E3%82%A2%E3%82%AA%E3%83%B3%E3%83%AA%E3%83%BC%E5%90%8C%E4%BA%BA%E8%AA%8C%E5%8D%B3%E5%A3%B2%E4%BC%9A%20%E7%B7%8A%E6%80%A5%E4%BA%A4%E6%B5%81%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88%20%E6%BC%95%E3%81%8E%E5%87%BA%E3%81%9B%EF%BC%81%E3%82%BD%E3%82%AF%E3%83%90%E3%82%A4%E6%B5%B7%E2%85%A1%20%E3%80%9C%E5%B8%B0%E3%81%A3%E3%81%A6%E3%81%8D%E3%81%A1%E3%82%83%E3%81%A3%E3%81%A6%E3%80%81%E3%82%A2%E3%82%A4%E3%83%A0%E3%82%BD%E3%82%A6%E3%83%AA%E3%83%BC%EF%BC%81%20%E5%85%AC%E5%BC%8F%E3%82%B5%E3%82%A4%E3%83%88&hashtags=%E6%94%BF%E5%89%A3%E3%83%9E%E3%83%8B%E3%83%95%E3%82%A7%E3%82%B9%E3%83%86%E3%82%A3%E3%82%A2,%E6%94%BF%E3%83%9E%E3%83%8B%E3%82%AA%E3%83%B3%E3%83%AA%E3%83%BC,%E3%82%A2%E3%82%A4%E3%83%A0%E3%82%BD%E3%82%A6%E3%83%AA%E3%83%BC&url=https%3A%2F%2Ffestia.moe%2F&ref_src=twsrc%5Etfw" class="twitter-mention-button" data-show-count="false">Tweet</a>
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
  head() {
    return {
      script: [
        { src: "https://platform.twitter.com/widgets.js", defer: true },
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
    }

    &.syerobu {
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
    }

    @keyframes hovering_hirari {
      0% {
        transform: translate(calc(-100%), calc(-100% + 50vh)) rotate(-2deg);
        animation-timing-function: ease-in;
      }
      50% {
        transform: translate(calc(-100%), calc(-100% + 40vh)) rotate(2deg);
        animation-timing-function: ease-out;
      }
      100% {
        transform: translate(calc(-100%), calc(-100% + 30vh)) rotate(-2deg);
        animation-timing-function: ease-in;
      }
    }

    @keyframes hovering_syerobu {
      0% {
        transform: translate(0, -50vh) rotate(2deg);
        animation-timing-function: ease-in;
      }
      50% {
        transform: translate(0, -40vh) rotate(-2deg);
        animation-timing-function: ease-out;
      }
      100% {
        transform: translate(0, -30vh) rotate(2deg);
        animation-timing-function: ease-in;
      }
    }
  }
}

.banner {
  margin: 0 auto;
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
