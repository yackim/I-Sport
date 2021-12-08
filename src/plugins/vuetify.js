// Styles
import '@fortawesome/fontawesome-free/css/all.css'
//import 'material-design-iconfont/dist/material-design-icon.css'
import '@mdi/font/css/materialdesignicons.css'
//import Vue from 'vue';
//import Vuetify from 'vuetify/lib';
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'
//Vue.use(Vuetify);
export default createVuetify(
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
{
  icons:{
    iconfont: 'nd' || 'fa'
  }
}
  )
