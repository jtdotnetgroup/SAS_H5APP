<template>
	<view class="body_view">
		<field label="工单编号:">
			<label>XXXXXX</label>
			<model-label modelLabel="维修工单"></model-label>
		</field>
		<view class="grid">
			<view>
				<field label="编号:">
					<label>XXXXXXXXXXXXX</label>
				</field>
				<field label="电话:">
					<label>138XXXXXXXX</label>
				</field>
			</view>
			<view class="imgDiv img_grid">
				<view>
					<image src="../../../static/user.png" class="img"></image>
				</view>
				<view>
					<label>XXX</label>
				</view>
			</view>
		</view>
		<field label="满意度评价:">
			<uni-rate :is-fill="isFill" v-on:change="product"></uni-rate>
			<span class="label">{{satisfiedScore}}</span>
			<span class="label text-body">{{satisfiedRateScoreText}}</span>
		</field>
		<view class="uni-textarea">
			<textarea  style="border:#EFEFF4 solid;" placeholder="服务评价:"/>
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
				isFill: false,
				satisfiedScore: '',
				satisfiedRateScoreText: '',
				rateScoreDesc: ['非常不满意，各方面都很差', '不满意，比较差', '一般满意，还需改善', '比较满意，仍可改善', '非常满意，无可挑剔'],
			}
		},
		components: {
			field: () => import('../declare/component/field.vue'),
			modelLabel: () => import('@/components/model-label/model-label.vue'),
			uniRate: () => import('../suggests/component/rate-xing.vue')
		},
		methods:{
			product(index) {
				this.satisfiedRateScoreText = this.rateScoreDesc[index.value - 1]
				this.satisfiedScore = index.value + "星";
			}
		}
	}
</script>

<style>
	.body_view{
		background-color: #FFFFFF;
	}
	.grid {
		display: grid;
		grid-template-columns: 60% 40%;
	}
	
	.img {
		border: 2rpx solid #999999;
		width: 100rpx;
		height: 100rpx;
		border-radius: 100rpx;
		margin-top: 15rpx;
	}
	
	.imgDiv {
		display: table-cell;
		vertical-align: middle;
		text-align: center;
		background-color: #FFFFFF;
	}
	
	.img_grid {
		display: grid;
		grid-template-rows: 70% 30%
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
		font-size: 12px;
	}
	.label.text-body{
		color: #DD524D;
		margin-left: 18rpx;
	}
	.example-body-btn {
		margin: 20rpx;
		width: 95%;
		height: 30%;
		bottom:0;
	}
</style>
