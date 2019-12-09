import { http } from '@/utils/request.js'

export function getDicList(treeName) {
	return http({
		url: '/f/mobile/dic/list?treeName=' + treeName
	})
}