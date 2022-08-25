<template>
  <div class="stats_main">
    <Langauges v-if="stats.lang" :stats="stats.lang"></Langauges>
    <MostStarred
      v-if="stats.repoMostLiked"
      :stats="stats.repoMostLiked"
    ></MostStarred>
  </div>
</template>

<script>
import Langauges from "@/parts/Stats/Langauges.vue";
import MostStarred from "@/parts/Stats/MostStarred.vue";
import { computed, reactive } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();

    return {
      stats: reactive({
        lang: store.state.stats.lang,
        repoMostLiked: store.state.stats.repoMostLiked,
      }),
    };
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
