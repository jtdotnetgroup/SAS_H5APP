<template>
	<view class="page">
		<text class="example-info">
			尊敬的客户，您好！            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;感谢您对索奥斯一直以来的关心和支持！麻烦您再花上十分钟的时间，对我们的工作给出建议！
		</text>
		<view class="example-body">
			<label class="label">产品满意度：</label>
			<myRate v-on:change="product" />
			<span>{{productScore}}</span>
			<span class="label text-body">{{productRateScoreText}}</span>
		</view>
		<view class="example-body">
			<label class="label">服务满意度：</label>
			<myRate v-on:change="service" />
			<span>{{serviceScore}}</span>
			<span class="label text-body">{{serviceRateScoreText}}</span>
		</view>
		<view class="uni-textarea">
			<textarea  style="border:#EFEFF4 solid;" placeholder="投诉与建议:"/>
		</view>
		<view class="example-body-btn">
			<uni-button class="" type="primary">提交</uni-button>
		</view>
	</view>
</template>

<script>
	export default {
		name:'evaluate',
		data() {
			return {
				productScore: '',
				serviceScore: '',
				productRateScoreText: '',
				serviceRateScoreText: '',
				rateScoreDesc: ['非常不满意，各方面都很差', '不满意，比较差', '一般满意，还需改善', '比较满意，仍可改善', '非常满意，无可挑剔'],
			}
		},
		components: {
			modelLabel: () => import('@/components/model-label/model-label.vue'),
			uniRate: () => import('@dcloudio/uni-ui/lib/uni-rate/uni-rate.vue'),
			myRate: () => import('./component/rate-xing.vue')
		},
		methods: {
			product(index) {
				this.productRateScoreText=this.rateScoreDesc[index.value-1]
				this.productScore = index.value + "星";
			},
			service(index) {
				this.serviceRateScoreText = this.rateScoreDesc[index.value-1]
				this.serviceScore = index.value + "星";
			}
		}
	}
</script>

<style>
	page {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		background-color: #FFFFFF;
		min-height: 100%;
		height: auto;
	}
	
	.example-info {
		padding: 30rpx;
		color: #3b4144;
		background: #ffffff;
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
		background-color: #ffffff;
		font-size: 26rpx;
		line-height: 62rpx;
	}
	
	.example-body {
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		padding: 30rpx;
		font-size: 28rpx;
		background-color: #ffffff;
		border:solid #F1F1F1 2upx;
	}
	.example-body-btn {
		margin: 18rpx;
		width: 95%;
		height: 30%;
	}
	
	uni-textarea {
	    width: 97.8%;
	    height: 300rpx;
	    display: block;
	    position: relative;
	    font-size: 16px;
	    line-height: normal;
	    margin: 0px 1px;
	}
	.label{
		color: #DD524D;
		font-size: 12px;
	}
	.text-body{
		margin-left: 20rpx;
	}
</style>