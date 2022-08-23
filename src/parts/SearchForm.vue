<template>
  <form @submit="Search" class="form_container">
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
.error {
  color: red !important;
  border: 1px red solid !important ;
}
.form_container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 15px;
  margin: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.input_search {
  border: none;
  background-color: white;
  padding: 0.75em 2.5em;
  border-radius: 10px;
  width: 400px;
  text-align: center;
  font-size: 16px;
  color: #000;
}
</style>
