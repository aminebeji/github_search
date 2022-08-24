import userMutation from "./user/mutation";
import userState from "./user/state"

export const state =  Object.assign({}, {userState});

export const mutation = Object.assign({}, { userMutation });
