<template>
	<view @click="goDetail(info.ticketId)">
		<uni-swipe-action>
			<uni-swipe-action-item :options="options" @click="onClick" @change="change(info)" >
				<uni-card class="uniCard">
					<view class="info">
						<view class="line">
							<label class="uni-list-cell uni-list-cell-pd">
								<view class="label">工单编号：{{ info.ticketNum }}</view>
							</label>
						</view>
						<view class="line">
							<label class="uni-list-cell uni-list-cell-pd">
								<view class="label">设备编号：{{info.equipmentNum}}</view>
							</label>
						</view>
						<view class="line">
							<label class="uni-list-cell uni-list-cell-pd">
								<view class="label">设备名称：{{ info.name }}</view>
							</label>
						</view>
						<view class="line">
							<label class="uni-list-cell uni-list-cell-pd">
								<view class="label sameLine">联系人：{{ info.enginnerName }}</view>
								<view class="label sameLine">{{ info.enginnerMobile }}</view>
							</label>
						</view>
						<view class="line">
							<label class="uni-list-cell uni-list-cell-pd">
								<view class="label sameLine">申报时间：{{formatDate(info.faulApplyTime)}}</view>
							</label>
						</view>
					</view>
					<view class="btn">
						<model-label :modelLabel="formatModel"></model-label>
						<phone :phoneNum="info.telephone"></phone>
					</view>
				</uni-card>
			</uni-swipe-action-item>
		</uni-swipe-action>
	</view>
</template>

<script>
	import {calculationTime} from '@/utils/moment.js'
	import {format} from '@/utils/formatDate.js'

	export default {
		name: 'card',
		data() {
			return {
				detail:[],
				label: {
					'fontSize': '30upx',
					'display': 'inline-block'
				},
				left_right: '左',
				options:[
					{
						text: '服务评价',
						style: {
							backgroundColor: '#007aff'
						},
						url:"../evaluate/evaluate"
					},
					{
						text: '故障详情',
						style: {
							backgroundColor: '#09A0F7'
						},
						url:"../evaluate/evaluate"
					}
				],
			}
		},
		components: {
			uniCard: () => import('@dcloudio/uni-ui/lib/uni-card/uni-card.vue'), 
			location: () => import('@/components/location/location.vue'), 
			phone: () => import('@/components/phone/phone.vue'), 
			modelLabel: () => import('@/components/model-label/model-label.vue'),
			uniSwipeAction: () => import('@dcloudio/uni-ui/lib/uni-swipe-action/uni-swipe-action.vue'),
			uniSwipeActionItem: () => import('@dcloudio/uni-ui/lib/uni-swipe-action-item/uni-swipe-action-item.vue')
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
			},
			formatModel() {
				let dic = this.$store.getters['dic/getTypeList']
				let result
				if (dic != '') {
					result = dic.filter(e=>e.key == this.info.ticketModelId)[0].value
				} else {
					result = ''
				}
				return result
			}
		},
		methods: {
			goDetail(id) {
				uni.setStorageSync('ticketId', id)
				uni.navigateTo({
					url: './detail/work-order-detail'
				})
			},
			onClick(e){
				if (e.index == 0) {
					uni.navigateTo({
						url: e.content.url +'?detailData=' + encodeURIComponent(JSON.stringify(this.detail))
					})
				}
			},
			change(info){
				//console.log(info);
				let  project = {
					"id" : info.ticketId,
					"ticketNum"  : info.ticketNum,
					"ticketModelId" : info.ticketModelId,
					"ticketScore" : info.ticketScore,
					"ticketComemt" : info.ticketComemt,
					"enginnerNo" : info.enginnerNo,
					"enginnerName" : info.enginnerName,
					"enginnerMobile" : info.enginnerMobile,
					
				}
				console.log(JSON.parse(JSON.stringify(project)));
				this.detail = project;
			}
		}
	}
</script>

<style scoped>
	.uniCard {
		margin: 10upx !important;
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
