const state = {
	dicList: []
}

const getters = {
	getDicList() {
		return state.dicList
	}
}

const mutations = {
	setDicList(state, payload) {
		state.dicList = payload
	}
}

const actions = {
	GetDataList({commit,state},payload){
		commit("setDicList",payload)
		uni.hideLoading();
	}
}

export default{
	namespaced: true,
	state,
	mutations,
	getters,
	actions
}