import Vue from "vue";
import Vuex from "vuex";
import todos from "./modules/todos";
import todo_input from "./modules/todo_input";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    todos,
    todo_input
  }
});
