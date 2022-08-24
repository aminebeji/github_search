const setUser = (state, payload) => {
  state.user = payload;
  console.log("user state changed:", state.user);
};
const setStats = (state, payload) => {
  state.stats = payload;
  console.log("stats state changed:", state.stats);
};

export default {
  setStats,
  setUser,
};
