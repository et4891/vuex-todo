<template>
  <div class="container">
    <TodoInput />
    <TodoList />
  </div>
</template>

<script>
import TodoInput from "@/components/TodoInput";
import TodoList from "@/components/TodoList";

export default {
  name: "Home",
  components: {
    TodoInput,
    TodoList
  }
};
</script>

<style scoped>
.container {
  width: 90%;
  margin: auto;
}
</style>
