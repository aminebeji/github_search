<template>
  <div class="number_card">
    <h1 class="number">{{ number }}</h1>
    <h3 class="title">{{ title }}</h3>
  </div>
</template>

<script>
export default {
  name: "number-card",
  props: ["number", "title"],
};
</script>

<style lang="scss" scoped>
@import url("@/styles/NumberCard.scss");
</style>
