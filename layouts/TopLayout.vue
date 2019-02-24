<template>
  <Layout v-bind="$attrs" v-on="$listeners">
    <v-container :class="$style.contentWrapper" fill-height>
      <slot />
    </v-container>
  </Layout>
</template>

<script>
import Layout from "@/layouts/TemplateLayout";

export default {
  components: {
    Layout,
  },
  inheritAttrs: false,
};
</script>

<style module>
.app {
  transition: background 0.3s;
}

.headerLink {
  color: inherit;
  text-decoration: inherit;
}

.contentWrapper {
  padding: 0 !important;
}
</style>
