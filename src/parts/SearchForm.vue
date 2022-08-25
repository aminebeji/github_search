<template>
  <form @submit="Search" class="container form_container">
    <input
      type="text"
      v-model="username"
      placeholder="search for github profile"
      class="input_search"
      :class="{ error: error }"
    />
    <button type="button" class="btn btn-primary" :onclick="Search">
      Search
    </button>
  </form>
</template>

<script>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "form-search",
  setup() {
    const username = ref("");
    const error = ref(false);
    const route = useRouter();
    const Search = () => {
      if (username.value.length > 1) {
        route.push(`/user/${username.value}`);
      } else {
        error.value = true;
      }
    };

    return { username, Search, error };
  },
};
</script>

<style lang="scss" scoped>
@import url("@/styles/SearchForm.scss");
</style>
