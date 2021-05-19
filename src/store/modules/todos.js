import api from "../../api/todo";

const state = {
  items: [],
  editableId: null
};

const getters = {
  itemList: ({ items }) => items,
  getEditableId: ({ editableId }) => editableId
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
  },
  modifyItem: async ({ commit }, { _id, item }) => {
    try {
      const response = await api.modify(_id, item);
      if (response.status !== 200) return;

      // replace old todo lists to the new one
      // set editable id to null so the input will not be shown
      commit("setTodos", response.data.data);
      commit("setEditableId", null);
    } catch (e) {
      console.log(e, "error in modify item in actions");
    }
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
  },
  setEditableId: ({ commit }, _id) => {
    commit("setEditableId", _id);
  }
};

const mutations = {
  // add todos
  setTodos: (state, todos) => {
    state.items = todos;
  },
  remoteTodo: (state, _id) => {
    state.items = state.items.filter(item => item._id !== _id);
  },
  setEditableId: (state, _id) => {
    state.editableId = _id;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
