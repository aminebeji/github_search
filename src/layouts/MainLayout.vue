<template>
  <NavBar />
  <main>
    <router-view />
  </main>
</template>

<script>
import NavBar from "@/components/Items/NavBar.vue";
export default {
  props: ["children"],
  setup() {
    return {};
  },
  components: { NavBar },
};
</script>

<style lang="scss" scoped></style>
