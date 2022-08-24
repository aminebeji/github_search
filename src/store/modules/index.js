import { userMutation } from "./user/mutation";
import userState from "./user/state";

export const state = Object.assign(
  {},
  { user: userState.user, stats: userState.stats }
);

export const mutation = Object.assign({}, { userMutation });
