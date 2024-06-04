<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  <!-- <VerticalSections /> -->
  <VueMain />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import VerticalSections from './components/impl.vue'
import VueMain from './components/main.vue'

export default {
  name: 'App',
  components: {
    VueMain
    // HelloWorld,
    // VerticalSections
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
