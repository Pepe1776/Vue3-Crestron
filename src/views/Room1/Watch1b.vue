<template>
  <div class="Shades1">
    <h1
      class="flex flex-1 mr-20 mt-2 justify-center text-9xl shadow-lg shadow-red-500/50"
    >
      Apple Controls
    </h1>
    <AppleTvRemote />
  </div>
</template>
<script>
import AppleTvRemote from "../../components/AppleTvRemote.vue";
export default {
  components: {
    AppleTvRemote,
  },
};
</script>
<style lang="scss"></style>
