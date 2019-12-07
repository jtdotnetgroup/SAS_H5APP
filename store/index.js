import Vue from 'vue'
import Vuex from 'vuex'
import workOrder from './modules/workOrder.js'
import dic from './modules/dic.js'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
	  
  },
  getters: {
	  
  },
  mutations: {
	  
  },
  actions: {
	  
  },
  modules:{
	  workOrder,
	  dic
  },
  strict: debug
})