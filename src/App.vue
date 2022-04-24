<script>
import DarkModeToggle from "./components/DarkModeToggle.vue";
const date = new Date();
export default {
  name: "app",
  data() {
    return {
      mode: "dark",
      isDark: true,
      isShow: false,
      dateTime: {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
      },
      timer: undefined,
    };
  },

  components: {
    DarkModeToggle,
  },
  methods: {
    setDateTime() {
      const date = new Date();
      this.dateTime = {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
      };
    },
  },
  beforeMount() {
    this.timer = setInterval(this.setDateTime, 1000);
  },
  beforeUnmount() {
    clearInterval(this.timer);
  },
};
</script>

<template>
  <div class="app" :class="isDark ? 'dark' : ''">
    <div class="clock">
      {{ dateTime.hours }}:{{ dateTime.minutes }}:{{ dateTime.seconds }}
    </div>
    <h1 class="title flex justify-center align-middle mt-5">Crestron</h1>
    <DarkModeToggle @click="isDark = !isDark" class="darktoggle" />
    <!-- <Nav :mode="mode" @toggle="toggle" /> -->
    <button @click="isShow = !isShow" class="drop_btn">Rooms</button>
    <div v-show="isShow" class="drop_outer">
      <div class="drop_menu flex flex-col">
        <button @click="isShow = !isShow" class="text-8xl drop_close">X</button>
        <button class="bb1 text-7xl">Living Room</button>
        <button class="bb2 text-7xl">Family Room</button>
        <button class="bb3 text-7xl">Master Bed</button>
        <button class="bb4 text-7xl">Landscape</button>
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
  margin-top: -15px;
  inset: 0;
  width: 100vw;
  min-height: 101vh;
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
.title {
  font-size: 8rem;
  padding: 20px;
}
.clock {
  margin: 10px;
  position: absolute;
  top: 5%;
  left: 5%;
  font-size: 4rem;
}
.darktoggle {
  position: fixed;
  top: 40px;
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
.bb1,
.bb2,
.bb3,
.bb4 {
  margin-top: 20%;
}

.drop_menu {
  position: absolute;
  border-radius: 10%;
  height: 100%;
  width: 50%;
  background-color: rgba(11, 11, 11, 0);
  backdrop-filter: blur(10px);
  top: 0%;
  right: 4%;
  font-size: 2rem;
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
  top: 5%;
  right: 60px;

  transition: all 0.3s ease-in-out;
}
.drop_btn {
  display: inline-block;
  margin-top: 15%;
  font-size: 7rem;
  border: 2px solid $primary;
  padding: 20px;
  border-radius: 10%;
  width: 50%;

  transition: all 0.3s ease-in-out;
}
.drop_btn:hover {
  border: 3px solid $lighter;
}
@media (max-width: 800px) {
  .app {
    margin: 0;
  }
  .drop_btn {
    font-size: 5rem;
    position: absolute;
    top: 40%;
    left: 40;
    transform: translate(-50%, -50%);
  }
  .drop_close {
    position: fixed;
    z-index: 3;
    margin-top: 5%;
  }
  .drop_menu {
    width: 100%;
    height: 100%;
    top: 5%;
    right: 0;
  }
  .title {
    font-size: 6rem;
    position: absolute;
    top: 15%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .clock {
    display: none;
  }
  .bb1,
  .bb2,
  .bb3,
  .bb4 {
    margin-top: 20%;
  }
}
</style>
