<template>
<body>
  
  <div class="elevation-12" >
   <form>

              <h1 class="margin-left=72px display=2 teal==text text==accent-3">
                              Authentification</h1>
    <img src="../assets/LK.png" class="rez" alt="">
      <table>
      <tr>
          <td><label class="soratra" for=""><i class="fa fa-envelope"></i></label></td>
          <td><input type="text" class="boite" placeholder="veuillez mettre votre Email"></td>  
      </tr>
      <br>
      <tr>
          <td><label for=""><i class="fa fa-unlock-alt"></i></label></td>
          <td><input class="boite" type="password" placeholder="veuillez mettre votre Mot de passe"></td>
      </tr>  
      
      <tr>   
         <td colspan="2" class="re" text-align="center">
           <p><a href="" class="ree">Mot de Passe oublié</a></p> 
           </td>
      </tr>
  </table>
  <button rounded class="boutton1" >CONNECTER</button>
  <div class="ve">
    <BR></BR><br><br>
    <P class="pere">Salut les Amis!</P>
    <p class="pere"> Créer un nouveau Compte</p>
    <br>
    <button rounded outlined="" dark @click="step++" class="inscrire">s'INSCRIRE</button>
  </div>
  
   </form>
  </div>

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
    margin-top: 73px;
    margin-left: 337px;
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
}
.boutton1{
  background-color: rgb(238, 224, 25);
  border-radius: 20px;
  border: 1px solid rgb(43, 184, 30);
  background-color: rgb(238, 224, 25);
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  text-transform: uppercase;
  MARGIN-LEFT: 421px;
  margin-top: -60px;
  }
.re{
  text-align: center;
}
.rez{
    margin-left: 380px;
}
.boite{
  width: 250px;
  border: 2px solid rgb(236, 224, 25);
}
.ve {
     margin-right: 0px;
    width: 257px;
    height: 500px;
    margin-top: -66%;
    margin-left: 0%;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
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
    width: 56px;
    height: 51px;
}
.ree{
  margin-left: 212px;
}
h1{
  margin-left: 365px;
}
body{
    background-image: url(../assets/SE.jpg);
    width: 100%;
    height: 100%;
}
</style> 
