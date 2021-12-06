<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <body>
  <!--
    <header>
      <li>
        <o><button type="button" @click="Inscription.vue"><a href="Inscription.vue">S'inscrire</a></button></o>
        <o><button type="button" @click="Connecter.vue" ><a href="Connecter.vue">Connecter</a></button></o>
      </li>
    </header>
-->
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


 
 <!-- <p> <input type="button" href="Inscription.vue" value=a>S'inscrire</p>-->
 <!-- <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
  -->

<!-- Start: Header Dark -->
     <div >
      <div class="header-dark">
          <nav class="navbar navbar-dark navbar-expand-lg navigation-clean-search">
              <div class="container"><a class="navbar-brand" href="#">   </a><!--<button data-toggle="collapse" class="navbar-toggler" data-target="#navcol-1"><span class="sr-only">   </span><span class="navbar-toggler-icon"></span></button>-->
                  <div class="collapse navbar-collapse"
                      id="navcol-1">
                      <!--
                      <ul class="nav navbar-nav">
                          <li class="nav-item" role="presentation"><a class="nav-link" href="#">Link</a></li>
                          <li class="nav-item dropdown"><a class="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="#">Dropdown </a>
                              <div class="dropdown-menu" role="menu"><a class="dropdown-item" role="presentation" href="#">First Item</a><a class="dropdown-item" role="presentation" href="#">Second Item</a><a class="dropdown-item" role="presentation" href="#">Third Item</a></div>
                          </li>
                      </ul>
                      -->
                      <form class="form-inline mr-auto" target="_self">
                          <div class="form-group"><label for="search-field"><i class="fa fa-search"></i></label><input class="form-control search-field" type="search" id="search-field" name="search"></div>
                      </form><span class="navbar-text"><a class="login" href="#">Se connecter</a></span><a class="btn btn-light action-button" role="button" href="#">S'inscrire</a>
                  </div>
              </div>
          </nav>
          <div class="container hero">
              <div class="row">
                  <div class="col-md-8 offset-md-2">
                      <h1 class="text-center">Suivez les matchs interclasse de l'ISPM avec I-Sport.</h1>
                      <!--<div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item"></iframe></div>-->
                      <!--<div> <img alt="Ispm logo" src="src/assets/isportl.webp" /></div>-->
                  </div>
              </div>
          </div>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          
      </div>
  </div>
  <!-- End: Header Dark -->
 <!-- 
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
    <script src="./assets/assets/bootstrap/css/bootstrap.min.css"></script>
-->

<p>
  I-Sport est un site de l'ISPM </p>
  <p>où les étudiants peuvent suivre en direct </p>
  <p>les matchs interclasse organisés au sein de l'institut.
</p>


</body>
</template>



<style scoped>


a {
  color: white;
  underline: no;
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

li {
  list-style-type : none;
  padding : 0px 1570px;
  display : flex;
  flex-direction: colonne;
}
o{
  padding : 10px;
}
button {
  background-color: #000D05;
  padding: 10px 30px;
  border-radius: 4px;
  color: white;
  text-align : left;
}







.header-dark{
  
  background:url(src/assets/stade-barea.jpg?h=24d33642057a688e2896123254fe1061) #444;
  background-size:cover;
  padding-bottom:80px
}

.header-dark .navbar{
  background:0 0;
  color:#fff;
  border-radius:0;
  box-shadow:none;
  border:none
}

@media (min-width:768px){
  .header-dark{
    padding-bottom:120px
  }
  .header-dark .navbar{
    padding-top:.75rem;
    padding-bottom:.75rem
  }
}

.header-dark .navbar .navbar-brand{
  font-weight:700;
  color:inherit
}

.header-dark .navbar .navbar-brand:hover{
  color:#f0f0f0
}

.header-dark .navbar .navbar-collapse span{
  margin-top:5px
}

.header-dark .navbar .navbar-collapse span .login{
  color:#d9d9d9;
  margin-right:.5rem;
  text-decoration:none
}

.header-dark .navbar .navbar-collapse span .login:hover{
  color:#fff
}

.header-dark .navbar .navbar-toggler{
  border-color:#747474;color:#eee
}

.header-dark .navbar .navbar-toggler:hover,.header-dark .navbar-toggler:focus{
  background:0 0
}

.header-dark .navbar .form-inline,.header-dark .navbar .navbar-collapse{
  border-color:#636363
}

@media (min-width:992px){
  .header-dark .navbar.navbar .navbar-nav .nav-link{
    padding-left:1.2rem;
    padding-right:1.2rem
  }
}

.header-dark .navbar.navbar-dark .navbar-nav .nav-link{
  color:#d9d9d9
}

.header-dark .navbar.navbar-dark .navbar-nav .nav-link:focus,.header-dark .navbar.navbar-dark .navbar-nav .nav-link:hover{
  color:#fcfeff!important;
  background-color:transparent
}

.header-dark .navbar .navbar-nav>li>.dropdown-menu{
  margin-top:-5px;
  box-shadow:0 4px 8px rgba(0,0,0,.1);
  background-color:#fff;
  border-radius:2px
}

.header-dark .navbar .dropdown-menu .dropdown-item,.header-dark .navbar .dropdown-menu .dropdown-item:focus{
  line-height:2;
  font-size:14px;color:#37434d
}

.header-dark .navbar .dropdown-menu .drodown-item:hover,.header-dark .navbar .dropdown-menu .dropdown-item:focus{
  background:#ebeff1
}

.header-dark .navbar .action-button,.header-dark .navbar .action-button:active{
  background:#208f8f;
  border-radius:20px;
  font-size:inherit;
  color:#fff;
  box-shadow:none;
  border:none;
  text-shadow:none;
  padding:.5rem .8rem;
  transition:background-color .25s
}

.header-dark .navbar .action-button:hover{
  background:#269d9d
}

.header-dark .navbar .form-inline label{
  color:#ccc
}

.header-dark .navbar .form-inline .search-field{
  display:inline-block;
  width:80%;
  background:0 0;
  border:none;
  border-bottom:1px solid transparent;
  border-radius:0;
  box-shadow:none;
  color:inherit;
  transition:border-bottom-color .3s
}

.header-dark .navbar .form-inline .search-field:focus{
  border-bottom:1px solid #ccc
}

.header-dark .hero{
  margin-top:60px
}

.header-dark .hero h1{
  color:#fff;
  font-family:Bitter,serif;
  font-size:40px;
  margin-top:20px;
  margin-bottom:80px
}

@media (min-width:768px){
  .header-dark .hero{
    margin-top:20px
  }
  .header-dark .hero h1{
    margin-bottom:50px;
    line-height:1.5
  }
}

.header-dark .hero .embed-responsive iframe{
  background-color:#666
}

</style>
