<script>
import Menu from "../components/Menu.vue";
export default {
  components: { Menu },
};
</script>

<template>
  <h1 class="text-9xl shadow-lg shadow-red-500/50">Living Room</h1>
  <router-view />
  <Menu />
</template>

<style lang="scss">
@import "../Sass/abstracts.scss";
</style>
