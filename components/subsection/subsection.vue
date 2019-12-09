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
				items: ['待分派', '进行中', '已完成', '已关闭', '异常', '超时'],
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
				return item.filter(e=>e.ticketStatus===this.current + 1)
			}
		},
		beforeMount() {
			getWorkOrderList().then(response => {
				this.$store.dispatch('workOrder/GetDataList', response.data.body.ticketList)
			}).catch(error => {
				console.log(error);
			})
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
			height: calc(100vh - 180px - 36px - 100px);
		}
	}
	/* iphone 6~8 */
	@media only screen and (device-width : 375px) and (device-height : 667px) and (-webkit-device-pixel-ratio : 2) {
		.scroll-Y {
			height: calc(100vh - 180px - 36px - 70px);
		}
	}
	/* iphone 6 plus~8 plus */
	@media only screen and (device-width : 414px) and (device-height : 736px) and (-webkit-device-pixel-ratio : 3) {
		.scroll-Y {
			height: calc(100vh - 180px - 36px - 70px);
		}
	}
</style>
