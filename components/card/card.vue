<template>
	<uni-card class="uniCard" note="true">
		<view class="info">
			<view class="line">
				<label class="uni-list-cell uni-list-cell-pd" >
					<view class="label">北京市朝阳区特种玻璃有限公司</view>
				</label>
			</view>
			<view class="line">
				<label class="uni-list-cell uni-list-cell-pd" >
					<span class="iconfont iconhuizhengongzuoliang iconStyle"></span>
					<view class="label sameLine">联系人：张三</view>
					<view class="label sameLine">13845612345</view>
				</label>
			</view>
			<view class="line">
				<label class="uni-list-cell uni-list-cell-pd" >
					<span class="iconfont icondingwei iconStyle"></span>
					<view class="label sameLine">佛山创意产业园</view>
				</label>
			</view>
		</view>
		<view class="btn">
			<button class="mini-btn" size="mini">维修工单</button>
			<span class="iconfont iconphone"></span>
			<button class="phone" size="mini">维</button>
		</view>
		<template v-slot:footer>
			<view class="footer-box">
				<view class="label">2019-11-26</view>
			</view>
		</template>
	</uni-card>
</template>

<script>
	import {uniCard} from "@dcloudio/uni-ui"

	export default {
		data() {
			return {}
		},
		components: {
			uniCard
		},
		props: {}
	}
</script>

<style>
	.uniCard {
		margin: 10upx;
	}
	
	.label {
		font-size: 30upx;
	}
	
	.sameLine {
		display: inline;
		margin-right: 35upx;
	}
	
	.iconStyle {
		margin-right: 25upx;
	}
	
	.line {
		margin-bottom: 15upx;
	}
	
	.info {
		width: fit-content;
		display: inline-block;
	}
	
	.btn {
		display: inline-block;
	}
	
	.mini-btn {
		position: absolute;
		top: 15upx;
		right: 10upx;
		color: #FFFFFF;
		background-color: #09a0f7;
	}
	
	.phone {
		border-radius: 100upx;
	}
</style>
