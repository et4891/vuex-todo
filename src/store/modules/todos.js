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
      const response = await api.fetch();
      commit("setTodos", response.data.data);
    } catch (e) {
      console.log(e, "error in fetchTodos in actions");
    }
  },
  addItem: async ({ commit, rootState }) => {
    try {
      const { item } = rootState.todo_input;
      if (!item) return;

      const response = await api.create(item);
      const newTodoList = [...rootState.todos.items, response.data.data];
      commit("setTodos", newTodoList);
    } catch (e) {
      console.log(e, "error in add item in actions");
    }
    // call axios to add
    // get the return values
    // get the items in state, then either push into the array then commit to setTodos mutation
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
