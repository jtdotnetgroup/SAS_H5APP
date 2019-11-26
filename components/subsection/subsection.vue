<template>
    <view>
        <uni-segmented-control :current="current" 
		:values="items" @clickItem="onClickItem" 
		style-type="button" 
		active-color="#09a0f7">
		</uni-segmented-control>
        <view class="content">
            <view v-show="current === 0">
				选项卡1的内容
			</view>
            <view v-show="current === 1">
				选项卡2的内容
			</view>
            <view v-show="current === 2">
				选项卡3的内容
            </view>
			<view v-show="current === 3">
				选项卡4的内容
			</view>
        </view>
    </view>
</template>

<script>
	import uniSegmentedControl from "@dcloudio/uni-ui/lib/uni-segmented-control/uni-segmented-control.vue"
	
	export default {
		components: {
			uniSegmentedControl
		},
	    data() {
			return {
				items: ['未接收','待完工','异常','全部'],
				current: 0
			}
	    },
	    methods: {
			onClickItem(e) {
				if (this.current !== e.currentIndex) {
					this.current = e.currentIndex;
				}
	        }
	    }
	}
</script>

<style>
	
</style>
