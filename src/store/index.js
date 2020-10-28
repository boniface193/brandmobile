import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'
import { URL_API } from '../util'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    desserts: [],
    user: []
  },

  getters: {
    desserts(state) {
      return state.desserts
    },
    user(state) {
      return state.user
    }

  },

  actions: {
    async getContent(context) {
      const res = await axios.get(`${URL_API}/subUsers`)
      try {
        context.commit('getUsers', res.data)
      }
      catch (err) {
        console.log(err)
      }

    },

    async getuser(context) {
      const res = await axios.get(`${URL_API}/data`)

      try {
        context.commit('getUser', res.data)
      }
      catch (err) {
        console.log(err)
      }
    },

    async postSubUser({ commit }, email, name) {
      const res = await axios.post(`${URL_API}/subUsers`, {
        email, first_name: "Munachim Anyamene", is_active: false, has_activated: true, role: { role_id: "MXTi9FjpyQKxfEsqQjbtGtZvjEuvBWRo", name: name }
      })
      try {
        commit('postUser', res.data)
      }
      catch (err) {
        console.log(err)
      }
    },

    async delUser({commit}, payload) {
      await axios.delete(`${URL_API}/subUsers/${payload}`, payload)
      // try{
      commit('deleteUser', payload)
      // }
      // catch(err){
      //   console.log(err)
      // }
    },

    async updateData({ commit }, updatedata) {
      const res = await axios.put(`${URL_API}/data/${updatedata.id}`, updatedata)
      commit('updatedData', res.data)
    }
  },



  mutations: {
    getUsers(state, payload) {
      state.desserts = payload
    },

    getUser(state, showUser) {
      state.user = showUser
    },

    postUser(state, submitt) {
      state.desserts.unshift(submitt)
    },

    deleteUser(state, payload) {
      const index = state.desserts.findIndex(user => user.id === payload.id);
      if (index !== -1) {

        state.desserts.splice(index, 1, payload);
      }
    },

    updatedData(state, updatedata) {
      const index = state.user.findIndex(users => users.id === updatedata.id);
      if (index !== -1) {
        state.user.splice(index, 1, updatedata);
      }
    }
  },

})
