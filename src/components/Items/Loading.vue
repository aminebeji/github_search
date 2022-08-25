<template>
  <div class="spinner-border text-secondary" role="status">
    <span class="sr-only"></span>
  </div>
</template>

<script>
import RingLoader from "vue-spinner/src/RingLoader.vue";
export default {
  components: {
    RingLoader,
  },
};
</script>
<style lang="scss">
.spinner-border {
    position: absolute;
    top : 50%;
    left : 50%;
    z-index: 3;
}
</style>