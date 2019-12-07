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
		beforeCreate() {
			getDicList().then(response => {
				console.log(response);
				this.$store.dispatch('dic/GetDataList', response.data.body.dicList)
			}).catch(error => {
				console.log(error);
				uni.hideLoading();
				uni.showToast({
				    title: error.toString(),
				    duration: 2000,
					icon: 'none'
				});
			})
		}
	}
</script>

<style scoped>
</style>