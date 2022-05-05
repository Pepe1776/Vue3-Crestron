<script></script>

<template>
  <router-view />
</template>

<style lang="scss">
@import "./Sass/abstracts.scss";

@import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Nixie+One&family=Poiret+One&display=swap");
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
