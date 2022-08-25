<template>
  <div v-if="stats.repos" class="repo_container">
    <header>
      <h1 class="stats_title title_repo">Top Repos</h1>
    </header>
    <TransitionGroup tag="ul" name="fade" class="repo_list">
      <li class="repo_item_list" v-for="repo in stats.repos" :key="repo.id">
        <ProjectCard :repo="repo"></ProjectCard>
      </li>
    </TransitionGroup>
  </div>
</template>

<script>
import ProjectCard from "@/components/cards/ProjectCard.vue";
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
      const store = useStore();
    return { stats :computed(() => store.state.stats)  };
  },
  components: { ProjectCard },
};
</script>

<style lang="scss" scoped>
@import url("@/styles/RepoList.scss");
</style>
