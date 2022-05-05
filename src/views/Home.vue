<!-- ff70f70eb00b538370940bc7e3a97883 -->
<template>
  <div class="app" :class="isDark ? 'dark' : 'light'">
    <div class="clock" :class="isDark ? 'dark' : 'light'">
      {{ dateTime.hours }}:{{ dateTime.minutes }}:{{ dateTime.seconds }}
    </div>
    <h1
      :class="isDark ? 'dark' : 'light'"
      class="title flex justify-center align-middle"
    >
      Crestron
    </h1>
    <h6
      :class="isDark ? 'dark' : 'light'"
      class="title2 flex justify-center align-middle"
    >
      from Aevio
    </h6>
    <DarkModeToggle
      @click="isDark = !isDark"
      class="darktoggle"
      :class="isDark ? 'dark' : 'light'"
    />
    <!-- <Nav :mode="mode" @toggle="toggle" /> -->
    <button @click="isShow = !isShow" class="drop_btn">Rooms</button>
    <button @click="isShow2 = !isShow2" class="drop_btn2">Scenes</button>
    <button @click="isShow3 = !isShow3" class="drop_btn3">Security</button>
    <div v-show="isShow" class="drop_outer">
      <div class="drop_menu flex flex-col">
        <button @click="isShow = !isShow" class="drop_close text-8xl">X</button>
        <button @click="isShowB = !isShowB" class="bb1 text-7xl">
          Living Room
        </button>
        <button @click="isShowB = !isShowB" class="bb2 text-7xl">
          Family Room
        </button>
        <button @click="isShowB = !isShowB" class="bb3 text-7xl">
          Master Bed
        </button>
        <button @click="isShowB = !isShowB" class="bb4 text-7xl">
          Landscape
        </button>
      </div>
      <div v-show="isShowB" class="drop_menu flex flex-col">
        <button @click="isShowB = !isShowB" class="drop_close text-8xl">
          X
        </button>
        <button class="bb5 text-7xl">Direct Tv</button>
        <button class="bb6 text-7xl">Apple Tv</button>
        <button class="bb7 text-7xl">Roku</button>
        <button class="bb8 text-7xl">X-Box</button>
      </div>
    </div>
    <div v-show="isShow2" class="drop_menu flex flex-col">
      <button @click="isShow2 = !isShow2" class="drop_close text-8xl">X</button>
      <button class="bb5 text-7xl">Home</button>
      <button class="bb6 text-7xl">Goodnight</button>
      <button class="bb7 text-7xl">Chill</button>
      <button class="bb8 text-7xl">Party</button>
    </div>
    <div v-show="isShow3" class="drop_menu flex flex-col">
      <button @click="isShow3 = !isShow3" class="drop_close text-8xl">X</button>
      <button class="bb5 text-7xl">Cameras</button>
      <button class="bb6 text-7xl">Access</button>
      <button class="bb7 text-7xl">Alarm</button>
      <button class="bb8 text-7xl">911</button>
    </div>
  </div>
</template>

<script>
import DarkModeToggle from "../components/DarkModeToggle.vue";
const date = new Date();
export default {
  name: "app",
  data() {
    return {
      mode: "dark",
      isDark: false,
      isShow: false,
      isShow2: false,
      isShow3: false,
      isShowB: false,
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

<style lang="scss">
@import "../Sass/abstracts.scss";

.icon {
  position: absolute;
  margin-top: -6.4rem;
  margin-left: 1rem;
}

.dark {
  background-color: $darker;
  color: $primary;
}
.light {
  background-color: $lightest;
  color: $dark;
}
#app {
  font-family: "Poiret One", cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $darkest;
}
.title {
  padding: 20px;
  opacity: 0.3;
}
.title2 {
  padding: 20px;
  opacity: 0.3;
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
  top: 20px;
  right: 0;
  z-index: 1;
  padding: 0px 15px;
  height: 4rem;
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
.bb4,
.bb5,
.bb6,
.bb7,
.bb8 {
  margin-top: 30%;
  padding: 10px;
}

.drop_menu {
  position: absolute;
  border-radius: 10%;
  height: 100%;
  width: 100vw;
  background-color: rgba(11, 11, 11, 0);
  backdrop-filter: blur(12px);
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
  position: absolute;
  bottom: 13%;
  right: 60px;

  transition: all 0.3s ease-in-out;
}
.drop_btn,
.drop_btn2,
.drop_btn3 {
  display: inline-block;
  margin-top: 1%;
  font-size: 7rem;
  box-shadow: $primary -5px 5px 15px 5px;
  padding: 20px;
  border-radius: 10%;
  width: auto;

  transition: all 0.3s ease-in-out;
}
.drop_btn:hover,
.drop_btn:active {
  box-shadow: $primary 0px 0px 15px 10px;
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
  .drop_btn2 {
    font-size: 5rem;
    position: absolute;
    top: 60%;
    left: 40;
    transform: translate(-50%, -50%);
  }
  .drop_btn3 {
    font-size: 5rem;
    position: absolute;
    top: 80%;
    left: 40;
    transform: translate(-50%, -50%);
  }
  .drop_menu {
    width: 100%;
    height: 100%;
    top: 5%;
    right: 0;
  }
  .title {
    font-size: 5rem;
    position: absolute;
    top: 15%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .title2 {
    position: absolute;
    top: 19%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: transparent;
    font-size: 2rem;
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
