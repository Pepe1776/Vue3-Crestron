<template>
  <div class="home">
    <h1 class="text-9xl shadow-lg shadow-red-500/50>Family">
      Home <Icon class="icon" inline="true" width="5rem" icon="mdi-light:home" />
    </h1>
    <!-- <weather /> -->
  </div>
</template>

<script>
// import Weather from "../components/Weather.vue";
import { Icon } from "@iconify/vue";

export default {
  name: "Home",
  components: {
    Icon,
    // Weather,
  },
};
</script>

<style lang="scss">
.icon {
  position: absolute;
  margin-top: -6.4rem;
  margin-left: 55rem;
}
</style>
