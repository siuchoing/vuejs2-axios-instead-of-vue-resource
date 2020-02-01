import Vue from 'vue'
import Vuex from 'vuex'
import axios from './axios-auth';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null
  },
  mutations: {

  },
  actions: {
    // Sending Auth requests by vuex
    signup ({commit}, authData) {
      axios.post(':signUp?key=AIzaSyAhVooPtSTblKYra9qMuCOIsMGLjTXUbms', {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
      // This is the response object created and filled by axios
          .then(res => console.log(res))
          .catch(error => console.log(error))
    },
    login ({commit}, authData) {
      axios.post(':signInWithPassword?key=AIzaSyAhVooPtSTblKYra9qMuCOIsMGLjTXUbms', {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
      // This is the response object created and filled by axios
          .then(res => console.log(res))
          .catch(error => console.log(error))
    }
  },
  getters: {

  }
})