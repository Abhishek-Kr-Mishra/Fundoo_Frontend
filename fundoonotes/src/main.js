import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import App from './App.vue'
import Register from './components/Register.vue'
import Appbar from './components/Appbar.vue'
import Login from './components/Login.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import router from './router';
import vuetify from './plugins/vuetify';


Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.component('register-app', Register)
Vue.component('app-bar',Appbar)
Vue.component('log-in',Login)

library.add(fas)
Vue.component('font-awesome-icon', FontAwesomeIcon)


new Vue({
  el: "#app",
  render: h => h(App),
  vuetify,
  router: router
}).$mount('#app')