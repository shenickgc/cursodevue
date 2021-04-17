import { User } from '@/types/User'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    userS:[] as User[]
  },
  mutations: {
    saveUserX(state, users: User[]){
      state.userS = users
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    usersG: (state) : User[] => state.userS,
    usersF(state) : string[] {
    return state.userS.map((userName : User) =>{
      return userName.name
    })
    }
  },
})


