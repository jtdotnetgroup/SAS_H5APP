const state = {
	typeList: [],/* 工单类型 */
	statusList:[]/* 工单状态 */
}

const getters = {
	getTypeList() {
		return state.typeList
	},
	getStatusList() {
		return state.statusList
	}
}

const mutations = {
	setTypeList(state, payload) {
		state.typeList = payload
	},
	setStatusList(state, payload) {
		state.statusList = payload
	}
}

const actions = {
	GetTypeList({commit,state},payload){
		commit("setTypeList",payload)
	},
	GetStatusList({commit,state},payload){
		commit("setStatusList",payload)
	}
}

export default{
	namespaced: true,
	state,
	mutations,
	getters,
	actions
}