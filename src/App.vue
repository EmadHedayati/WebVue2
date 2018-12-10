<template>
  <div id="app">
    <div class="row mb-5">
      <HeaderMenu/>
    </div>
    <router-view/>
  </div>
</template>

<script>
  import HeaderMenu from "./components/HeaderMenu";

  export default {
    name: 'App',

    components: {
      HeaderMenu,
    },

    methods: {
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>
