<template>
  <NotFound :username="username" v-if="data.error"></NotFound>
  <ProfileComp
    :user="data.user"
    v-if="!data.loading && !data.error"
    :stats="data.stats"
  ></ProfileComp>
  <Loading v-if="data.loading" ></Loading>
</template>

<script>
import http from "@/services/http";
import { useRoute } from "vue-router";
import { reactive, watchEffect } from "vue";
import NotFound from "../components/404.vue";
import ProfileComp from "@/components/ProfileComp.vue";
import GhPolyglot from "gh-polyglot";
import Loading from "@/components/Loading.vue";
export default {
  setup() {
    const route = useRoute();
    const data = reactive({
      error: false,
      user: null,
      stats: { lang: null, repoMostLiked: null, StartsPerLanguages: null },
      loading: true,
    });
    const username = route.params.username;
    http
      .user(username)
      .then((info) => {
        data.user = info;
        document.title = "GitProfile | " + info.name;
      })
      .catch(() => {
        data.error = true;
      });
    const me = new GhPolyglot(`${username}`);
    me.userStats((error, stats) => {
      if (error) {
        console.error("Error:", error);
        data.error = true;

        data.loading = false;
      } else {
        console.log(stats);
        data.stats.lang = stats;
      }
    });
    http
      .repos(username)
      .then((info) => {
        var repoMostLiked = [];
        var StartsPerLanguages = [];
        repoMostLiked = info.data
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .map((item) => {
            return { label: item.name, value: item.stargazers_count };
          });
        data.stats.repoMostLiked = repoMostLiked;
      })
      .catch((er) => {
        console.log(er);
        data.error = true;
        data.loading = false;
      });
    watchEffect(() => {
      if (data.user && data.stats.lang && data.stats.repoMostLiked)
        data.loading = false;
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
