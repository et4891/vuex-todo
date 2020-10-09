<template>
  <div>
    <Nav />
    <div class="container">
      <TodoInput />
      <TodoList />
    </div>
  </div>
</template>

<script>
import Nav from "./components/Nav";
import TodoList from "./components/TodoList";
import TodoInput from "@/components/TodoInput";

export default {
  name: "App",
  components: {
    Nav,
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
