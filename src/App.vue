<template>
  <MainLayout> </MainLayout>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import MainLayout from "@/layouts/MainLayout.vue";
export default {
  name: "App",
  components: {
    HelloWorld,
    MainLayout,
  },
  watch: {
    $route : {
      immediate : true,
      handler(to , from) {
        document.title = "Github Profiles"
      }
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  background-color: #2c3e50;
  color: #fff;
  min-height: 100vh;
}
</style>
