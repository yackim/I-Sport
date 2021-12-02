<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

 <!-- <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>See <code>README.md</code> for more information.</p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Docs
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>
-->

<p>
  I-Sport est un site de l'ISPM </p>
  <p>où les étudiants peuvent suivre en direct </p>
  <p>les matchs inter-classe organisés au sein de l'institut.
</p>

 <p> <button type="button" @click=" ">S'inscrire</button></p>    
 <p> <button type="button" @click=" ">Se connecter</button></p>
 <!-- <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
  -->
 

</template>

<style scoped>
a {
  color: red;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
button {
  background-color: #000D05;
  padding: 10px 25px;
  border-radius: 4px;
  color: white;
}
#fe{
  fon-color:black;
}

#connecter {
  background-color: red;
  
}
</style>
