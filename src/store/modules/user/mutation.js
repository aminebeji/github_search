const setUser = (state, payload) => {
  state.user = payload;
};
const setStats = (state, payload) => {
  state.stats = payload;
};
const setError = (state, payload) => {
  state.error = payload;
};
const setLoading = (state, payload) => {
  state.loading = payload;
};
export const userMutation = {
  setStats,
  setUser,
  setError,
  setLoading,
};
