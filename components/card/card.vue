<template>
	<view @click="goDetail(info.id)">
		<uni-card class="uniCard" note="true">
			<view class="info">
				<view class="line">
					<label class="uni-list-cell uni-list-cell-pd">
						<view class="label">{{ info.client.name }}</view>
					</label>
				</view>
				<view class="line">
					<label class="uni-list-cell uni-list-cell-pd">
						<span class="iconfont iconhuizhengongzuoliang iconStyle"></span>
						<view class="label sameLine">联系人：{{ info.client.contact }}</view>
						<view class="label sameLine">{{ info.client.telephone }}</view>
					</label>
				</view>
				<view class="line">
					<label class="uni-list-cell uni-list-cell-pd">
						<location :labelStyle="label" :label="info.client.area" :left_right="left_right"></location>
					</label>
				</view>
			</view>
			<view class="btn">
				<button class="mini-btn" size="mini">维修工单</button>
				<phone :phoneNum="info.client.telephone"></phone>
			</view>
			<template v-slot:footer>
				<view class="footer-box">
					<view class="label">{{ formatDate(info.ticketAssignTime) }}</view>
					<view class="label right">{{ calTime(formatDate(info.ticketAssignTime)) }}</view>
				</view>
			</template>
		</uni-card>
	</view>
</template>

<script>
	import {uniCard} from "@dcloudio/uni-ui"
	import {calculationTime} from '@/utils/moment.js'
	import {format} from '@/utils/formatDate.js'
	import location from '../location/location.vue'
	import phone from '../phone/phone.vue'

	export default {
		name: 'card',
		data() {
			return {
				label: {
					'fontSize': '30upx',
					'display': 'inline-block'
				},
				left_right: '左'
			}
		},
		components: {
			uniCard, location, phone
		},
		props: {
			'info': Object
		},
		computed: {
			formatDate(dateTime) {
				return dateTime => {
					return format(dateTime)
				}
			},
			calTime(dateTime) {
				return dateTime => {
					return calculationTime(dateTime)
				}
			}
		},
		methods: {
			goDetail(id) {
				uni.navigateTo({
					url: '../../pages/mytask/detail/workOrderDetail?id=' + id
				})
			}
		}
	}
</script>

<style scoped>
	.uniCard {
		margin: 10upx;
	}

	.label {
		font-size: 30upx;
		display: inline-block;
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
		top: 120upx;
	}

	.right {
		position: absolute;
		right: 10upx;
		border: 1rpx solid #ffe289;
		color: #fec6c6;
		padding: 10upx;
		margin-top: -7upx;
	}
</style>
