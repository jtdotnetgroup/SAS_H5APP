<template>
	<view class="content">
		<view class="header">
			<uni-card class="uniCard">
				<view class="info">
					<view class="line">
						<label class="uni-list-cell uni-list-cell-pd">
							<view class="label">{{getTicket.company}}</view>
						</label>
					</view>
					<view class="line">
						<label class="uni-list-cell uni-list-cell-pd">
							<view class="sameLine">
								<view class="label sameLine fontsmall bold">
									工单编号：
								</view>
								<view class="label sameLine fontsmall">
									F20191202
								</view>
							</view>
							<view class="sameLine">
								<view class="label sameLine fontsmall bold">
									分配时间：
								</view>
								<view class="label sameLine fontsmall">
									{{formatDate(getTicket.date)}}
								</view>
							</view>
						</label>
					</view>
					<view class="line">
						<label class="uni-list-cell uni-list-cell-pd">
							<view class="sameLine">
								<view class="label sameLine fontsmall bold">
									客户地址：
								</view>
								<location :labelStyle="labelStyle" :label="getTicket.location" :left_right="left_right"></location>
							</view>
						</label>
					</view>
				</view>
				<view class="btn">
					<button class="mini-btn" size="mini">维修工单</button>
				</view>
			</uni-card>
		</view>
		
		
		<view class="context">
			<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y" @scrolltoupper="upper" @scrolltolower="lower" @scroll="scroll">
			<conf-div title="工作要求:">
				<view class="label">及时定位，拍照上传</view>
			</conf-div>
			<conf-div title="当前所在位置:">
				<location :labelStyle="labelStyle" :label="getTicket.location" :left_right="left_right"></location>
			</conf-div>
			<conf-div title="同行人员:">
				<view class="label">选择人员</view>
			</conf-div>
			<conf-div title="签到时间:">
				<view class="label">2019-12-03 14:51</view>
			</conf-div>
			<conf-div title="现场拍照:">
				<view class="label">拍照</view>
			</conf-div>
			<conf-div title="完成情况:">
				<view class="label">完成</view>
				<view class="label">继续</view>
			</conf-div>
			</scroll-view>
		</view>
		
		
		<view class="bottom">
			<uni-grid :column="3" :show-border="false"  :square="false">
			    <uni-grid-item>
					<span class="iconfont icontijiao bottomIcon" style="color: #09a0f7;"></span>
			        <text class="text">提交</text>
			    </uni-grid-item>
			    <uni-grid-item>
					<span class="iconfont iconzancun bottomIcon" style="color: #999999;"></span>
			        <text class="text">暂存</text>
			    </uni-grid-item>
			    <uni-grid-item>
					<span class="iconfont iconfangqi bottomIcon" style="color: #d81e06;"></span>
			        <text class="text">放弃</text>
			    </uni-grid-item>
			</uni-grid>
		</view>
	</view>
</template>

<script>
	import {uniCard, uniGrid, uniGridItem} from "@dcloudio/uni-ui"
	import {format} from '../../../utils/formatDate.js'
	import confDiv from '../../../components/conf-div/conf-div.vue'
	import location from '../../../components/location/location.vue'
	
	export default {
		name: "mytaskRepair",
		data() {
			return {
				id: '',
				labelStyle: {
					'fontSize': '25rpx',
					'display': 'inline-block'
				},
				left_right: '右',
				scrollTop: 0,
				old: {
					scrollTop: 0
				}
			}
		},
		components: {
			uniCard, uniGrid, uniGridItem, confDiv, location
		},
		onLoad(option) {
			this.id = option.id
		},
		computed: {
			getTicket() {
				let ticketList = this.$store.getters['workOrder/getTicketList']
				return ticketList.filter(e => e.id === this.id)[0]
			},
			formatDate(dateTime) {
				return dateTime =>{
					return format(dateTime)
				}
			}
		}
	}
</script>

<style scoped>
	.uniCard {
		margin: 10upx 0;
	}

	.label {
		font-size: 30upx;
		display: inline-block;
	}

	.sameLine {
		display: inline;
		margin-right: 15upx;
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
		font-size: 70upx;
		position: absolute;
		top: 280upx;
		right: 50upx;
	}

	.right {
		position: absolute;
		right: 10upx;
		border: 1rpx solid #ffe289;
		color: #fec6c6;
		padding: 10upx;
		margin-top: -7upx;
	}
	
	.fontsmall {
		font-size: 25rpx;
	}
	
	.bold {
		font-weight: bold;
	}
	
	.text {
		text-align: center;
		font-size: 20rpx;
	}
	
	.bottom {
		background-color: #FFFFFF;
		padding: 20rpx 0;
		width: 100%;
		position: absolute;
		left: 0;
		bottom: 0;
		z-index: 999;
	}
	
	.bottomIcon {
		text-align: center;
		font-size: 50rpx;
	}
	
	.posRight {
		position: absolute;
		right: 0;
	}
	
	.scroll-Y {
		height: calc(100vh - 113px - 95px);
	}
</style>
