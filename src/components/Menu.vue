<template>
  <Menu>
    <MenuButton
      id="menu-b"
      class="animate-pulse shadow-2xl outline-black mt-10 mb-20 text-7xl active:text-black text-red-700 font-bold py-2 px-4 rounded"
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
          class="shadow-2xl text-6xl dark:text-white active:text-black text-red-700 font-bold py-2 px-4 rounded"
          href="/account-settings"
        >
          Watch Direct Tv
        </a>
      </MenuItem>
      <MenuItem v-slot="{}">
        <a
          id="menu"
          class="dark:text-white shadow-2xl text-6xl active:text-black text-red-700 font-bold py-2 px-4 rounded"
          href="/account-settings"
        >
          Listen Direct Tv
        </a>
      </MenuItem>
      <MenuItem>
        <span
          class="dark:text-white shadow-2xl text-6xl active:text-black text-red-700 font-bold py-2 px-4 rounded"
          >Lighting</span
        >
      </MenuItem>
      <MenuItem v-slot="{}">
        <a
          id="menu"
          class="dark:text-white shadow-2xl text-6xl active:text-black text-red-700 font-bold py-2 px-4 rounded"
          href="/account-settings"
        >
          Watch Apple Tv
        </a>
      </MenuItem>
      <MenuItem v-slot="{}">
        <a
          id="menu"
          class="dark:text-white shadow-2xl text-6xl active:text-black text-red-700 font-bold py-2 px-4 rounded"
          href="/account-settings"
        >
          Listen Apple Tv
        </a>
      </MenuItem>
      <MenuItem>
        <span
          id="menu"
          class="dark:text-white shadow-2xl text-6xl active:text-black text-red-700 font-bold py-2 px-4 rounded"
          >Shades</span
        >
      </MenuItem>
      <MenuItem v-slot="{}">
        <a
          id="menu"
          class="dark:text-white shadow-2xl text-6xl active:text-black text-red-700 font-bold py-2 px-4 rounded"
          href="/account-settings"
        >
          Watch BlueRay
        </a>
      </MenuItem>
      <MenuItem v-slot="{}">
        <a
          id="menu"
          class="dark:text-white shadow-2xl text-6xl active:text-black text-red-700 font-bold py-2 px-4 rounded"
          href="/account-settings"
        >
          Listen Airplay
        </a>
      </MenuItem>
      <MenuItem>
        <span
          id="menu"
          class="dark:text-white shadow-2xl text-6xl active:text-black text-red-700 font-bold py-2 px-4 rounded"
          >Climate</span
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
  margin-bottom: 15%;
  margin-left: 39%;
}
#menu-i {
  margin-top: 5%;
}
.dark #menu-b {
  background-color: #000;
  border: 2px solid red;
  color: white;
}
.dark #menu-i {
  background-color: #000;
  border: 2px solid red;
  /* transition: 0.4s; */
}
.dark #menu {
  background-color: #000;
  border: 2px solid red;
  color: white;
}
.fade-enter-active {
  transition: all 0.8s ease;
}
.fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.fade-leave-to /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
.fade-enter {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
  opacity: 0;
}
.fade-enter-to {
  transform: translateX(0px);
  opacity: 1;
}
</style>
