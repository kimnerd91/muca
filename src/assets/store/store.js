import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      isPlayerVisible: false,
      // Add other state properties as needed
    };
  },
  mutations: {
    setPlayerVisibility(state, isVisible) {
      state.isPlayerVisible = isVisible;
    },
    // Add other mutations as needed
  },
  actions: {
    updatePlayerVisibility({ commit }, isVisible) {
      commit('setPlayerVisibility', isVisible);
    },
    // Add other actions as needed
  },
  getters: {
    getPlayerVisibility: (state) => state.isPlayerVisible,
    // Add other getters as needed
  },
});

export default store;