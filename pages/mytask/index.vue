<template>
	<view class="content">
		<car-box></car-box>
		<card :info='info'></card>
	</view>
</template>

<script>

	import carBox from '../../components/carousel-box/carousel-box.vue'
	import card from '../../components/card/card.vue'
	
	export default{
		name:"mytask",
		data() {
			return {
				info: {
					'company': "北京市朝阳区特种玻璃有限公司",
					'contacts': "张三",
					'tel': "13845612345",
					'location': "佛山创意产业园",
					'date': "2019-11-26"
				}
			}
		},

		components: {
			carBox, card
		}
	}
</script>

<style>
</style>