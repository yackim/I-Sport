
<template>
  <v-app>
    <v-content class="fe">
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12">
              <v-window v-model="step">
                  <v-window-item :value="1">
                    <v-row>
                      <v-col cols="12" md="8">
                          <v-card-text class="mt-12">
                             <h1 class="text-center display=2 teal==text text==accent-3">
                              Hello</h1>
                              <div  class="text-center display=2 teal==text text==accent-3">
                                <label for="fer" class="text-center display=2 teal==text text==accent-3">Email</label>
                                <input type="text">
                                </div>
                              <v-form >
                                
                                <v-text-field
                                  label="Email"
                                  name="Email"
                                  prepend-icon="email"
                                  type="text"
                                  color="teal accent-3"
                                />
                                <v-text-field
                                  label="password"
                                  name="Password"
                                  prepend-icon="lock"
                                  type="password"
                                  color="teal accent-3"
                                />
                              </v-form>
                             <h3 class="text-center mt-3">Forget your password</h3>
                          </v-card-text>
                          <div class="text-center mt-3">
                            <button rounded color="teal accent-3" dark>SIGN IN</button>
                          </div>
                       </v-col >
                      
                    </v-row >  
                  </v-window-item >
                  <v-window-item :value="2">
                     
                  </v-window-item >
               </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>  
  </v-app>
</template>
<style scoped>
button{
  background-color: brown;
}
v-contener{
background-color: brown;
}
</style>