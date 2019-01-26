<template>
  <div id="app">
    <div class="row mb-5">
      <HeaderMenu ref="headerMenu"/>
    </div>
    <transition
      name="fade"
      mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
  import HeaderMenu from "./components/partials/HeaderMenu";

  export default {
    name: 'App',

    components: {
      HeaderMenu,
    },

    methods: {
        onLogin: function () {
            this.$refs.headerMenu.onLogin();
        }
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
