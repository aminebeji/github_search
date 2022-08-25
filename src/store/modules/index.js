import { userMutation } from "./user/mutation";
import userState from "./user/state";
import { userAction } from "./user/actions";
export const state = { ...userState };

export const mutation = {
  ...userMutation,
};

export const actions = {
  ...userAction,
};
