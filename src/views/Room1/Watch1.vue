<template>
  <div class="flex">
    <router-link to="/living">
      <Icon icon="icon-park:back" width="8rem" class="ml-20" />
    </router-link>
    <h1 class="flex flex-1 mr-20 mt-2 justify-center text-9xl shadow-lg shadow-red-500/50">
      Direct Tv
    </h1>
  </div>
  <div class="controller grid justify-center">
    <div
      class="controller-buttons grid grid-cols-8 gap-8 p-12 place-content-center"
    >
      <button class="col-start-3 row-start-3 justify-self-center">
        <Icon icon="cil:caret-top" width="8rem" />
      </button>
      <button class="col-start-4 row-start-4 justify-self-center">
        <Icon icon="cil:caret-right" width="8rem" />
      </button>
      <button class="col-start-3 row-start-5 justify-self-center">
        <Icon icon="cil:caret-bottom" width="8rem" />
      </button>
      <button class="col-start-2 row-start-4 justify-self-center">
        <Icon icon="cil:caret-left" width="8rem" />
      </button>
      <button class="col-start-3 row-start-4 justify-self-center">
        <Icon width="8rem" icon="akar-icons:circle" />
      </button>
      <button class="row-start-2 col-start-1 col-end-3 text-7xl border-4">
        Guide
      </button>
      <button class="row-start-2 col-start-4 col-end-6 text-7xl border-4">
        Menu
      </button>
      <button class="row-start-2 col-start-7 col-end-9 text-7xl border-4">
        Fav
      </button>

      <vue3-slider
        class="col-start-1 col-end-2 row-start-3 row-end-6 text-3xl justify-self-center"
        v-model="myNumber"
        color="rgb(0, 195, 255)"
        track-color="#d3d3d3"
        orientation="vertical"
        label="Volume"
        height="20"
        width="20rem"
        tooltiptext="Volume %v"
        tooltip="true"
      />

      <span class="row-start-5 col-start-1 text-5xl mt-10">Volume</span>
      <button class="col-start-2 row-start-6 justify-self-center">
        <Icon width="7rem" icon="cil:info" />
      </button>
      <button class="col-start-4 row-start-6 justify-self-center border-2">
        <Icon width="7rem" icon="fluent:video-play-pause-24-regular" />
      </button>
      <button class="col-start-5 row-start-3 justify-self-center">
        <Icon width="7rem" icon="cil:arrow-thick-top" />
      </button>
      <span
        class="text-5xl col-start-5 row-start-4 text-center justify-self-center align-middle mt-10"
        >Channel</span
      >
      <button class="col-start-5 row-start-5 justify-self-center">
        <Icon width="7rem" icon="cil:arrow-thick-bottom" />
      </button>
      <button class="text-7xl col-start-6 row-start-3 border-4 rounded-xl">1</button>
      <button class="text-7xl col-start-7 row-start-3 border-4 rounded-xl">2</button>
      <button class="text-7xl col-start-8 row-start-3 border-4 rounded-xl">3</button>
      <button class="text-7xl col-start-6 row-start-4 border-4 rounded-xl">4</button>
      <button class="text-7xl col-start-7 row-start-4 border-4 rounded-xl">5</button>
      <button class="text-7xl col-start-8 row-start-4 border-4 rounded-xl">6</button>
      <button class="text-7xl col-start-6 row-start-5 border-4 rounded-xl">7</button>
      <button class="text-7xl col-start-7 row-start-5 border-4 rounded-xl">8</button>
      <button class="text-7xl col-start-8 row-start-5 border-4 rounded-xl">9</button>
      <button class="text-7xl col-start-6 row-start-6 border-4 rounded-xl">_</button>
      <button class="text-7xl col-start-8 row-start-6 border-4 rounded-xl">ent</button>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import slider from "vue3-slider";
export default {
  components: {
    Icon,
    "vue3-slider": slider,
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
  props: ["mode"],
};
</script>
<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
</style>
