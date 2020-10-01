<template>
  <nav>
    <div class="ui secondary pointing menu">
      <a href="/" class="active item">
        Vuex Todo
      </a>
      <div class="right menu">
        <div class="horizontal">
          <a href="/" class="ui item">List</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav"
};
</script>

<style scoped>
nav {
  margin-bottom: 20px;
}

.horizontal {
  display: flex;
  flex-direction: row;
}
</style>
