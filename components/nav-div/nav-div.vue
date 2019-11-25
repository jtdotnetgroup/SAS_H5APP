<template>
	<view class="container">
		<uni-section class="title" title="服务管理"></uni-section>
		<view class="example-body">
			<uni-grid :column="4" :show-border="false" :square="false">
				<nav-icon text="客户管理" icon="icontongxunlu" color-style="#97f079"></nav-icon>
				<nav-icon text="工单管理" icon="icongongdan" color-style="#79ddee"></nav-icon>
				<nav-icon text="客户应收" icon="iconweibaogongdan" color-style="#d679ef"></nav-icon>
				<nav-icon text="故障代报" icon="iconrizhiyichang" color-style="#be78f2"></nav-icon>
			</uni-grid>
		</view>
	</view>
</template>

<script>
	import {uniGrid, uniSection} from "@dcloudio/uni-ui"
	import navIcon from '../nav-icon/nav-icon.vue'
	
	export default {
		data() {
			return {
			}
		},
		components: {
			uniGrid, uniSection, navIcon
		},
		props: {
			
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
