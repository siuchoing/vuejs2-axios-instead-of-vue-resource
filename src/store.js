import Vue from 'vue'
import Vuex from 'vuex'
import axios from './axios-auth';
import globalAxios from 'axios';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null,
    user: null
  },
  mutations: {
    // change the state to store Auth Data in Vuex
    authUser (state, userData) {
      state.idToken = userData.token
      state.userId = userData.userId
    },
    storeUser (state, user) {
        state.user = user
    }
  },
  actions: {
    // Sending payload object for Auth requests by vuex
    signup ({commit}, authData) {
      axios.post(':signUp?key=AIzaSyAhVooPtSTblKYra9qMuCOIsMGLjTXUbms', {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
      // This is the response object created and filled by axios
          .then(res => {
            console.log(res)
            commit('authUser', {
              token: res.data.idToken,
              userId: res.data.localId
            })
              //passing all data
              dispatch('storeUser', authData)
          })
          .catch(error => console.log(error))
    },
    login ({commit}, authData) {
      axios.post(':signInWithPassword?key=AIzaSyAhVooPtSTblKYra9qMuCOIsMGLjTXUbms', {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
      // This is the response object created and filled by axios
          .then(res => {
            console.log(res)
            commit('authUser', {
              token: res.data.idToken,
              userId: res.data.localId
            })
          })
          .catch(error => console.log(error))
    },
    storeUser ({commit}, userData) {
       globalAxios.post('/users.json', userData)
           .then(res => console.log)
           .catch(error => console.log(error))
    },
    fetchUser ({commit}) {
        globalAxios.get('/user.json')
          .then(res => {
              console.log(res)
              const data = res.data
              const users = []
              for (let key in data) {
                  const user = data[key]
                  user.id = key
                  users.push(user)
              }
              console.log(users)
              commit('storeUser', users[0])
              this.email = users[0].email
          })
          .catch(error => console.log(error))
    }
  },
  getters: {
    user (state) {
        return state.user
    }
  }
})