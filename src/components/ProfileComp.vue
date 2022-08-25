<template>
  <section class="top_container_info">
    <UsernameSection ></UsernameSection>
    <Location ></Location>
    <NumbersSections ></NumbersSections>
  </section>
  <section class="bottom_container">
    <Stats  />
    <RepoList ></RepoList> 
  </section>
</template>
<script>
import UsernameSection from "@/parts/UsernameSection.vue";
import Location from "../parts/Location.vue";
import NumbersSections from "../parts/NumbersSections.vue";
import Stats from "./Stats.vue";
import RepoList from "./RepoList.vue";
export default {
  components: {
    UsernameSection,
    Location,
    NumbersSections,
    Stats,
    Stats,
    RepoList,
  },
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
