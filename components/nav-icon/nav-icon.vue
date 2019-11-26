<template>
	<uni-grid-item :hor="0" :ver="0" marker="badge" type="error" text="12">
		<!-- <image class="image" src="/static/c1.png" mode="aspectFill" /> -->
		<span :class="['iconfont image',icon]" :style="[{color: colorStyle}]"></span>
		<text class="text">{{ text }}</text>
	</uni-grid-item>
</template>

<script>
	import {uniGridItem} from "@dcloudio/uni-ui"
	
	export default {
		data() {
			return {
				
			}
		},
		components: {
			uniGridItem
		},
		props: {
			'text': String,
			'icon': String,
			'colorStyle': String
		}
	}
</script>

<style>
	.iconfont {
		font-family: "iconfont" !important;
		font-size: 50px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
	
	.image {
		width: 100rpx;
		height: 100rpx;
		margin: 0 auto;
	}
	
	.text {
		font-size: 26rpx;
		margin-top: 10rpx;
		text-align: center;
	}
</style>
