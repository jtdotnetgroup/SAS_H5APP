<template>
	<view class="content">
		
		<car-box></car-box>
		<card></card>
	</view>
</template>

<script>

	import carBox from '../../components/carousel-box/carousel-box.vue'
	import card from '../../components/card/card.vue'
	
	export default{
		name:"mytask",
		data() {
			return {
				key: ""
			}
		},

		components: {
			carBox, card
		}
	}
</script>

<style>
</style>