<template>
  <div class="flex">
    <router-link to="/living">
      <Icon icon="icon-park:back" width="8rem" class="ml-20" />
    </router-link>
    <h1
      class="flex flex-1 mr-20 mt-2 justify-center text-9xl shadow-lg shadow-red-500/50"
    >
      Direct Tv
    </h1>
  </div>
  <div class="controller grid justify-center">
    <div
      class="controller-buttons grid grid-cols-8 grid-rows-8 gap-8 p-12 place-content-center"
    >
      <Ch5button id="101" class="col-start-2 row-start-3 justify-self-center">
        <Icon icon="cil:caret-top" width="8rem" />
      </Ch5button>
      <Ch5button id="102" class="col-start-3 row-start-4 justify-self-center">
        <Icon icon="cil:caret-right" width="8rem" />
      </Ch5button>
      <Ch5button id="103" class="col-start-2 row-start-5 justify-self-center">
        <Icon icon="cil:caret-bottom" width="8rem" />
      </Ch5button>
      <Ch5button id="104" class="col-start-1 row-start-4 justify-self-center">
        <Icon icon="cil:caret-left" width="8rem" />
      </Ch5button>
      <Ch5button id="105" class="col-start-2 row-start-4 justify-self-center">
        <Icon width="8rem" icon="akar-icons:circle" />
      </Ch5button>
      <Ch5button
        id="106"
        class="row-start-2 col-start-1 col-end-3 text-7xl border-4"
      >
        Guide
      </Ch5button>
      <Ch5button
        id="107"
        class="row-start-2 col-start-4 col-end-6 text-7xl border-4"
      >
        Menu
      </Ch5button>
      <Ch5button
        id="108"
        class="row-start-2 col-start-7 col-end-9 text-7xl border-4"
      >
        Fav
      </Ch5button>

      <Ch5slider
        id="99"
        class="col-start-7 col-end-9 row-start-1 row-end-1 text-3xl justify-self-center"
      />

      <span class="row-start-1 col-start-5 ml-20 text-7xl">Volume</span>
      <Ch5button id="109" class="col-start-1 row-start-6 justify-self-center">
        <Icon width="7rem" icon="cil:info" />
      </Ch5button>
      <Ch5button
        id="110"
        class="col-start-3 row-start-6 justify-self-center border-2"
      >
        <Icon width="7rem" icon="fluent:video-play-pause-24-regular" />
      </Ch5button>
      <Ch5button id="111" class="col-start-8 row-start-3 justify-self-center">
        <Icon width="7rem" icon="cil:arrow-thick-top" />
      </Ch5button>
      <!-- <span
        class="text-5xl col-start-8 row-start-4 row-end-5 text-center justify-self-center align-middle mt-10"
        >Channel</span
      > -->
      <Ch5button id="112" class="col-start-8 row-start-6 justify-self-center">
        <Icon width="7rem" icon="cil:arrow-thick-bottom" />
      </Ch5button>
      <Ch5button
        id="113"
        class="text-7xl col-start-5 row-start-3 border-4 rounded-xl"
      >
        1
      </Ch5button>
      <Ch5button
        id="114"
        class="text-7xl col-start-6 row-start-3 border-4 rounded-xl"
      >
        2
      </Ch5button>
      <Ch5button
        id="115"
        class="text-7xl col-start-7 row-start-3 border-4 rounded-xl"
      >
        3
      </Ch5button>
      <Ch5button
        id="116"
        class="text-7xl col-start-5 row-start-4 border-4 rounded-xl"
      >
        4
      </Ch5button>
      <Ch5button
        id="117"
        class="text-7xl col-start-6 row-start-4 border-4 rounded-xl"
      >
        5
      </Ch5button>
      <Ch5button
        id="117"
        class="text-7xl col-start-7 row-start-4 border-4 rounded-xl"
      >
        6
      </Ch5button>
      <Ch5button
        id="118"
        class="text-7xl col-start-5 row-start-5 border-4 rounded-xl"
      >
        7
      </Ch5button>
      <Ch5button
        id="119"
        class="text-7xl col-start-6 row-start-5 border-4 rounded-xl"
      >
        8
      </Ch5button>
      <Ch5button
        id="120"
        class="text-7xl col-start-7 row-start-5 border-4 rounded-xl"
      >
        9
      </Ch5button>
      <Ch5button
        id="121"
        class="text-7xl col-start-5 row-start-6 border-4 rounded-xl"
      >
        _
      </Ch5button>
      <Ch5button
        id="122"
        class="text-7xl col-start-7 row-start-6 border-4 rounded-xl"
      >
        ent
      </Ch5button>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import Ch5button from "./Ch5button.vue";
import Ch5slider from "./Ch5slider.vue";

export default {
  components: {
    Ch5slider,
    Ch5button,
    Icon,
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
