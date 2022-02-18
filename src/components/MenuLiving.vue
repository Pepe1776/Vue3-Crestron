<template>
  <Menu>
    <div class="h-full w-full">
      <MenuButton
        id="source"
        class="mt-20 md:text-5xl lg:text-9xl animate-pulse shadow-2xl border-2 border-blue-300 text-4xl active:text-black text-blue-300 font-bold rounded"
        >Sources</MenuButton
      >
    </div>
    <transition name="fade">
      <MenuItems
        id="menu-i"
        class="shadow-2xl border-white outline-4 grid grid-rows-3 grid-flow-col gap-x-10 gap-y-20"
      >
        <MenuItem v-slot="{}">
          <a
            id="menu"
            class="shadow-2xl text-4xl md:text-3xl lg:text-6xl dark:text-white active:text-black text-red-700 font-bold py-2 px-4 rounded"
            href="/Watch1"
            >Watch<img
              class="direct"
              src="../assets/380px-Direct_tv_channel.svg.png"
            />
          </a>
        </MenuItem>
        <MenuItem v-slot="{}">
          <a
            id="menu"
            class="dark:text-white shadow-2xl text-2xl md:text-3xl lg:text-6xl active:text-black text-red-700 font-bold py-2 px-4 rounded"
            href="/Listen1"
            >Listen<img
              class="direct"
              src="../assets/380px-Direct_tv_channel.svg.png"
            />
          </a>
        </MenuItem>
        <MenuItem>
          <a
            id="menu"
            class="dark:text-white shadow-2xl text-2xl md:text-3xl lg:text-6xl active:text-black text-red-700 font-bold py-2 px-4 rounded"
            href="/Lighting1"
            >Lighting<Icon
              class="bulb"
              inline="false"
              width="7rem"
              icon="noto:light-bulb"
            />
          </a>
        </MenuItem>
        <MenuItem v-slot="{}">
          <a
            id="menu"
            class="dark:text-white shadow-2xl text-2xl md:text-3xl lg:text-6xl active:text-black text-red-700 font-bold py-2 px-4 rounded"
            href="/Watch1b"
            >Watch
            <img src="../assets/apple-tv.svg" class="apple" />
          </a>
        </MenuItem>
        <MenuItem v-slot="{}">
          <a
            id="menu"
            class="dark:text-white shadow-2xl text-2xl md:text-3xl lg:text-6xl active:text-black text-red-700 font-bold py-2 px-4 rounded"
            href="/Listen1b"
            >Listen<img src="../assets/apple-tv.svg" class="apple" />
          </a>
        </MenuItem>
        <MenuItem>
          <a
            id="menu"
            class="dark:text-white shadow-2xl text-2xl md:text-3xl lg:text-6xl active:text-black text-red-700 font-bold py-2 px-4 rounded"
            href="/Shades1"
            >Shades<Icon class="shade" width="7rem" icon="si-glyph:curtain"
          /></a>
        </MenuItem>
        <MenuItem v-slot="{}">
          <a
            id="menu"
            class="dark:text-white shadow-2xl text-2xl md:text-3xl lg:text-6xl active:text-black text-red-700 font-bold py-2 px-4 rounded"
            href="/Watch1c"
            >Watch BlueRay<img
              class="blueray"
              src="../assets/Blu_ray_logo.png"
            />
          </a>
        </MenuItem>
        <MenuItem v-slot="{}">
          <a
            id="menu"
            class="dark:text-white shadow-2xl text-2xl md:text-3xl lg:text-6xl active:text-black text-red-700 font-bold py-2 px-4 rounded"
            href="/Listen1c"
            >Listen Airplay<Icon
              class="air"
              width="9rem"
              icon="simple-icons:airplayaudio"
            />
          </a>
        </MenuItem>
        <MenuItem>
          <a
            id="menu"
            class="dark:text-white shadow-2xl text-2xl md:text-3xl lg:text-6xl active:text-black text-red-700 font-bold py-2 px-4 rounded"
            href="/Hvac1"
            >Climate<Icon class="hvac" width="8rem" icon="mdi:air-conditioner"
          /></a>
        </MenuItem>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script>
import { Icon } from "@iconify/vue";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";

export default {
  components: {
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
    Icon,
  },
  props: ["mode"],
};
</script>

<style type="scss">
@import "../Sass/abstracts.scss";
* {
  margin: 0;
  padding: 0;
}

#menu-b {
  /* position: absolute;
  top: 0;
  right: 0;
  margin-top: 1%;
  margin-right: 30%;
  height: 10%;
  width: 20%; */
  /* margin-bottom: 10%; */
}
#menu-i {
  position: absolute;
  top: 7%;
}
.dark #menu-b {
  background-color: #000;
  border: 2px solid rgb(0, 255, 255);
  color: white;
}
#menu-i {
  background-color: #fff;
}
.dark #menu-i {
  background-color: #000;
  /* transition: 0.4s; */
}
.dark #menu {
  background-color: #000;
  /* border: 2px solid red; */
  color: white;
}
.fade-enter-active {
  transition: all 2s ease;
}
.fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.fade-leave-to /* .slide-fade-leave-active below version 2.1.8 */ {
  /* transform: translateX(10px); */
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

/* Icons */

.direct {
  width: 40%;
  margin-left: 31%;
  margin-top: 4%;
}
.apple {
  width: 35%;
  margin-left: 32.5%;
  margin-top: 4%;
}
.bulb {
  margin-left: 37%;
  margin-top: 4%;
}
.shade {
  margin-left: 37.5%;
  margin-top: 4%;
}
.blueray {
  width: 50%;
  margin-left: 23%;
  margin-top: 4%;
}
.air {
  margin-left: 33.333%;
  margin-top: 4%;
}
.hvac {
  margin-left: 35%;
  margin-top: 4%;
}

/* media queries */

@media screen and (max-width: 1000px) {
  /* #menu-b {
    position: absolute;
    margin-left: 80%;
    margin-bottom: 39%;
  } */
}
</style>
