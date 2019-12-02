<template>
	<view @click="goDetail(info.id)">
		<uni-card class="uniCard" note="true">
			<view class="info">
				<view class="line">
					<label class="uni-list-cell uni-list-cell-pd">
						<view class="label">{{ info.company }}</view>
					</label>
				</view>
				<view class="line">
					<label class="uni-list-cell uni-list-cell-pd">
						<span class="iconfont iconhuizhengongzuoliang iconStyle"></span>
						<view class="label sameLine">联系人：{{ info.contacts }}</view>
						<view class="label sameLine">{{ info.tel }}</view>
					</label>
				</view>
				<view class="line">
					<label class="uni-list-cell uni-list-cell-pd">
						<span class="iconfont icondingwei iconStyle"></span>
						<view class="label sameLine">{{ info.location }}</view>
					</label>
				</view>
			</view>
			<view class="btn">
				<button class="mini-btn" size="mini">维修工单</button>
				<span class="iconfont iconphone phone"></span>
			</view>
			<template v-slot:footer>
				<view class="footer-box">
					<view class="label">{{ formatDate }}</view>
					<view class="label right">{{ calTime(formatDate) }}</view>
				</view>
			</template>
		</uni-card>
	</view>
</template>

<script>
	import {
		uniCard
	} from "@dcloudio/uni-ui"
	import {
		calculationTime
	} from '../../utils/moment.js'

	export default {
		name: 'card',
		data() {
			return {}
		},
		components: {
			uniCard
		},
		props: {
			'info': Object
		},
		computed: {
			formatDate() {
				return this.$moment(this.info.date).format('YYYY-MM-DD HH:mm')
			},
			calTime(dateTime) {
				return dateTime => {
					return calculationTime(dateTime)
				}
			}
		},
		methods: {
			goDetail(id) {
				
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
		font-size: 70upx;
		position: absolute;
		top: 100upx;
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
</style>
