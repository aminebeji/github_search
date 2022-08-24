<template>
  <div class="top_pofile_section">
    <img
      :title="user.name"
      class="avatar"
      :src="user.avatar_url"
      :alt="user.username"
    />
    <h1 :title="user.name" class="username">{{ user.name }}</h1>
    <a
      :title="user.html_url"
      target="_blank"
      :href="user.html_url"
      class="userlogin"
      >@{{ user.login }}</a
    >
  </div>
</template>

<script>
export default {
  props : ["user"],
  setup({ user }) {
    return { user };
  },
};
</script>

<style lang="scss" scoped>
.top_pofile_section {
  padding-top: 3em;
}
.avatar {
  border-radius: 100%;
  width: clamp(150px, 200px, 250px);
  border: 5px solid;
}
.userlogin {
  color: rgb(0, 112, 243) !important;
  text-decoration: none;
  font-size: 18px;
}
.username {
  font-size: 28px;
  font-weight: 800;
  margin-top: 1.5em;
}
</style>
