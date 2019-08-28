<template>
  <div>
    <Layout>
      <v-layout align-center justify-center column>
        <GearPath :class="$style.gear" :path="pathAttrs" @complete="onCompleteGearPathAnimation" />
        <p :class="[$style.text, showText && $style.show]">
          Presented by 戦挙管理委員会
        </p>
      </v-layout>
    </Layout>
  </div>
</template>

<script>
import Layout from "@/layouts/IntroLayout";
import GearPath from "@/components/GearPath";

export default {
  components: {
    Layout,
    GearPath,
  },
  data () {
    return {
      showText: false,
    };
  },
  computed: {
    pathAttrs () {
      return {
        "data-delay": 50,
        "data-duration": 100,
        fill: "none",
        stroke: "#d2b316",
      };
    },
  },
  methods: {
    async onCompleteGearPathAnimation () {
      this.showText = true;

      await new Promise((r) => setTimeout(r, 1300));

      this.$router.push({ path: "top" });
    },
  },
};
</script>

<style module>
.gear {
  width: 80vw;
  max-width: 500px;
  height: 80vw;
  max-height: 500px;
}

.text {
  text-align: center;
  font-size: 1.5rem;
  color: rgb(0, 153, 255);
  opacity: 0;
  transition: opacity 0.4s ease;

  @media screen and (min-width: 600px) {
    & {
      font-size: 2.5rem;
    }
  }

  &.show {
    opacity: 1;
  }
}
</style>
