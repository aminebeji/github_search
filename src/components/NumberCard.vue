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
.number_card {
    border-radius: 5px;
    background-color: rgb(36, 41, 46);
    padding: 1em;
    font-size: 12px !important;
    width:150px;
}
.number {
    font-size: 1.5rem;
    font-weight: 700;
}
.title {
    font-size: 00.75em;
    margin-top: 1.5em;
    color: rgba(200, 255,255,0.7);
    text-transform: uppercase;
    letter-spacing: 1px;
}
</style>
