<template>
<body>
  <div class="elevation-12">
   <form>

              <h1 class="text-center display=2 teal==text text==accent-3">
                              Inscription</h1>
    
    <div class="ve">
    <BR></BR><br><br>
    <P class="pere">Salut les Amis!</P>
    <p class="pere"> Créer un nouveau <br> Compte</p>
    <br>
    <button rounded  class="inscrire"><i class="fa fa-home"></i></button>
  </div>
  
   </form>
  </div>
      <table>
      <tr>
          <td><label class="soratra" for=""><i class="fa fa-user"></i></label>
          <input type="submit" class="boite" value="Professeur"></td>  
      </tr> 
      <br>
       <tr>
          <td><label class="soratra" for=""><i class="fa fa-envelope"></i></label>
          <input type="text" class="boite" placeholder="veuillez mettre votre Email"></td>  
      </tr><br>
      <tr>
          <td><label for=""><i class="fa fa-university"></i></label>
          <input class="boite" type="password" placeholder="veuillez mettre votre Matière"></td>
      </tr>  <br>
      <tr>
          <td><label for=""><i class="fa fa-unlock-alt"></i></label>
          <input class="boite" type="password" placeholder="veuillez mettre votre Mot de passe"></td>
      </tr><br>
      <tr>
          <td><p class="pty">confirmer votre Mot de Passe</p>
          <input class="boite1" type="password" placeholder="veuillez confirmervotre Mot de passe"></td>
      </tr>   
      <br>
      <tr>   
         <td colspan="2" class="re" text-align="center">
          
          <br> <button rounded >ENREGISTRER</button></td>
      </tr>
  </table>
  
</body>
</template>
 
<style scoped>
v-container{
  background-color: brown;
}
.elevation-12{
  margin-top: 5%;
  margin-left: 15%;
 display: flex;
  flex-direction: column;
 height: 500px;
 width: 713px;
 font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  border: 1px solid rgb(43, 184, 30);
     background-image: url(../assets/fond.jpg);
}
table{
    margin-top:-441px;
    margin-left:531px;
}

button{
  background-color: rgb(238, 224, 25);
  border-radius: 30px;
  border: 1px solid rgb(43, 184, 30);
  background-color: rgb(238, 224, 25);
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  text-transform: uppercase;
      MARGIN-LEFT: 55px;
    margin-top: -69px;
  }
.re{
  text-align: center;
}
.rez{
      margin-left: 397px;
}
.boite{
  width: 250px;
  border: 2px solid rgb(236, 224, 25);
}
.pty{
  margin-left:23px;
}
.boite1{
  margin-left:17px;
   width: 250px;
  border: 2px solid rgb(236, 224, 25);
}

img{
     width: 216px;
    height: 166px;
    margin-left: 165px;
    margin-top: 15px;
}
.soratra{
   font-family: Arial, Helvetica, sans-serif;
   font-size: 19px;
  font-weight: bold;
}

.pere{
  font-family: Arial, Helvetica, sans-serif;
   font-size: 19px;
  font-weight: bold;
      margin-left: 42px;
}
.inscrire{
    margin-top: 12px;
    margin-left: 59px;
}
.soratra1{
      width: 39px;
    height: 28px;
}
.ree{
  margin-left: 212px;
}
h1{
  margin-left: 235px;
}
body{
    background-image: url(../assets/SE.jpg);
    width: 100%;
    height: 100%;
}
</style>