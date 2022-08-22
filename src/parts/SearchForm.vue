<template>
  <form>
    <input type="text" v-model="username" placeholder="search for github profile" />
    <button type="button" :onclick="Search">Search</button>
  </form>
</template>

<script>
import { ref } from "vue";

export default {
    name :"form-search",
  setup() {
    const Search = () => {
      console.log(username)
    };
    const username = ref("");
    return { username , Search };
  },
};
</script>

<style lang="scss" scoped></style>
