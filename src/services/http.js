import { api, CusttomApi } from "@/services/api.js";

export default {
  user(username) {
    return api(`/users/${username}`)
      .then((result) => {
        return { ...result.data, error: false };
      })
      .catch((err) => {
        throw { error: true };
      });
  },
  customHttp(url) {
    return CusttomApi(url)
      .then((result) => {
        return { data : result.data, error: false };
      })
      .catch((err) => {
        throw { error: true };
      });
  },
};
