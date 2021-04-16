import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userS:[]
  },
  mutations: {
    saveUserX(state, users){
      state.userS = users
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    usersG: (state) => state.userS,
    usersF(state){
    return state.userS.map(userName =>{
      return userName.name
    })
    }
  },
})


