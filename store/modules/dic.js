import {getDicList} from '@/api/Ticket.js'

const state = {
	typeList: [],/* 工单类型 */
	statusList: [],/* 工单状态 */
	faultLocaList: [],/* 故障部位 */
}

const getters = {
	getTypeList() {
		return state.typeList
	},
	getStatusList() {
		return state.statusList
	},
	getFaultLocaList() {
		return state.faultLocaList
	}
}

const mutations = {
	setTypeList(state, payload) {
		state.typeList = payload
	},
	setStatusList(state, payload) {
		state.statusList = payload
	},
	setFaultLocaList(state, payload) {
		state.faultLocaList = payload
	}
}

const actions = {
	GetTypeList({commit,state}, payload){
		getDicList(payload).then(response => {
			commit("setTypeList",response.data.body.dicList)
		}).catch(error => {
			console.log(error);
		})
	},
	GetStatusList({commit,state}, payload){
		getDicList(payload).then(response => {
			commit("setStatusList",response.data.body.dicList)
		}).catch(error => {
			console.log(error);
		})
	},
	GetFaultLocaList({commit, state}, payload) {
		getDicList(payload).then(response => {
			commit("setFaultLocaList",response.data.body.dicList)
		}).catch(error => {
			console.log(error);
		})
	}
}

export default{
	namespaced: true,
	state,
	mutations,
	getters,
	actions
}