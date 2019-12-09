<template>
    <view>
        <uni-segmented-control 
		:values="items" 
		@clickItem="onClickItem" 
		:stickyTop="108"
		style-type="text" 
		active-color="#09a0f7">
		</uni-segmented-control>
        <view class="content">
			<view v-for="(item ,index) in items" :key="index">
				<view v-show="current === index">
					<step-item :ticketId="ticketId"></step-item>
				</view>
			</view>
        </view>
    </view>
</template>

<script>
	export default {
		components: {
			uniSegmentedControl: () => import('@dcloudio/uni-ui/lib/uni-segmented-control/uni-segmented-control.vue'),
			stepItem: () => import('@/components/swiper-item/swiper-item.vue')
		},
		props:{
			ticketId:{
				type: String,
				default () {
					return ""
				}
			}
		},
	    data() {
			return {
				items: ['项目阶段','项目团队','联系人'],
				current: 0,
			}
	    },
	    methods: {
			onClickItem(e) {
				if (this.current !== e.currentIndex) {
					this.current = e.currentIndex;
				}
	        }
	    },
		comments:{
			/* dataList(){
				
			} */
		}
	}
</script>

<style lang="less">
.segmented-control {
  display: flex;
  background: #ffffff; 
  align-items: center;
  padding: 20upx;
  border-bottom: 1px solid #f6f6f6;
  height: 24px;
  .segmented-control-item {
    width: 178upx;
    font-size: 32upx;
    color: #999;
  }
  .active {
    color: #333;
  }
}
</style>
