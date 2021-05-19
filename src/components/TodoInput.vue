<template>
  <div class="ui right labeled left icon input fluid">
    <i class="tags icon"></i>
    <input
      type="text"
      placeholder="Enter item"
      @input="onInput"
      :value="getInputText"
    />
    <a class="ui tag label button green" @click="addItem">
      Add Item
    </a>
    <div class="ui left labeled button" tabindex="0">
      <a class="ui basic label">
        {{ itemList.length }}
      </a>
      <div class="ui icon button yellow">
        <i class="trash alternate icon"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "TodoInput",
  computed: mapGetters(["getInputText", "itemList"]),
  methods: mapActions(["onInput", "addItem"])
};
</script>

<style scoped>
div {
  margin-bottom: 20px;
}
</style>
