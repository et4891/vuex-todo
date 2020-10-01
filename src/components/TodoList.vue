<template>
  <div>
    <div v-if="todoList.length > 0">
      <TodoListItem
        :todo="todo"
        v-for="(todo, index) in todoList"
        :key="index"
      />
    </div>
    <div v-else>Please add a todo item</div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import TodoListItem from "./TodoListItem";

export default {
  name: "TodoList",
  components: {
    TodoListItem
  },
  computed: mapGetters(["todoList"]),
  methods: mapActions(["fetchTodos"]),
  created() {
    this.fetchTodos();
  }
};
</script>

<style scoped></style>
