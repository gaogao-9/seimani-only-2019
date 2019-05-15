<template>
  <v-layout :class="$style.wrapper">
    <span :class="$style.gearWrapper">
      <Gear :step="5" duration="4.5" reverse />
      <Gear :step="5" duration="4.5" />
      <Gear duration="3.5" reverse />
      <Gear duration="3.5" />
      <Gear duration="3.5" reverse />
      <Gear duration="3.5" />
      <Gear duration="3.5" reverse />
      <Gear duration="0.5" />
      <Gear duration="0.5" reverse />
      <Gear duration="0.5" />
      <Gear duration="0.5" reverse />
      <Gear duration="0.5" reverse />
      <Gear duration="0.5" />
    </span>
    <v-layout :class="$style.content" justify-center align-center row wrap>
      <slot />
    </v-layout>
  </v-layout>
</template>

<script>
import Gear from "@/components/Gear";

export default {
  components: {
    Gear,
  },
  props: {
    path: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style module>
.wrapper {
  height: 100%;
  position: relative;
  overflow: hidden;

  .gearWrapper {
    & > i {
      position: absolute;
      color: #756b4f;
      pointer-events: none;
      z-index: -1;

      &:nth-of-type(1) {
        text-shadow: 0px 0px 10px #513f17;
        color: rgba(90, 71, 28, 0.72);
        font-size: 250px;
        top: -70px;
        right: -30px;
      }

      &:nth-of-type(2) {
        text-shadow: 0px 0px 10px #513f17;
        color: rgba(90, 71, 28, 0.72);
        font-size: 230px;
        top: -160px;
        left: -60px;
      }

      &:nth-of-type(3) {
        font-size: 100px;
        top: -5px;
        right: 0;
      }

      &:nth-of-type(4) {
        font-size: 100px;
        top: -55px;
        right: 60px;
      }

      &:nth-of-type(5) {
        font-size: 100px;
        top: -10px;
        left: -30px;
      }

      &:nth-of-type(6) {
        font-size: 100px;
        top: -65px;
        left: 20px;
      }

      &:nth-of-type(7) {
        font-size: 100px;
        top: -40px;
        left: 90px;
      }

      &:nth-of-type(8) {
        color: #b1a524;
        font-size: 25px;
        top: 30px;
        right: 38px;
      }

      &:nth-of-type(9) {
        color: #b1a524;
        font-size: 25px;
        top: 16px;
        right: 25px;
      }

      &:nth-of-type(10) {
        color: #b1a524;
        font-size: 25px;
        top: 30px;
        left: 38px;
      }

      &:nth-of-type(11) {
        color: #b1a524;
        font-size: 25px;
        top: 16px;
        left: 25px;
      }

      &:nth-of-type(12) {
        color: #b1a524;
        font-size: 25px;
        top: 20px;
        left: 125px;
      }

      &:nth-of-type(13) {
        color: #b1a524;
        font-size: 25px;
        top: 34px;
        left: 112px;
      }
    }
  }

  .content {
    color: white;
  }
}
</style>
