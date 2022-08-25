<template>
  <a
    :href="repo.html_url"
    target="_blank"
    :title="repo.html_url"
    class="repo_card"
  >
    <h1 class="repo_card_title"><Book></Book> {{ repo.name }}</h1>
    <p class="repo_card_discription">
      {{ repo.description }}
    </p>
    <div class="repo_stats">
      <div class="repo_stats_left">
        <span class="small_item_card">
          <div :style="{ backgroundColor: color }" class="orb_lang"></div>
          {{ repo.language }}
        </span>
        <span class="small_item_card">
          <Star></Star> {{ repo.stargazers_count.toLocaleString() }}</span
        >
        <span class="small_item_card">
          <ForkVue></ForkVue> {{ repo.forks.toLocaleString() }}
        </span>
      </div>
      <div class="repo_stats_right">
        <span class="small_item_card">{{ repo.size.toLocaleString() }} KB</span>
      </div>
    </div>
  </a>
</template>

<script>
import ForkVue from "@/assets/svg/Fork.vue";
import Star from "../../assets/svg/Star.vue";
import Book from "../../assets/svg/Book.vue";
import langColors from "@/tools/langColors";
export default {
  props: ["repo"],
  setup({ repo }) {
    return { color: langColors[repo.language] };
  },
  components: {
    ForkVue,
    Star,
    Book,
  },
};
</script>

<style lang="scss" scoped>
@import url("@/styles/ProjectCard.scss");
.small_item_card {
  svg {
    width: 15px !important;
  }
}
</style>
