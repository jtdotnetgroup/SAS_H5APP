const state = {
	stageList: []
}

const getters = {
	getStageList() {
		return state.stageList
	}
}

const mutations = {
	setStageList(state, payload) {
		state.stageList = payload
	}
}

const actions = {
	GetDataList({commit,state},payload){
		commit("setStageList",payload)
	}
}

export default{
	namespaced: true,
	state,
	mutations,
	getters,
	actions
}