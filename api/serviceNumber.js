import { http } from '@/utils/request.js'

/* 获取设备列表 */
export function getContactList() {
	return http({
		url: '/f/weChat/contact/project/list'
	})
}

/* 故障申报保存 */
export function saveMalfunction(params) {
	return http({
		url: '/f/weChat/malfunction/save',
		method: 'post',
		 headers: {
			"Content-Type": "text/html;charset=UTF-8"
		},
		data: params
	})
}
/*  提交工单回访评价  */
export function ticketEvaluate(params) {
	return http({
		url: '/f/weChat/ticket/evaluate',
		method: 'post',
		data: params
	})
}

/* 提交投诉建议 */
export function saveSuggest(params) {
	return http({
		url: '/f/weChat/suggest/save',
		method: 'post',
		 headers: {
			"Content-Type": "text/html;charset=UTF-8"
		},
		data: params
	})
}
