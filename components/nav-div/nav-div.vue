<template>
	<view class="container">
		<uni-section class="title" :title="title"></uni-section>
		<view class="example-body">
			<uni-grid :column="4" :show-border="false" :square="false">
				<slot></slot>
			</uni-grid>
		</view>
	</view>
</template>

<script>
	import {uniGrid, uniSection} from "@dcloudio/uni-ui"
	
	export default {
		data() {
			return {
			}
		},
		components: {
			uniGrid, uniSection
		},
		props: {
			'title': String
		}
	}
</script>

<style>
	.example-body {
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		padding: 0;
		font-size: 14rpx;
		background-color: #ffffff;
	}
	
	.example-body {
		flex-direction: column;
		padding: 30rpx;
		background-color: #ffffff;
	}
	
	.example-body {
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
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
	
	.title {
		background-color: #FFFFFF;
		margin-top: 15upx;
	}
	
	.container {
		margin: 0 15upx;
	}
</style>
