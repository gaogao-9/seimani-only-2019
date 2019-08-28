<template>
  <v-app :class="[$style.app]" light>
    <v-content>
      <v-layout align-center justify-center column fill-height>
        <slot />
      </v-layout>
    </v-content>
  </v-app>
</template>

<script>
export default {
  inheritAttrs: false,
};
</script>

<style module>
.app {
  transition: background 0.3s;
}
</style>
