<template>
	<view>
		<uni-segmented-control class="borderStyle" :current="current" :values="items" @clickItem="onClickItem" style-type="button" active-color="#09a0f7">
		</uni-segmented-control>
		<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y" @scrolltoupper="upper" @scrolltolower="lower" @scroll="scroll">
			<card v-for="(item,index) in displayList" :info="item" :key="index"></card>
		</scroll-view>
	</view>
</template>

<script>
	import uniSegmentedControl from "@dcloudio/uni-ui/lib/uni-segmented-control/uni-segmented-control.vue"
	import card from '@/components/card/card.vue'
	import { getWorkOrderList } from '@/api/getWorkOrderList.js'

	export default {
		name: 'subSection',
		components: {
			uniSegmentedControl, card
		},
		data() {
			return {
				items: ['未接收', '待完工', '异常', '全部'],
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
				console.log("到顶了");
			},
			lower() {
				console.log("到底了");
			},
			scroll() {
				console.log("滚动了");
			},
		},
		computed:{
			displayList(){
				let item = this.$store.getters['workOrder/getTicketList']
				if (this.current === 3) {
					return item
				} else {
					return item.filter(e=>e.ticketStatus===this.current)
				}
			}
		},
		beforeCreate() {
			getWorkOrderList().then(response => {
				console.log(response);
				this.$store.dispatch('workOrder/GetDataList', response.data.body.ticketList)
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
	.borderStyle {
		margin: 15upx;
	}
	
	.scroll-Y {
		height: calc(100vh - 180px - 36px - 70px);
	}
</style>
