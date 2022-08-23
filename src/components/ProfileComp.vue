<template>
  <div class="top_pofile_section">
    <img
      :title="user.name"
      class="avatar"
      :src="user.avatar_url"
      :alt="user.username"
    />
    <h1 :title="user.name" class="username">{{ user.name }}</h1>
    <a :title="user.html_url" target="_blank" :href="user.url" class="userlogin"
      >@{{ user.login }}</a
    >
  </div>
  <div class="align_display info_container">
    <h1 class="small_text">
      <Location></Location>
      {{ user.location }}
    </h1>
    <h1 class="small_text"><Calendar></Calendar> Joined {{ joinedAt }}</h1>
  </div>
     <div class="align_display cards" >
       <NumberCard title="Repositories" :number="user.public_repos" ></NumberCard>
      <NumberCard title="Followers" :number="user.followers" ></NumberCard>
      <NumberCard title="Following" :number="user.following" ></NumberCard>
     </div>

</template>

<script>
import { reactive, toRefs } from "vue";
import Location from "@/assets/svg/Location.vue";
import moment from "moment";
import Calendar from "../assets/Calendar.vue";
import NumberCard from "./NumberCard.vue";
export default {
  props: ["user"],
  setup({ user }) {
    const state = reactive({
      count: 0,
    });

    return {
      ...toRefs(state),
      joinedAt: new moment(user.created_at).format("LLL"),
    };
  },
  components: { Location, Calendar, NumberCard },
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
.info_container {
  margin-top: 25px;
    gap: 45px ; 

}
.cards {
  margin-top: 2.5em;
    gap: 5px ; 
  
}
</style>
