<template>
	<view class="content">
		<uni-card class="uniCard" note="true">
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
			</view>
			<view class="btn">
				<button class="mini-btn" size="mini">维修工单</button>
			</view>
			<template v-slot:footer>
				<view class="line">
					<label class="uni-list-cell uni-list-cell-pd">
						<view class="sameLine">
							<view class="label sameLine fontsmall bold">
								客户地址：
							</view>
							<view class="label sameLine fontsmall">
								{{getTicket.location}}
							</view>
						</view>
						<span class="iconfont icondingwei iconStyle"></span>
					</label>
				</view>
				<view class="line">
					<label class="uni-list-cell uni-list-cell-pd">
						<view class="sameLine">
							<view class="label sameLine fontsmall bold">
								主联系人：
							</view>
							<view class="label sameLine fontsmall">
								{{getTicket.contacts}}
							</view>
						</view>
						<view class="sameLine">
							<view class="label sameLine fontsmall bold">
								职位：
							</view>
							<view class="label sameLine fontsmall">
								院长
							</view>
						</view>
					</label>
				</view>
				<view class="line">
					<label class="uni-list-cell uni-list-cell-pd">
						<view class="sameLine">
							<view class="label sameLine fontsmall bold">
								联系方式：
							</view>
							<view class="label sameLine fontsmall">
								{{getTicket.tel}}
							</view>
						</view>
						<span class="iconfont iconphone phone"></span>
					</label>
				</view>
			</template>
		</uni-card>
	</view>
</template>

<script>
	import {
		uniCard
	} from "@dcloudio/uni-ui"
	import {format} from '../../../utils/formatDate.js'

	export default {
		name: "mytaskDetail",
		data() {
			return {
				id: ''
			}
		},
		components: {
			uniCard
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
		font-size: 13rpx;
	}
	
	.bold {
		font-weight: bold;
	}
</style>
