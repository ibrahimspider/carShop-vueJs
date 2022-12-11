<template>
  <div id="app">
    <NavBar />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>
<script>
import NavBar from "@/components/navbar/NavBar.vue";

const components = {
  NavBar,
};
export default {
  components,
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
