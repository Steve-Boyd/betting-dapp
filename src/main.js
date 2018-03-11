import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from './store/'
import 'font-awesome/css/font-awesome.css'
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
 el: '#app',
 router,
 store,
 components: { App },
 template: '<App/>'
})