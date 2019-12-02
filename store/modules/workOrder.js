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
		setTimeout(()=>{
			commit("setTicketList",payload)
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