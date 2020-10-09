<template>
  <tr>
    <td class="selectable center aligned one wide column">
      <input
        type="checkbox"
        class="complete-checkbox"
        :name="'item-' + todo._id"
      />
    </td>
    <td>
      <label>{{ todo.item }}</label>
    </td>
    <td class="selectable center aligned one wide column">
      <div class="ui icon button violet inverted">
        <i class="edit outline icon"></i>
      </div>
    </td>
    <td class="selectable center aligned one wide column">
      <div class="ui icon button red inverted">
        <i class="trash alternate outline icon"></i>
      </div>
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
