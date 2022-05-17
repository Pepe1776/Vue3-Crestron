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
    <!-- Dial -->
    <div class="dial" :class="isDark ? 'dark' : 'light'">
      <div :class="isDark ? 'dark' : 'light'" class="dial-bg"></div>
      <div :class="isDark ? 'dark' : 'light'" class="dial-text">Volume</div>
      <div :class="isDark ? 'dark' : 'light'" class="dial-num">
        {{ myNumber }}
      </div>
      <div :class="isDark ? 'dark' : 'light'" class="dial-num dial-num2">0</div>
      <div :class="isDark ? 'dark' : 'light'" class="dial-per">%</div>
    </div>
    <!-- sliders -->
    <div class="sliders" :class="isDark ? 'dark' : 'light'">
      <slider
      
        color="#189aba"
        tooltip="true"
        v-model="myNumber"
        class="slider-vol"
      />
      <div :class="isDark ? 'dark' : 'light'" class="slider-vol-label mt-10">
        Volume
      </div>
      <slider color="#189aba" tooltip="true" class="slider-lts mt-10" />
      <div :class="isDark ? 'dark' : 'light'" class="slider-lts-label mt-10">
        Lights
      </div>
    </div>
    <!-- open tv remote -->
    <div class="open-tv" :class="isDark ? 'dark' : 'light'">
      <button class="open-tv-btn">Open TV Remote</button>
    </div>

    <!-- bottom Nav bar -->
    <div class="bottom-nav" :class="isDark ? 'dark' : 'light'">
      <div class="tv-base" :class="isDark ? 'dark' : 'light'">
        <ToggleBasic class="toggle-tv" />
        <div :class="isDark ? 'dark' : 'light'" class="drop_btn">TV</div>
      </div>
      <div class="lights-base" :class="isDark ? 'dark' : 'light'">
        <ToggleBasic class="toggle-lights" />
        <div :class="isDark ? 'dark' : 'light'" class="drop_btn2">Lights</div>
      </div>
      <div class="music-base" :class="isDark ? 'dark' : 'light'">
        <ToggleBasic class="toggle-music" />
        <div :class="isDark ? 'dark' : 'light'" class="drop_btn3">Music</div>
      </div>
    </div>

    <!-- modal start -->
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
import slider from "vue3-slider";
import ToggleBasic from "../components/ToggleBasic.vue";
import DarkModeToggle from "../components/DarkModeToggle.vue";
const date = new Date();
const myNumber = new Number(0);
console.log(myNumber);
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
    ToggleBasic,
    slider,
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
.app{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  margin-top: 60%;
}
.dial-bg {
  position: absolute;
  top: 5%;
  left: 17%;
  width: 275px;
  height: 275px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0);
  box-shadow: $primary 0px 5px 10px;
  border: $primary 1px solid;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
}
.dial-num {
  position: absolute;
  top: 15%;
  left: 44%;
  border-radius: 50%;
  color: $primary;
  font-size: 5rem;
  text-shadow: $primary 0px 5px 10px;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
}
.dial-num2 {
  z-index: 2;
  position: absolute;
  top: 15%;
  left: 40%;
  display: none;
}
.dial-per {
  position: absolute;
  top: 14%;
  left: 66%;
  border-radius: 50%;
  color: $primary;
  font-size: 3rem;
  text-shadow: $primary 0px 5px 10px;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
}
.dial-text {
  position: absolute;
  top: 24%;
  left: 39%;
  border-radius: 50%;
  color: $primary;
  font-size: 3rem;
  text-shadow: $primary 0px 5px 10px;
  z-index: 4;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  background: transparent;
}
.sliders {
  position: absolute;
  top: 46%;
  right: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 25%;
  width: 90%;
  font-size: 3rem;
}
.sliders > div {
  font-size: 3rem;
}
.open-tv {
  position: absolute;
  top: 70%;
  right: 6%;
  width: 90%;
  font-size: 3rem;
  box-shadow: $primary 0px 5px 10px;
  border-radius: 7%;
  border: $primary 1px solid;
}

.tv-base,
.lights-base,
.music-base {
  display: inline-block;
  margin-top: 1%;
  font-size: 4rem;
  box-shadow: $primary -5px 5px 15px 5px;
  padding: 5px;
  border-radius: 10%;
  width: 27%;
  height: 15vh;
  align-items: end;
  transition: all 0.3s ease-in-out;
}

.bottom-nav {
  position: absolute;
  top: 79%;
  left: 0%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100vw;
}
.toggle-tv {
  position: absolute;
  top: 0;
  left: 12%;
  background-color: transparent;
}
.toggle-lights {
  position: absolute;
  top: 0;
  left: 44%;
  background-color: transparent;
}
.toggle-music {
  position: absolute;
  top: 0;
  left: 75%;
  background-color: transparent;
}

.drop_btn:hover,
.drop_btn:active {
  box-shadow: $primary 0px 0px 15px 10px;
}
@media (max-width: 800px) {
  .app {
    margin: 0;
    width: 100%;
    height: min-content;
  }
  .drop_btn {
    font-size: 3rem;
  }
  .drop_btn2 {
    font-size: 3rem;
  }
  .drop_btn3 {
    font-size: 3rem;
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
    top: 104%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .title2 {
    position: absolute;
    top: 107%;
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
