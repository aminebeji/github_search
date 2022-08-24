<template>
  <div class="align_display info_container">
    <h1 :v-if="user.location" class="small_text">
      <Location></Location>
      {{ user.location }}
    </h1>
    <h1 :v-if="joinedAt" class="small_text">
      <Calendar></Calendar> Joined {{ joinedAt }}
    </h1>
  </div>
</template>

<script>
import Location from "@/assets/svg/Location.vue";
import Calendar from "@/assets/Calendar.vue";
import moment from "moment";

export default {
  props: ["user"],

  setup({ user }) {
    return { user, joinedAt: new moment(user.created_at).format("LLL") };
  },
  components: { Location, Calendar },
};
</script>

<style lang="scss" scoped>
.info_container {
  margin-top: 25px;
  gap: 45px;
}
</style>
