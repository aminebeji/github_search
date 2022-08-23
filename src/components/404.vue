<template>
  <div>
    <img src="" alt="not found" />
    <h1>User : {{username }}</h1> 
    <h1>Not Found !</h1>
  </div>
</template>

<script>
export default {
    props: ["username"],
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
