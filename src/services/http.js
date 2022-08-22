import { api } from "@/services/api.js";

export default {
  user(username) {
    return api(`/users/${username}`);
  },
};
