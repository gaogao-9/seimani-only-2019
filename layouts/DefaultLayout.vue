<template>
  <Layout v-bind="$attrs" v-on="$listeners">
    <slot />
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
