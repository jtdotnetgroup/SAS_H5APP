import { http } from '../utils/request.js'

export function getWorkOrderList() {
	return http({
		url: '/f/mobile/ticket/list'
	})
}