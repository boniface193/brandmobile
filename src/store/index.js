import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'
import { URL_API } from '../util'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    desserts: []
  },
  mutations: {
    getUsers(state, payload){
      state.desserts = payload
    }
  },
  actions: {
    getContent(context){
     axios.get(`${URL_API}/data`)
     .then(res => {
       context.commit('getUsers', res.data.data)
     })
    },

//     address: "#25B, Adewole Kolawole Crescent, off Admiralty way, Lekki, Phase 1, Lagos, Nigeria."
// email: "Moshood@brandmobileafrica.com"
// first_name: "Moshood"
// first_time_login: false
// image_url: "https://avatars.dicebear.com/api/male/.svg?r=1&w=1&mood[]=happy"
// last_name: "Aremu"
// phone: "+23

    updateUser(){
      axios.patch(`${URL_API}/data`, {
        "address": this.address
      })
    }
  },
  getters: {
    desserts(state) {
      return state.desserts.sub_users
    },
    user(state) {
      return state.desserts
    }

  }
})
