const state = {
  item: null
};

const getters = {
  getInputText: ({ item }) => item
};

const actions = {
  onInput({ commit }, e) {
    commit("setInputText", e.target.value);
  }
};

const mutations = {
  setInputText: (state, item) => {
    state.item = item;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
