<template>
  <div>
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  props: ["children"],
  setup() {
    return {};
  },
  components: { NavBar },
};
</script>

<style lang="scss" scoped></style>
