const state = {
	data: []
}

const getters = {
	getData() {
		return state.data
	}
}

const mutations = {
	setData(state, payload) {
		state.data = payload
	}
}

const actions = {
	GetDataList({commit,state},payload){
		setTimeout(()=>{
			commit("setData",payload)
		},3000)
	}
}

export default{
	namespaced: true,
	state,
	mutations,
	getters,
	actions
}