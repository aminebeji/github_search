<template>
  <section class="top_container_info">
    <UsernameSection :user="user"></UsernameSection>
    <Location :user="user"></Location>
    <NumbersSections :user="user"></NumbersSections>
  </section>
  <section class="bottom_container">
    <Stats :stats="stats" />
  </section>
</template>
<script>
import UsernameSection from "@/parts/UsernameSection.vue";
import Location from "../parts/Location.vue";
import NumbersSections from "../parts/NumbersSections.vue";
import Stats from "./Stats.vue";
export default {
  props: ["user", "stats"],
  setup({ user, stats }) {
    return {
      user,
      stats,
    };
  },
  components: { UsernameSection, Location, NumbersSections, Stats, Stats },
};
</script>

<style lang="scss" scoped>
.top_container_info {
  background-color: #2c3e50;
  padding: 3rem 5rem 10rem;
  position: relative;
  z-index: 1;
}
.bottom_container {
  background-color: rgb(200, 225, 255);
}
</style>
