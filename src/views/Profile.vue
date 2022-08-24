<template>
  <NotFound :username="username" v-if="data.error"></NotFound>
  <ProfileComp
    :user="data.user"
    v-if="!data.error && data.user && data.stats"
    :stats="data.stats"
  ></ProfileComp>
</template>

<script>
import http from "@/services/http";
import { useRoute } from "vue-router";
import { reactive, watchEffect } from "vue";
import NotFound from "../components/404.vue";
import ProfileComp from "@/components/ProfileComp.vue";
import GhPolyglot from "gh-polyglot";
export default {
  setup() {
    const route = useRoute();
    const data = reactive({ error: false, user: null, stats: null });
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
      } else {
        console.log(stats);
        data.stats = { lang: stats };
      }
    });
    // watchEffect(() => {
    //   if (data.user) {
    //     http
    //       .customHttp(data.user.repos_url)
    //       .then((info) => {
    //         var repoMostLiked = [];
    //         var StartsPerLanguages = [];
    //         repoMostLiked = info.data
    //           .sort((a, b) => b.stargazers_count - a.stargazers_count)
    //           .map((item) => {
    //             return { label: item.name, value: item.stargazers_count };
    //           });
    //         console.log("repoMostLiked ===>", repoMostLiked);
    //         data.stats = { repoMostLiked :repoMostLiked }
    //       })
    //       .catch(() => {
    //         data.error = true;
    //       });
    //   }
    // });
    return { data, username };
  },
  components: {
    NotFound,
    ProfileComp,
  },
};
</script>

<style lang="scss" scoped></style>
