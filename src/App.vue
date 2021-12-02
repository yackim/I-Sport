
<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <p>.</p>
  saluts
  <HelloWorld msg="I-SPORT" />
</template>

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello vue!'
  }
})

<style>

#app {
  background-color: #6CB983;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 00px;
}
</style>
