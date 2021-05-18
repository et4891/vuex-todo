<template>
  <tr>
    <td class="selectable center aligned one wide column">
      <input
        @click="isCompleted(todo)"
        type="checkbox"
        class="complete-checkbox"
        :name="'item-' + todo._id"
        :checked="todo.completed"
      />
    </td>
    <td>
      <div
        class="ui labeled icon input fluid"
        v-if="getEditableId === todo._id"
      >
        <input type="text" :value="todo.item" />
      </div>
      <label v-else :class="{ completed: todo.completed }">{{
        todo.item
      }}</label>
    </td>
    <td class="selectable center aligned one wide column">
      <div
        v-if="getEditableId === todo._id"
        class="ui icon button green inverted"
      >
        <i class="save icon"></i>
      </div>
      <div
        v-else
        @click="setEditableId(todo._id)"
        class="ui icon button violet inverted"
      >
        <i class="edit outline icon"></i>
      </div>
    </td>
    <td class="selectable center aligned one wide column">
      <div
        v-if="getEditableId === todo._id"
        @click="setEditableId(null)"
        class="ui icon button red"
      >
        <i class=" outline icon">X</i>
      </div>
      <div v-else @click="remove(todo._id)" class="ui icon button red inverted">
        <i class="trash alternate outline icon"></i>
      </div>
    </td>
  </tr>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "TodoListItem",
  props: ["todo"],
  computed: mapGetters(["getEditableId"]),
  methods: mapActions(["isCompleted", "remove", "setEditableId"])
};
</script>

<style scoped>
.ui.table tr td {
  border: 0 !important;
}

.complete-checkbox {
  transform: scale(2);
}

.completed {
  text-decoration: line-through;
}
</style>
