<script></script>

<template>
  <router-view />
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
</style>
