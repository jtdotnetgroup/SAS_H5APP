<template>
	<view class="content">
		<car-box></car-box>
		<sub-section></sub-section>
	</view>
</template>

<script>

	import {getDicList} from '@/api/Ticket.js'
	
	export default{
		name:"mytask",
		data() {
			return {
				
			}
		},
		components: {
			carBox: () => import('@/components/carousel-box/carousel-box.vue'), 
			subSection: () => import('@/components/subsection/subsection.vue')
		},
		onLoad() {
			getDicList('工单状态').then(response => {
				this.$store.dispatch('dic/GetStatusList', response.data.body.dicList)
			}).catch(error => {
				console.log(error);
			}),
			getDicList('工单类型').then(response => {
				this.$store.dispatch('dic/GetTypeList', response.data.body.dicList)
			}).catch(error => {
				console.log(error);
			})
		}
	}
</script>

<style scoped>
</style>