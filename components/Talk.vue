<template functional>
  <div v-bind="data.attrs" :class="[$style.wrapper, ...(Array.isArray(data.class) ? data.class : [data.class])]" v-on="listeners">
    <component :is="props.components.Face"
               v-if="(props.chara === 'maxine')"
               :chara="props.chara"
               :emotion="props.emotion"
               v-bind="{maxWidth: '80px', minWidth: '80px', maxHeight: '80px', minHeight: '80px', aspectRatio: 1}" />
    <component :is="props.components.Balloon"
               :color="(props.chara === 'maxine') ? 'blue' : 'red'"
               :from="(props.chara === 'maxine') ? 'left' : 'right'">
      <slot />
    </component>
    <component :is="props.components.Face"
               v-if="(props.chara === 'marjorie')"
               :chara="props.chara"
               :emotion="props.emotion"
               v-bind="{maxWidth: '80px', minWidth: '80px', maxHeight: '80px', minHeight: '80px', aspectRatio: 1}" />
  </div>
</template>

<script>
import Face from "@/components/Face";
import Balloon from "@/components/Balloon";

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
          Face,
          Balloon,
        };
      },
    },
  },
};
</script>

<style module>
.wrapper {
  display: flex;
  align-items: center;
}
</style>
