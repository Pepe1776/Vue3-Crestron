<script>
import DarkModeToggle from "./components/DarkModeToggle.vue";
export default {
  name: "app",
  data() {
    return {
      mode: "dark",
      isDark: false,
      isShow: false,
    };
  },

  components: {
    DarkModeToggle,
  },
};
</script>

<template>
  <div class="app" :class="isDark ? 'dark' : ''">
    <h1 class="text-8xl flex justify-center align-middle mt-5">Crestron</h1>
    <DarkModeToggle @click="isDark = !isDark" class="darktoggle" />
    <!-- <Nav :mode="mode" @toggle="toggle" /> -->
    <button @click="isShow = !isShow" class="drop_btn">Rooms</button>
    <div v-show="isShow" class="drop_outer">
      <div class="drop_menu flex flex-col">
        <button @click="isShow = !isShow" class="text-8xl drop_close">X</button>
        <button class="m-10 text-9xl">Living Room</button>
        <button class="m-10 text-9xl">Family Room</button>
        <button class="m-10 text-9xl">Master Bed</button>
        <button class="m-10 text-9xl">Landscape</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "./Sass/abstracts.scss";

@font-face {
  font-family: "Aquire";
  src: url(./assets/AquireLight-YzE0o.otf);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 10px;
}
.app {
  width: 100vw;
  min-height: 100vh;
  background-color: $lightest;
  color: $darkest;
  transition: background 0.3s ease-in-out;
}
.dark {
  background-color: $darker;
  color: $primary;
}
#app {
  font-family: "Aquire", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $darkest;
}
h1 {
  font-size: 7rem;
}
.darktoggle {
  position: fixed;
  top: 10px;
  right: 0;
  z-index: 1;
  padding: 0px 15px;
  height: 6rem;
  transition: all 0.6s ease-in-out;
}
.btn {
  font-size: 28px;
  color: #fff;
  padding: 15px;
  margin: 10px;
  border-radius: 50px;
  background: #e0e0e0;
  border: 1px linear-gradient(to right, #e0e0e0, #fff);
  box-shadow: inset 10px 10px 19px #b5b5b5, inset -10px -10px 19px #ffffff;
  text-shadow: 1px 1px 1px #b5b5b5;
}
.btn:hover,
.btn2:active {
  box-shadow: inset 10px 10px 19px #b5b5b5, inset -10px -10px 19px #ffffff,
    inset -10px -10px 19px #b5b5b5, inset 10px 10px 19px #ffffff;
}

.btn2 {
  display: inline-block;
  place-items: center;
  width: 40%;
  height: 100%;
  border: 1px solid rgba(255, 255, 255, 0.459);
  color: rgb(94, 91, 91);
  padding: 15px;
  margin-top: 20%;
  border-radius: 50px;
  border-radius: 50px;
  background: linear-gradient(145deg, #cacaca, #f0f0f0);
  box-shadow: 10px 10px 19px #b5b5b5, -10px -10px 19px #ffffff;
}
.btn:active {
  background: linear-gradient(145deg, #cacaca, #f0f0f0);
  box-shadow: 10px 10px 19px #b5b5b5, -10px -10px 19px #ffffff;
}
.btn3 {
  border: 1px solid rgba(255, 255, 255, 0.459);
  font-size: 28px;
  color: #fff;
  padding: 15px;
  margin: 10px;
  background: linear-gradient(145deg, #cacaca, #f0f0f0);
  box-shadow: 10px 10px 19px #b5b5b5, -10px -10px 19px #ffffff;
}
.drop_menu {
  position: absolute;
  border-radius: 10%;
  height: 50%;
  width: 50%;
  background-color: rgba(11, 11, 11, 0);
  backdrop-filter: blur(10px);
  top: 30%;
  right: 24%;
  font-size: 4rem;
  transition: all 0.3s ease-in-out;
}
.drop_outer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(196, 194, 194, 0);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
}
.drop_close {
  width: 20px;
  height: 20px;
  z-index: 1;
  position: absolute;
  top: 30px;
  right: 60px;

  transition: all 0.3s ease-in-out;
}
.drop_btn {
  display: inline-block;
  margin-top: 15%;
  font-size: 7rem;
}
</style>
