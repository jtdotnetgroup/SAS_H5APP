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
	import card from '../../components/card/card.vue'

	export default {
		components: {
			uniSegmentedControl, card
		},
		data() {
			return {
				items: ['未接收', '待完工', '异常', '全部'],
				current: 0,
				datalist:[
					{
						'company': "北京市朝阳区特种玻璃有限公司",
						'contacts': "张三",
						'tel': "13845612345",
						'location': "佛山创意产业园",
						'date': "2019-11-26",
						'status': 1,
					},
					{
						'company': "北京市朝阳区特种玻璃有限公司",
						'contacts': "张三",
						'tel': "13845612345",
						'location': "佛山创意产业园",
						'date': "2019-11-26",
						'status': 2,
					},
					{
						'company': "北京市朝阳区特种玻璃有限公司",
						'contacts': "张三",
						'tel': "13845612345",
						'location': "佛山创意产业园",
						'date': "2019-11-26",
						'status': 2,
					},
					{
						'company': "北京市朝阳区特种玻璃有限公司",
						'contacts': "张三",
						'tel': "13845612345",
						'location': "佛山创意产业园",
						'date': "2019-11-26",
						'status': 3,
					},
					{
						'company': "北京市朝阳区特种玻璃有限公司",
						'contacts': "张三",
						'tel': "13845612345",
						'location': "佛山创意产业园",
						'date': "2019-11-26",
						'status': 1,
					},
					{
						'company': "北京市朝阳区特种玻璃有限公司",
						'contacts': "张三",
						'tel': "13845612345",
						'location': "佛山创意产业园",
						'date': "2019-11-26",
						'status': 0,
					},
				]
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
				return this.datalist.filter(e=>e.status===this.current)
			}
		}
	}
</script>

<style scoped>
	.borderStyle {
		margin: 15upx;
	}
</style>
