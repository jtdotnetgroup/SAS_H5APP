import { getWorkOrderList } from '@/api/Ticket.js'

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
	GetDataList({commit,state}){
		getWorkOrderList().then(response => {
			commit("setTicketList",response.data.body.ticketList)
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