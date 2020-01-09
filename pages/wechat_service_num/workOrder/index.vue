<template>
	<view class="content">
		<uni-segmented-control class="borderStyle" :current="current" :values="items" @clickItem="onClickItem" style-type="button" active-color="#09a0f7">
		</uni-segmented-control>
		<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y" @scrolltoupper="upper" @scrolltolower="lower" @scroll="scroll">
			<work-order-list v-for="(item,index) in displayList" :info="item" :key="index"></work-order-list>
		</scroll-view>
		<view class="gird">
			<button form-type="reset" type="default" size="mini" @click="btn0">我的设备</button>
			<button form-type="reset" type="warn" size="mini" @click="btn2">服务评价</button>
			<button form-type="submit" type="primary" size="mini" @click="btn1">故障详情</button>
			<button form-type="reset" type="warn" size="mini" @click="btn3">投诉建议</button>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'subSection',
		components: {
			uniSegmentedControl: () => import('@dcloudio/uni-ui/lib/uni-segmented-control/uni-segmented-control.vue'), 
			// card: () => import('@/components/card/card.vue'),
			workOrderList: () => import('./component/work-order-list.vue')
		},
		data() {
			return {
				items: ['未完工','已完工','全部'],
				current: 0,
				scrollTop: 0,
				old: {
					scrollTop: 0
				}
			}
		},
		methods: {
			onClickItem(e) {
				if (this.current !== e.currentIndex) {
					this.current = e.currentIndex;
				}
			},
			upper() {
				// console.log("到顶了");
			},
			lower() {
				// console.log("到底了");
			},
			scroll() {
				// console.log("滚动了");
			},
		},
		computed:{
			displayList(){
				let item = this.$store.getters['workOrder/getTicketList']
				return item.filter(e=>e.ticketStatus===this.current + 2)
			}
		},
		beforeMount() {
			this.$store.dispatch('dic/GetTypeList', '工单类型').then(res => {
				this.$store.dispatch('workOrder/GetDataList')
			})
		},
		methods:{
			btn0(){
				uni.navigateTo({
					url: '../equipment/equipment'
				})
			},
			btn1(){
				uni.navigateTo({
					url: '../declare/declare'
				})
			},
			btn2(){
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

<style scoped>
	.borderStyle {
		margin: 15upx;
	}
	/* iphone X */
	@media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
		.scroll-Y {
			height: calc(100vh - 29px - 60px);
		}
	}
	/* iphone 6~8 */
	@media only screen and (device-width : 375px) and (device-height : 667px) and (-webkit-device-pixel-ratio : 2) {
		.scroll-Y {
			height: calc(100vh - 29px - 60px);
		}
	}
	/* iphone 6 plus~8 plus */
	@media only screen and (device-width : 414px) and (device-height : 736px) and (-webkit-device-pixel-ratio : 3) {
		.scroll-Y {
			height: calc(100vh - 29px - 60px);
		}
	}
	.scroll-Y {
		height: calc(100vh - 29px - 60px);
	}
	.gird {
		margin: 15 30rpx;
		display: flex;
		grid-template-columns: 50% 50%;
	}
</style>
