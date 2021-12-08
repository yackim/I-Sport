import '@fortawesome/fontawesome-free/css/all.css'
import 'bootstrap/dist/css/bootstrap.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* Vue.config.productionTip=false */
createApp(App).use(router).mount('#app')
/* new Vue({
    router,
    render: h => h(App)
}).$mount('#app') */
