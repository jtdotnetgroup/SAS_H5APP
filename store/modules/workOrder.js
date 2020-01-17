import { getWorkOrderList } from '@/api/Ticket.js'
import { getServiceWorkOrderList} from '@/api/serviceNumber.js'


const state = {
	ticketList: [],  // 钉钉工单列表
	serviceTicketList:[]   /* 服务号工单列表 */
}

const getters = {
	getTicketList() {
		return state.ticketList
	},
	getServiceTicketList(){
		return state.serviceTicketList
	}
}

const mutations = {
	setTicketList(state, payload) {
		state.ticketList = payload
	},
	setServiceTicketList(state, payload){
		state.serviceTicketList = payload
	}
}

const actions = {
	GetDataList({commit,state}, payload){
		getWorkOrderList().then(response => {
			commit("setTicketList",response.data.body.ticketList)
		}).catch(error => {
			console.log(error);
		})
		
	},
	// 服务工单信息
	GetServiceDataList({commit,state}, payload){
		getServiceWorkOrderList().then(response => {
			commit("setServiceTicketList",response.data.body.ticketList)
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