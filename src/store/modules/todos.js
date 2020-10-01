import api from "../../api/todo";

const state = {
  items: []
};

const getters = {
  itemList: ({ items }) => items
};

const actions = {
  // get list of todos
  fetchItems: async ({ commit }) => {
    try {
      const response = await api.fetchTodos();
      commit("setTodos", response.data.data);
    } catch (e) {
      console.log(e, "error in fetchTodos in actions");
    }
  }
  // add todos
  // modify todos
  // delete todos
  // mark todos as complete
};

const mutations = {
  // add todos
  setTodos: (state, todos) => {
    state.items = todos;
  }
  // modify todos
  // delete todos
  // mark todos as complete
};

export default {
  state,
  getters,
  actions,
  mutations
};
