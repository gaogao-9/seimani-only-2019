export const state = () => ({
  initialAnimated: false,
});

export const getters = {
  initialAnimated ({ initialAnimated }) {
    return initialAnimated;
  },
};

export const mutations = {
  initialAnimated (state, value) {
    state.initialAnimated = value;
  },
};

export const actions = {
  finishTopPageAnimation ({ commit }) {
    commit("initialAnimated", true);
  },
};
