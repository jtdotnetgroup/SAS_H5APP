<template>
	<view>
		<list-card></list-card>
		<view class="gird">
			<button form-type="submit" type="primary" size="mini" @click="btn">故障申报</button>
			<button form-type="reset" type="default" size="mini" @click="btn1">服务评价</button>
			<button form-type="reset" type="warn" size="mini" @click="btn3">投诉建议</button>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'equipment',
		data() {
			return {
			}
		},
		components: {
			listCard: () => import('./component/listCard.vue')
		},
		methods:{
			btn(){
				uni.navigateTo({
					url: '../declare/declare'
				})
			},
			btn1(){
				uni.navigateTo({
					url: '../evaluate/evaluate'
				})
			},
			btn3(){
				uni.navigateTo({
					url: '../suggests/suggest'
				})
			}
		}
	}
</script>

<style>
	.gird {
		margin-top: 10px;
		display: flex;
		grid-template-columns: 50% 50%;
	}
</style>
