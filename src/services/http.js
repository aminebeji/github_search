import { api } from "@/services/api.js";

export default {
  user(username) {
    return api(`/users/${username}`)
      .then((result) => {
        return { ...result.data, error: false };
      })
      .catch((err) => {
        throw  { error: true };
      });
  },
};
