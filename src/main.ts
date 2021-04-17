import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import userList from "@/components/userList.vue"

Vue.config.productionTip = false
Vue.component('userList', userList)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
