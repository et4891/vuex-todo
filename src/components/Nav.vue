<template>
  <nav>
    <div class="ui secondary pointing menu">
      <router-link to="/" class="ui item active">Vuex Todo</router-link>

      <div class="right menu">
        <div class="horizontal">
          <router-link to="/" class="ui item">List</router-link>
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
