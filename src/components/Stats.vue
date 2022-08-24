<template>
  <div class="stats_main">
    <Langauges :stats="stats.lang"></Langauges>
    <MostStarred :stats="stats.repoMostLiked"></MostStarred>
  </div>
</template>

<script>
import Langauges from "@/parts/Stats/Langauges.vue";
import MostStarred from "@/parts/Stats/MostStarred.vue";
export default {
  props: ["stats"],
  setup({ stats }) {
    return { stats };
  },
  components: { Langauges, MostStarred },
};
</script>

<style lang="scss" scoped>
.stats_main {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2em;
  margin-top: -8em !important;
  max-width: 1200px !important;
  margin: auto;
  position: relative;
  z-index: 2;
}
</style>
