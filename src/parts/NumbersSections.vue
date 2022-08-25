<template>
  <div class="align_display cards">
    <NumberCard title="Repositories" :number="user.public_repos"></NumberCard>
    <NumberCard title="Followers" :number="user.followers"></NumberCard>
    <NumberCard title="Following" :number="user.following"></NumberCard>
  </div>
</template>

<script>
import NumberCard from "@/components/cards/NumberCard.vue";
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  setup() {
    const store = useStore();
    return { user: computed(() => store.state.user) };
  },
  components: { NumberCard },
};
</script>

<style lang="scss" scoped>
.cards {
  margin-top: 2.5em;
  gap: 5px;
}
</style>
