import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';

import router from './router'
import store from './store'

// Global Request Configuration
axios.defaults.baseURL = 'https://vuejs2-axios.firebaseio.com/'   // Reference by https://github.com/axios/axios
// Can check in Network console > Header
axios.defaults.headers.common['Authorization'] = 'admin'
axios.defaults.headers.get['Accepts'] = 'application/json'


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
