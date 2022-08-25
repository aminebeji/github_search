import http from "@/services/http";
import { filterRepos, repoHttp } from "@/tools/arrayRepos";
import GhPolyglot from "gh-polyglot";

const fetchUser = (context, username) => {
  http
    .user(username)
    .then((info) => {
      context.commit("setUser", info);
    })
    .catch(() => {
      context.commit("setError", true);
      context.commit("setLoading", false);
      throw new Error("error in user info");
    });
};

const fetchUserStats = async (context, username) => {
  var statsInfo = {};
  const me = new GhPolyglot(`${username}`);
  await me.userStats(async (error, stats) => {
    if (error) {
      context.commit("setError", true);
      throw new Error("error in user info");
    } else {
      statsInfo.lang = stats;
      await repoHttp(username, context , statsInfo)
    }
  });
};

export const userAction = { fetchUser, fetchUserStats };
