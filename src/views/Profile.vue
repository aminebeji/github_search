<template>
  <NotFound :username="username" v-if="data.error"></NotFound>
  <ProfileComp :user="data.user" v-if="!data.error && data.user"></ProfileComp>
</template>

<script>
import http from "@/services/http";
import { useRoute } from "vue-router";
import { reactive } from "vue";
import NotFound from "../components/404.vue";
import ProfileComp from "@/components/ProfileComp.vue";
export default {
  setup() {
    const route = useRoute();
    const data = reactive({ error: false, user: null });
    http
      .user(route.params.username)
      .then((info) => {data.user = info
      document.title = "GitProfile | " + info.name
      })
      .catch(() => {
        data.error = true;
      });

    return { data, username: route.params.username };
  },
  components: {
    NotFound,
    ProfileComp,
  },
};
</script>

<style lang="scss" scoped></style>
