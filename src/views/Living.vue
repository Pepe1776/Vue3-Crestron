<script>
import MenuLiving from "../components/MenuLiving.vue";
export default {
  components: { MenuLiving },
};
</script>

<template>
  <h1 class="text-9xl shadow-lg shadow-red-500/50">Living Room</h1>
  <router-view />
  <MenuLiving />
</template>

<style lang="scss">
@import "../Sass/abstracts.scss";
</style>
