<template>
	<view class="content">
		<nav-div></nav-div>
	</view>
</template>

<script>
	import navDiv from '../../components/nav-div/nav-div.vue'
	
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		components: {
			navDiv
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style scoped>
	
</style>
