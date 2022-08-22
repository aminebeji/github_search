<template>
  <form class="form_container" >
    <input
      type="text"
      v-model="username"
      placeholder="search for github profile"
      :class="{ error: error }"
      class="input_search"
    />
    <button type="button" :onclick="Search">Search</button>
  </form>
</template>

<script>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "form-search",
  setup() {
    const username = ref("");
    const Click = ref(false);
    const error = computed(() => Click && username.value.length < 1);
    const route = useRouter();
    const Search = () => {
      Click.value = true;
      console.log(error);
      if (username.value.length > 1) {
        route.push(`/user/${username.value}`);
      }
    };

    return { username, Search, error };
  },
  watch: {
    error(NewErr, oldErr) {
      console.log(NewErr, oldErr);
    },
  },
};
</script>

<style lang="scss" scoped>
.error {
  color: red;
  background-color: rebeccapurple;
}
.form_container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 15px;
  margin: auto;
  position: absolute;
  top:50%;
  left : 50%;
  transform: translate(-50%, -50%);
}
.input_search {
  border: none;
  background-color: white;
  padding: 0.75em 2.5em;
  border-radius: 10px;
  width:fit-content;
text-align: center;
font-size: 18px;
font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, monospace;
}
</style>
