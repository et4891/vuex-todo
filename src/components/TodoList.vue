<template>
  <div>
    <div v-if="itemList.length > 0">
      <TodoListItem
        :todo="todo"
        v-for="(todo, index) in itemList"
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
  computed: mapGetters(["itemList"]),
  methods: mapActions(["fetchItems"]),
  created() {
    this.fetchItems();
  }
};
</script>

<style scoped></style>
