<template>
  <Menu>
    <MenuButton
      id="menu-b"
      class="md:text-5xl lg:text-7xl animate-pulse shadow-2xl outline-black text-4xl active:text-black text-red-700 font-bold py-2 px-4 rounded"
      >Sources</MenuButton
    >
    <transition name="fade">
      <MenuItems
        id="menu-i"
        class="shadow-2xl outline-black grid grid-rows-3 grid-flow-col gap-x-10 gap-y-20"
      >
        <MenuItem v-slot="{}">
          <a
            id="menu"
            class="shadow-2xl text-4xl md:text-3xl lg:text-6xl dark:text-white active:text-black text-red-700 font-bold py-2 px-4 rounded"
            href="/Watch1"
            >Watch Direct Tv</a
          >
        </MenuItem>
        <MenuItem v-slot="{}">
          <a
            id="menu"
            class="dark:text-white shadow-2xl text-2xl md:text-3xl lg:text-6xl active:text-black text-red-700 font-bold py-2 px-4 rounded"
            href="/Listen1"
            >Listen Direct Tv</a
          >
        </MenuItem>
        <MenuItem>
          <a
            id="menu"
            class="dark:text-white shadow-2xl text-2xl md:text-3xl lg:text-6xl active:text-black text-red-700 font-bold py-2 px-4 rounded"
            href="/Lighting1"
            >Lighting</a
          >
        </MenuItem>
        <MenuItem v-slot="{}">
          <a
            id="menu"
            class="dark:text-white shadow-2xl text-2xl md:text-3xl lg:text-6xl active:text-black text-red-700 font-bold py-2 px-4 rounded"
            href="/Watch1b"
            >Watch Apple Tv</a
          >
        </MenuItem>
        <MenuItem v-slot="{}">
          <a
            id="menu"
            class="dark:text-white shadow-2xl text-2xl md:text-3xl lg:text-6xl active:text-black text-red-700 font-bold py-2 px-4 rounded"
            href="/Listen1b"
            >Listen Apple Tv</a
          >
        </MenuItem>
        <MenuItem>
          <a
            id="menu"
            class="dark:text-white shadow-2xl text-2xl md:text-3xl lg:text-6xl active:text-black text-red-700 font-bold py-2 px-4 rounded"
            href="/Shades1"
            >Shades</a
          >
        </MenuItem>
        <MenuItem v-slot="{}">
          <a
            id="menu"
            class="dark:text-white shadow-2xl text-2xl md:text-3xl lg:text-6xl active:text-black text-red-700 font-bold py-2 px-4 rounded"
            href="/Watch1c"
            >Watch BlueRay</a
          >
        </MenuItem>
        <MenuItem v-slot="{}">
          <a
            id="menu"
            class="dark:text-white shadow-2xl text-2xl md:text-3xl lg:text-6xl active:text-black text-red-700 font-bold py-2 px-4 rounded"
            href="/Listen1c"
            >Listen Airplay</a
          >
        </MenuItem>
        <MenuItem>
          <a
            id="menu"
            class="dark:text-white shadow-2xl text-2xl md:text-3xl lg:text-6xl active:text-black text-red-700 font-bold py-2 px-4 rounded"
            href="/Hvac1"
            >Climate</a
          >
        </MenuItem>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";

export default {
  components: {
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
  },
  props: ["mode"],
};
</script>

<style type="scss">
@import "../Sass/abstracts.scss";

#menu-b {
  position: absolute;
  bottom: 0;
  left: 0;
  margin-bottom: 10%;
  margin-left: 39%;
}
#menu-i {
  margin-top: 5%;
}
.dark #menu-b {
  background-color: #000;

  color: white;
}
.dark #menu-i {
  background-color: #000;

  /* transition: 0.4s; */
}
.dark #menu {
  background-color: #000;

  color: white;
}
.fade-enter-active {
  transition: all 2s ease;
}
.fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.fade-leave-to /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
.fade-enter-from {
  opacity: 0;
}
/* .fade-enter-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
  opacity: 0;
} */
.fade-enter-to {
  opacity: 1;
}
@media screen and (max-width: 1000px) {
  #menu-b {
    position: absolute;
    margin-left: 80%;
    margin-bottom: 39%;
  }
}
</style>
