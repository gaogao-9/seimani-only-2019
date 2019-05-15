<template>
  <v-icon :class="[$style.wrapper, reverse && $style.reverse, $style[`step${step}`], durationStyle, delayStyle]">
    settings
  </v-icon>
</template>

<script>
export default {
  props: {
    reverse: {
      type: Boolean,
      default: false,
    },
    duration: {
      type: [Number, String],
      default: 0,
    },
    delay: {
      type: [Number, String],
      default: 0,
    },
    step: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    durationStyle() {
      return this.floatingStyle("duration");
    },
    delayStyle() {
      return this.floatingStyle("delay");
    },
  },
  methods: {
    floatingStyle(name) {
      const index = (+this[name]).toFixed(1).replace(".", "-");
      return this.$style[`${name}${index}`];
    },
  },
};
</script>

<style module>
.wrapper {
  animation: rotate 1s linear infinite;

  &.reverse {
    animation-direction: reverse;
  }

  @for $i from 0 to 10 by 1 {
    @for $j from 0 to 10 by 1 {
      &.duration$(i)-$(j) {
        animation-duration: calc($(i) + $(j) / 10)s;
      }
    }
  }

  @for $i from 0 to 10 by 1 {
    @for $j from 0 to 10 by 1 {
      &.delay$(i)-$(j) {
        animation-delay: calc($(i) + $(j) / 10)s;
      }
    }
  }

  @for $i from 1 to 15 {
    &.step$(i) {
      animation-timing-function: steps($(i));
    }
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
