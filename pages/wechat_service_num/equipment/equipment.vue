<template>
	<view>
		<list-card :dataList="getContactList"></list-card>
		<view class="gird">
			<button form-type="submit" type="primary" size="mini" @click="btn">故障申报</button>
			<button form-type="reset" type="default" size="mini" @click="btn1">服务评价</button>
			<button form-type="reset" type="warn" size="mini" @click="btn3">投诉建议</button>
		</view>
	</view>
</template>

<script>
	import {ticketEvaluate} from '@/api/serviceNumber.js'
	export default {
		name: 'equipment',
		data() {
			return {
				name:"name"
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
			},
			
		},
		computed:{
			getContactList(){
				let item = this.$store.getters['contact/getContactList']
				return item;
			}
		},
		onLoad() {
			//跳转页面前获取字典列表信息
			this.$store.dispatch('dic/GetFaultLocaList', '故障部位');
			this.$store.dispatch('contact/GetDataList')
		}
	}
</script>

<style>
	.gird {
		padding: 10px 0px;
		display: flex;
		grid-template-columns: 50% 50%;
		bottom: 0;
	}
	.gird {
		margin: 4px 2px;
		display: flex;
		grid-template-columns: 50% 50%;
	}
</style>
