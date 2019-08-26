<template functional>
  <div v-bind="data.attrs" :class="[$style.wrapper, $style[`color-${props.color}`], $style[`from-${props.from}`]]" v-on="listeners">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      required: true,
      validator (value) {
        return ["red", "blue"].includes(value);
      },
    },
    from: {
      type: String,
      required: true,
      validator (value) {
        return ["left", "right"].includes(value);
      },
    },
  },
};
</script>

<style module>
.wrapper {
  flex-grow: 1;

  @each $from, $fromInv in (left, right), (right, left) {
    &.from-$(from) {
      --arrowSize: 20px;
      --borderWidth: 3px;

      position: relative;
      margin-$(from): var(--arrowSize);
      padding: 1rem 0.5rem;
      border-radius: 15px;

      &:before, &:after {
        content: "";
        position: absolute;
        top: 50%;
      }

      &:before {
        $(from): calc(var(--arrowSize) * -1);
        margin-top: calc(var(--arrowSize) * -0.5);
        border: calc(var(--arrowSize) * 0.5) solid transparent;
        border-$(fromInv): calc(var(--arrowSize) * 0.5) solid #fff;
        z-index: 2;
      }

      &:after {
        $(from): calc((var(--arrowSize) + var(--borderWidth) * 4) * -1 + 2px);
        margin-top: calc(var(--arrowSize) * -0.5 - (var(--borderWidth) * 2 - 1px));
        border: calc(var(--arrowSize) * 0.5 + (var(--borderWidth) * 2 - 1px)) solid transparent;
        border-$(fromInv): calc(var(--arrowSize) * 0.5 + (var(--borderWidth) * 2 - 1px)) solid;
        z-index: 1;
      }

      @each $name, $color, $borderColor in (blue, red), (#0d4373, #711111), (#4193d9, #ee534c) {
        &.color-$(name) {
          border: 3px solid $(borderColor);
          color: $color;

          &:after {
            border-$(fromInv)-color: $(borderColor);
          }
        }
      }
    }
  }
}
</style>
