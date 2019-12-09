import { http } from '@/utils/request.js'

export function getStageList() {
	return http({
		url: '/f/mobile/stage/list'
	})
}