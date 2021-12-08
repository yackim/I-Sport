<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Inscription msg="Welcome to Your Vue.js App"/>
 
  </div>
</template>

<script>
// @ is an alias to /src
import Inscription from '@/components/Inscription.vue'

export default {
  name: 'Ins',
  components: {
    Inscription
  }
}
</script>
