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
      commit("setInputText", null, { root: true }); // this calls mutation from todo_input module
    } catch (e) {
      console.log(e, "error in add item in actions");
    }
    // call axios to add
    // get the return values
    // get the items in state, then either push into the array then commit to setTodos mutation
  },
  isCompleted: async (context, todo) => {
    todo.completed = !todo.completed;
    await api.isCompleted(todo);
  },
  remove: async ({ commit }, _id) => {
    const response = await api.remove(_id);
    if (response.data.status) {
      commit("remoteTodo", _id);
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
  },
  remoteTodo: (state, _id) => {
    state.items = state.items.filter(item => item._id !== _id);
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
