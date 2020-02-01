import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';

import router from './router'
import store from './store'

// Global Request Configuration
axios.defaults.baseURL = 'https://vuejs2-axios.firebaseio.com/'   // Reference by https://github.com/axios/axios
// Can check in Network console > Header
// axios.defaults.headers.common['Authorization'] = 'admin'
axios.defaults.headers.get['Accepts'] = 'application/json'

// Use local function to return config request, otherwise it will block the request
const reqInterceptor = axios.interceptors.request.use(config => {
  console.log('Request Interceptor', config)
  // config.headers['SOMETING']
  return config
})

// Use local function to return config response,
// otherwise otherwise other code in my application which waits for it will never receive it.
const resInterceptor = axios.interceptors.response.use(res => {
  console.log('Response Interceptor', res)
  return res
})


// Eject needs to get the ID of the interceptor and that ID is actually returned from the use method
// we shouldn't see any console logs in our application anymore, after eject the interceptors
// except own console log
axios.interceptors.request.eject(reqInterceptor);
axios.interceptors.response.eject(resInterceptor);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
