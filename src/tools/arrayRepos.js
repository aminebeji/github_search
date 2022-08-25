import http from "@/services/http";

export const filterRepos = (repos) => {
  return repos
    .filter((i) => !i.fork)
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 8);
};


export const repoHttp = async (username , context , statsInfo) => {
    var result = await http.repos(username);
    if (result.error) {
        context.commit("setError", true);
        throw new Error("error in user info");
      } else {
        var reposList = filterRepos(result.data);
        statsInfo.repos = reposList;
        statsInfo.repoMostLiked = reposList.map((item) => {
          return { label: item.name, value: item.stargazers_count };
        });
        context.commit("setStats", statsInfo);
        context.commit("setLoading", false);
      }
}