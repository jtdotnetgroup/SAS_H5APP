import {getStageList} from '@/api/Ticket.js'

const state = {
	stageList: [],
	sign_out: []
}

const getters = {
	getStageList() {
		return state.stageList
	},
	getSign_Out() {
		return state.sign_out
	}
}

const mutations = {
	setStageList(state, payload) {
		state.stageList = payload
	},
	setSign_Out(state, payload) {
		state.sign_out = payload
	}
}

const actions = {
	GetDataList({commit,state},payload){
		getStageList(payload.ticketType, payload.ticketId).then(response => {
			commit("setStageList",response.data.body.pageList)
			commit("setSign_Out", response.data.body.stageLogList)
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