<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <a href="/on">
      <button class="button">ON</button>
    </a>
    <a href="/off">
      <button class="button button2">OFF</button>
    </a>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
