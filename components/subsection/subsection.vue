<template>
	<view>
		<uni-segmented-control class="borderStyle" :current="current" :values="items" @clickItem="onClickItem" style-type="button" active-color="#09a0f7">
		</uni-segmented-control>
		<view>
			<card v-for="(item,index) in displayList" :info="item" :key="index"></card>
		</view>
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
				current: 0
			}
		},
		methods: {
			onClickItem(e) {
				if (this.current !== e.currentIndex) {
					this.current = e.currentIndex;
				}
			}
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
			})
		}
	}
</script>

<style scoped>
	.borderStyle {
		margin: 15upx;
	}
</style>
