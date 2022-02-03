<template>
  <div class="flex">
    <router-link to="/living">
      <Icon icon="icon-park:back" width="8rem" class="ml-20" />
    </router-link>
    <h1 class="flex ml-80 justify-center text-9xl shadow-lg shadow-red-500/50">
      Direct Tv
    </h1>
  </div>
  <div class="controller grid justify-center">
    <div class="controller-buttons grid grid-cols-7 gap-4 p-8">
      <button class="col-start-4 row-start-2 ml-8">
        <Icon icon="fad:caret-up" width="8rem" />
      </button>
      <button class="col-start-5 row-start-3 ml-8">
        <Icon icon="fad:caret-right" width="8rem" />
      </button>
      <button class="col-start-4 row-start-4 ml-8">
        <Icon icon="fad:caret-down" width="8rem" />
      </button>
      <button class="col-start-3 row-start-3 ml-8">
        <Icon icon="fad:caret-left" width="8rem" />
      </button>
      <button class="col-start-4 row-start-3 ml-8">
        <Icon width="8rem" icon="akar-icons:circle" />
      </button>
      <button class="row-start-1 col-start-2 text-7xl">Guide</button>
      <button class="row-start-1 col-start-4 text-7xl">Menu</button>
      <button class="row-start-1 col-start-6 text-7xl">Fav</button>
    </div>
  </div>
  
</template>
<script>
import { Icon } from "@iconify/vue";
export default {
  components: {
    Icon,
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>
<style lang="scss"></style>
