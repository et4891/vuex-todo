<template>
  <div class="ui right labeled left icon input fluid">
    <i class="tags icon"></i>
    <input type="text" placeholder="Enter item" @input="onInput" />
    <a class="ui tag label button green" @click="onAdd">
      Add Item
    </a>
    <div class="ui left labeled button" tabindex="0">
      <a class="ui basic label">
        0
      </a>
      <div class="ui icon button yellow">
        <i class="trash alternate icon"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoInput",
  data() {
    return {
      inputText: null
    };
  },
  methods: {
    onInput(e) {
      this.inputText = e.target.value;
    },
    onAdd() {
      console.log(this.inputText);
    }
  }
};
</script>

<style scoped>
div {
  margin-bottom: 20px;
}
</style>
