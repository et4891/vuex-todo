<template>
  <div>
    <div class="ui checkbox">
      <input type="checkbox" :name="'item-' + todo._id" />
      <label>{{ todo.item }}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoListItem",
  props: ["todo"]
};
</script>

<style scoped></style>
