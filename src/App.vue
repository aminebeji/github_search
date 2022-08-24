<template>
  <MainLayout> </MainLayout>
</template>
<script>
import MainLayout from "@/layouts/MainLayout.vue";
export default {
  name: "App",
  components: {
    MainLayout,
  },
  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
        document.title = "Github Profiles";
      },
    },
  },
};
</script>
<style>
#app {
  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console,
    Monaco, monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0;
  padding: 0;
  background-color: #2c3e50;
  color: #fff;
  height: 100vh;
}
</style>
