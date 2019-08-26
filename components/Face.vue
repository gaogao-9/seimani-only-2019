<template functional>
  <component :is="props.components.VImg" v-bind="{ ...data.attrs, src: `/assets/img/icon/${props.chara}_${props.emotion}.png` }" v-on="listeners" />
</template>

<script>
import { VImg } from "vuetify/lib";

export default {
  props: {
    chara: {
      type: String,
      required: true,
      validator (value) {
        return ["maxine", "marjorie"].includes(value);
      },
    },
    emotion: {
      type: String,
      default: "default",
      validator (value) {
        return ["default", "sad", "sad2", "smile", "smile2", "thinking", "panic"].includes(value);
      },
    },
    components: {
      type: Object,
      default () {
        return {
          VImg,
        };
      },
    },
  },
};
</script>
