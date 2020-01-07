<template>
	<view>
		<uni-swipe-action>
		    <uni-swipe-action-item :options="options" @click="onClick" @change="change">
				<uni-collapse accordion="true">
				    <uni-collapse-item :title="'设备编号：' + eqNum + ' 已过质保期(10天)'">
						<uni-card note="true">
							<label>设备描述：</label>
							<textarea></textarea>
							<template v-slot:footer>
								<view class="footer-box">
									<view class="gridContent">
										<label>验收日期：2019-12-30</label>
										<label>质保期至：2019-10-30</label>
									</view>
								</view>
							</template>
						</uni-card>
				    </uni-collapse-item>
				</uni-collapse>
		    </uni-swipe-action-item>
		</uni-swipe-action>
	</view>
</template>

<script>
	export default {
		name: 'listCard',
		data() {
			return {
				eqNum: 'XXXXXX',
				options:[
					{
						text: '故障申报',
						style: {
							backgroundColor: '#007aff'
						}
					}
				]
			}
		},
		components: {
			uniCard: () => import('@dcloudio/uni-ui/lib/uni-card/uni-card.vue'),
			uniCollapse: () => import('@dcloudio/uni-ui/lib/uni-collapse/uni-collapse.vue'),
			uniCollapseItem: () => import('@dcloudio/uni-ui/lib/uni-collapse-item/uni-collapse-item.vue'),
			uniSwipeAction: () => import('@dcloudio/uni-ui/lib/uni-swipe-action/uni-swipe-action.vue'),
			uniSwipeActionItem: () => import('@dcloudio/uni-ui/lib/uni-swipe-action-item/uni-swipe-action-item.vue')
		},
		methods: {
			onClick(e){
				if (e.index == 0) {
					console.log('当前点击的是第'+e.index+'个按钮，点击内容是'+e.content.text)
					uni.navigateTo({
						url: '../../declare/declare'
					})
				}
			},
			change(open){
				// console.log('当前开启状态：'+ open);
			}
		}
	}
</script>

<style scoped>
	.uni-card {
		margin: 0 !important;
	}
	
	.gridContent {
		display: grid;
		grid-template-columns: 50% 50%;
	}
</style>
