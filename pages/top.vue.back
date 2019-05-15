<template>
  <Layout :theme="theme">
    <v-layout justify-center align-center>
      <InitialAnimation :start="playInitialAnimation && !showFlyer" />
      <FlyerAnimation :start="showFlyer" />
    </v-layout>
  </Layout>
</template>

<script>
import Layout from "@/layouts/TopLayout";
import InitialAnimation from "@/components/InitialAnimation";
import FlyerAnimation from "@/components/FlyerAnimation";

export default {
  components: {
    InitialAnimation,
    FlyerAnimation,
    Layout,
  },
  props: {
    playInitialAnimation: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      showFlyer: false,
      theme: this.playInitialAnimation ? "light" : "dark",
    };
  },
  async mounted() {
    if (this.playInitialAnimation) {
      await this.$pe.delay(7000);

      this.theme = "dark";

      await this.$pe.delay(12100);

      // this.theme = "light";

      await this.$pe.delay(4000);

      this.$router.replace("/top/");
    }

    await this.$pe.delay(300);

    this.showFlyer = true;
  },
};
</script>
