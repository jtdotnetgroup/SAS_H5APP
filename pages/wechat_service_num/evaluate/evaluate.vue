<template>
	<view>
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
			<uni-rate :is-fill="isFill"></uni-rate>
		</field>
	</view>
</template>

<script>
	export default {
		name:'evaluate',
		data() {
			return {
				isFill: false
			}
		},
		components: {
			field: () => import('../declare/component/field.vue'),
			modelLabel: () => import('@/components/model-label/model-label.vue'),
			uniRate: () => import('@dcloudio/uni-ui/lib/uni-rate/uni-rate.vue')
		}
	}
</script>

<style>
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
</style>
