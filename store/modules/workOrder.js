const state = {
	ticketList: []
}

const getters = {
	getTicketList() {
		return state.ticketList
	}
}

const mutations = {
	setTicketList(state, payload) {
		state.ticketList = payload
	}
}

const actions = {
	GetDataList({commit,state},payload){
		commit("setTicketList",payload)
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