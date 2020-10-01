<template>
  <div>
    <Nav />
    <TodoList />
  </div>
</template>

<script>
import Nav from "./components/Nav";
import TodoList from "./components/TodoList";

export default {
  name: "App",
  components: {
    Nav,
    TodoList
  }
};
</script>

<style scoped></style>
