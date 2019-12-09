<template>
	<view class="content">
		<car-box></car-box>
		<sub-section></sub-section>
	</view>
</template>

<script>

	import carBox from '@/components/carousel-box/carousel-box.vue'
	import subSection from '@/components/subsection/subsection.vue'
	import {getDicList} from '@/api/getDic.js'
	
	export default{
		name:"mytask",
		data() {
			return {
				
			}
		},
		components: {
			carBox, subSection
		},
		onLoad() {
			getDicList('工单类型').then(response => {
				this.$store.dispatch('dic/GetDataList', response.data.body.dicList)
			}).catch(error => {
				console.log(error);
			})
		}
	}
</script>

<style scoped>
</style>