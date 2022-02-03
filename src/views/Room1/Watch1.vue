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
    <div
      class="controller-buttons grid grid-cols-7 gap-8 p-12 place-content-center"
    >
      <button class="col-start-4 row-start-3 justify-self-center">
        <Icon icon="cil:caret-top" width="8rem" />
      </button>
      <button class="col-start-5 row-start-4 justify-self-center">
        <Icon icon="cil:caret-right" width="8rem" />
      </button>
      <button class="col-start-4 row-start-5 justify-self-center">
        <Icon icon="cil:caret-bottom" width="8rem" />
      </button>
      <button class="col-start-3 row-start-4 justify-self-center">
        <Icon icon="cil:caret-left" width="8rem" />
      </button>
      <button class="col-start-4 row-start-4 ml-8">
        <Icon width="8rem" icon="akar-icons:circle" />
      </button>
      <button class="row-start-2 col-start-2 text-7xl border-2">Guide</button>
      <button class="row-start-2 col-start-4 text-7xl border-2">Menu</button>
      <button class="row-start-2 col-start-6 text-7xl border-2">Fav</button>
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
      <button class="col-start-3 row-start-6 justify-self-center">
        <Icon width="7rem" icon="cil:info" />
      </button>
      <button class="col-start-5 row-start-6 justify-self-center border-2">
        <Icon width="7rem" icon="fluent:video-play-pause-24-regular" />
      </button>
      <button class="col-start-7 row-start-3 justify-self-center">
        <Icon width="7rem" icon="cil:arrow-thick-top" />
      </button>
      <span class="text-5xl col-start-7 row-start-4 text-center mt-14"
        >Channel</span
      >
      <button class="col-start-7 row-start-5 justify-self-center">
       <Icon width="7rem" icon="cil:arrow-thick-bottom" />
      </button>
      <Popover class="relative row-start-7 col-start-7 text-5xl border-2">
        <PopoverButton>Keypad</PopoverButton>

        <PopoverPanel class="absolute z-10">
          <div class="grid grid-cols-4">
            <a href="/analytics">Analytics</a>
            <a href="/engagement">Engagement</a>
            <a href="/security">Security</a>
            <a href="/integrations">Integrations</a>
          </div>
        </PopoverPanel>
      </Popover>

    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import slider from "vue3-slider";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
export default {
  components: {
    Icon,
    "vue3-slider": slider,
    Popover,
    PopoverButton,
    PopoverPanel,
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
  props: ["mode"],
};
</script>
<style lang="scss"></style>
