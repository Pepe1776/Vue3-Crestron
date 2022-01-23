<script>
import Toggle from "@/components/Toggle";
export default {
  props: ["mode"],
  components: {
    Toggle,
  },
};
</script>

<template>
  <header>
    <nav>
      <router-link type="radio" class="nav-link" to="/">Home</router-link>
      <router-link type="radio" class="nav-link" to="/Living"
        >Living</router-link
      >
      <router-link type="radio" class="nav-link" to="/Family"
        >Family</router-link
      >
      <router-link type="radio" class="nav-link" to="/Bedroom"
        >Bedroom</router-link
      >
      <router-link type="radio" class="nav-link" to="/Backyard"
        >Backyard</router-link
      >
    </nav>
    <h1>{{ mode }} Mode</h1>
    <Toggle :mode="mode" @toggle="$emit('toggle')" />
  </header>
</template>

<style lang="scss">
@import "../Sass/abstracts.scss";

header {
  bottom: 0rem;
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px, 25px;
  height: 10%;
  background-color: $lighter;
  transition: background 0.6s ease-in-out;
  text-transform: uppercase;
  font-weight: 900;
}
header h1 {
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: 900;
}
header nav {
  display: flex;
  height: 6rem;
  transition: all 0.6s ease-in-out;
}
header nav .nav-link {
  display: flex;
  align-items: center;
  padding: 0px 15px;
  font-size: 3rem;
  border-radius: 2rem;
}
header nav .nav-link:hover {
  color: $primary;
  border: 3px solid black;
  // background-color: $darkest;
  transform: scale(1.1);
}
.dark header {
  background: $darkest;
}
// #nav {
//   padding: 30px;
// }

nav a {
  font-weight: bold;
  color: $darker;
}
nav a .router-link:active {
  color: $primaryl;
}
.dark header nav .nav-link:visited {
  color: $lighter;
}
.dark header nav .nav-link:hover {
  color: $primary;
  background-color: $lighter;
  transform: scale(1.1);
  transition: transform 0.2s ease-in-out;
}
.dark header nav .nav-link:active {
  color: $primary;
  transform: scale(1.1);
  transition: transform 0.2s ease-in-out;
}
.active {
  background-color: $primary;
  transform: scale(1.2);
  transition: transform 0.2s ease-in-out;
}
</style>
