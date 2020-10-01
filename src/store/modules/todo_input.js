const state = {
  inputText: null
};

const getters = {
  getInputText: ({ inputText }) => inputText
};

const actions = {
  onInput({ commit }, e) {
    commit("setInputText", e.target.value);
  }
};

const mutations = {
  setInputText: (state, inputText) => {
    state.inputText = inputText;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
