import {getStageList} from '@/api/Ticket.js'

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
		getStageList(payload.ticketType, payload.ticketId).then(response => {
			commit("setStageList",response.data.body.pageList)
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