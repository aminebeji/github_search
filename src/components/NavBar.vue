<template>
  <CornerGit></CornerGit>
</template>

<script>
import CornerGit from "@/parts/CornerGit.vue";
export default {
  name: "nav-bar",
  components: {
    CornerGit,
  },
};
</script>

<style lang="css">
.title_container {
  display: flex;
  align-items: center;
  gap: 15px;
  text-decoration: none;
  padding: 1em;
}
.git_title {
  margin: 0;
  font-size: 30px;
  color: #fff;
}
.github_logo {
  width: 45px;
  background-color: #fff;
  border-radius: 100%;
}
</style>
