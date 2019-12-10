import { http } from '@/utils/request.js'

export function getStageList(ticketType, ticketId) {
	return http({
		url: '/f/mobile/stage/getStagelist',
		params: {
			ticketType: ticketType,
			ticketId: ticketId
		}
	})
}