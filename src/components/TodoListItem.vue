<template>
  <tr>
    <td class="selectable center aligned one wide column">
      <input type="checkbox" class="complete-checkbox" :name="'item-' + todo._id" />
    </td>
    <td>
      <label>{{ todo.item }}</label>
    </td>
    <td class="selectable right aligned one wide column">
      <button class="ui violet basic button mini">Edit</button>
    </td>
    <td class="selectable right aligned one wide column">
      <button class="ui red basic button mini">X</button>
    </td>
  </tr>
</template>

<script>
export default {
  name: "TodoListItem",
  props: ["todo"]
};
</script>

<style scoped>
.ui.table tr td {
  border: 0 !important;
}

.complete-checkbox {
  transform: scale(2);
}
</style>
