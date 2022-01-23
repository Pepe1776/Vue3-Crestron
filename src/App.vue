<script>
import Nav from "@/components/Nav";
export default {
  name: "app",
  data() {
    return {
      mode: "dark",
    };
  },
  components: {
    Nav,
  },
  methods: {
    toggle() {
      if (this.mode === "dark") {
        this.mode = "light";
      } else {
        this.mode = "dark";
      }
    },
  },
};
</script>

<template>
  <div class="app" :class="mode">
    <Nav :mode="mode" @toggle="toggle" />
    <router-view />
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
  background-color: $darkest;
  color: $lighter;
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
</style>
