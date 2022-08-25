<template>
  <NotFound :username="username" v-if="data.error"></NotFound>
  <ProfileComp v-if="!data.loading && !data.error"></ProfileComp>
  <Loading v-if="data.loading"></Loading>
</template>

<script>
import { useRoute } from "vue-router";
import { computed, onMounted, reactive } from "vue";
import { useStore } from "vuex";
import NotFound from "../components/Items/404.vue";
import ProfileComp from "@/components/ProfileComp.vue";
import Loading from "@/components/Items/Loading.vue";
export default {
  setup() {
    const route = useRoute();
    const store = useStore();
    const username = route.params.username;

    const data = reactive({
      error: computed(() => store.state.error),
      loading: computed(() => store.state.loading),
    });
    onMounted(async () => {
      try {
        await store.dispatch("fetchUser", username);
        await store.dispatch("fetchUserStats", username);
      } catch (err) {
        data.error = true;
        data.loading = false;
      }
    });
    return { data, username };
  },
  components: {
    NotFound,
    ProfileComp,
    Loading,
  },
};
</script>

<style lang="scss" scoped></style>
