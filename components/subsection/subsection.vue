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
				let item = this.$store.getters['workOrder/getData']
				return item.filter(e=>e.status===this.current)
			}
		},
		beforeCreate() {
			var data = [
				{
					'company': "北京市朝阳区有限公司",
					'contacts': "张三",
					'tel': "13845612345",
					'location': "北京创意产业园",
					'date': "2019-11-26",
					'status': 1,
				},
				{
					'company': "天津市朝阳区有限公司",
					'contacts': "李四",
					'tel': "13845612345",
					'location': "天津创意产业园",
					'date': "2019-11-26",
					'status': 2,
				},
				{
					'company': "上海市朝阳区有限公司",
					'contacts': "王五",
					'tel': "13845612345",
					'location': "上海创意产业园",
					'date': "2019-11-26",
					'status': 2,
				},
				{
					'company': "广州市朝阳区有限公司",
					'contacts': "钱六",
					'tel': "13845612345",
					'location': "广州创意产业园",
					'date': "2019-11-26",
					'status': 3,
				},
				{
					'company': "深圳市朝阳区有限公司",
					'contacts': "田七",
					'tel': "13845612345",
					'location': "深圳创意产业园",
					'date': "2019-11-26",
					'status': 1,
				},
				{
					'company': "佛山市朝阳区有限公司",
					'contacts': "赵八",
					'tel': "13845612345",
					'location': "佛山创意产业园",
					'date': "2019-11-26",
					'status': 0,
				}
			]
			this.$store.dispatch('workOrder/GetDataList', data)
		}
	}
</script>

<style scoped>
	.borderStyle {
		margin: 15upx;
	}
</style>
