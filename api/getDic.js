import { http } from '@/utils/request.js'

export function getDicList() {
	return http({
		url: '/f/mobile/dic/list'
	})
}