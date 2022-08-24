<template>
  <main class="search_container">
    <SearchForm></SearchForm>
  </main>
</template>

<script>
import SearchForm from "@/parts/SearchForm.vue";
export default {
  setup() {
    return {};
  },
  components: { SearchForm },
};
</script>

<style lang="scss" scoped>
.search_container {
  min-height: 100vh;
}
</style>
