import { http } from '@/utils/request.js'

/* 获取对应数据字段列表 */
export function getDicList(treeName) {
	return http({
		url: '/f/mobile/dic/list',
		params: {
			treeName: treeName
		}
	})
}

/* 获取阶段列表 */
export function getStageList(ticketType, ticketId) {
	return http({
		url: '/f/mobile/stage/getStagelist',
		params: {
			ticketType: ticketType,
			ticketId: ticketId
		}
	})
}

/* 获取工单列表 */
export function getWorkOrderList() {
	return http({
		url: '/f/mobile/ticket/list'
	})
}

/* 阶段维护保存 */
export function ticketRepairSave(params) {
	return http({
		url: '/f/work/uploadPicture',
		method: 'post',
		headers: {
			'Content-Type': 'multipart/form-data'
		},
		data: params
	})
}