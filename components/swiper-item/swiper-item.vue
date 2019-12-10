<template>
	<view>
		<view class="example-body">
			<step-device :options="stageList" active-color="#007AFF" :active="active" direction="column">
				<template v-slot:todo="{todo}">
					<view class="sameLine">
						<view class="uni-steps__column-title" @click="toRepair(todo.id,ticketId)">
							{{todo.name}}
							<!-- <span class="iconfont iconnaozhong alarmClock" ></span> -->
							<!-- <span class="descstyle">{{dateTime(todo.date)}}</span> -->
						</view>
						<view class="uni-steps__column-desc" v-if="completedDate != ''">
							{{ formatDate(completedDate) }}	
						</view>
					</view>
					<view class="sameLine fiexRight">
						<span v-if="todo.stageStatus === 1">
							<span class="iconfont iconchenggong iconSuccess" ></span>
						</span>
						<span v-else>
							<span class="iconfont icontanhao exclamationMark "></span>
						</span>
					</view>
				</template>
			</step-device>
		</view>
	</view>
</template>

<script>
	import {calculationTime} from '@/utils/moment.js'
	import {getStageList} from '@/api/getStageList.js'
	import {format} from '@/utils/formatDate.js'

	export default {
		components: {
			stepDevice: () => import('@/components/step-device/step-device.vue')
		},
		props: {
			ticketId: {
				type: String,
				default () {
					return ""
				}
			},
			ticketType: {
				type: Number,
				default () {
					return ""
				}
			}
		},
		data() {
			return {
				active: 0,
				completedDate: ''
			}
		},
		methods: {
			toRepair(stageId,ticketId) {
				uni.navigateTo({
					url: '../../mytask/repair/workOrderRepair?id=' + stageId + "&ticketId=" + ticketId
				})
			}
		},
		computed: {
			dateTime(time) {
				return time => {
					return calculationTime(time);
				}
			},
			formatDate(time) {
				return time => {
					return format(time)
				}
			},
			stageList() {
				let stageLists = this.$store.getters['stage/getStageList']
				this.active = 0
				this.completedDate = ''
				stageLists.forEach((list, index) => {
					if (list.current == 1) {
						this.active = index
					}
					if (list.stageProcess != null) {
						this.completedDate = list.stageProcess.completedDate
					}
				})
				return stageLists
			}
		},
		beforeMount() {
			let ticketType = this.ticketType
			let ticketId = this.ticketId
			getStageList(ticketType, ticketId).then(response => {
				this.$store.dispatch('stage/GetDataList', response.data.body.pageList)
			}).catch(error => {
				console.log(error);
			})
		}
	}
</script>

<style scoped>
	/* 头条小程序组件内不能引入字体 */
	/* #ifdef MP-TOUTIAO */
	@font-face {
		font-family: uniicons;
		font-weight: normal;
		font-style: normal;
		src: url('~@/static/uni.ttf') format('truetype');
	}

	/* #endif */

	/* #ifndef APP-NVUE */
	page {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		background-color: #efeff4;
		min-height: 100%;
		height: auto;
	}

	view {
		font-size: 28rpx;
		line-height: inherit;
	}

	.example {
		padding: 0 30rpx 30rpx;
	}

	.example-info {
		padding: 30rpx;
		color: #3b4144;
		background: #ffffff;
	}

	.example-body {
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		padding: 0;
		font-size: 14rpx;
		background-color: #ffffff;
	}

	/* #endif */
	.example {
		padding: 0 30rpx;
	}

	.example-info {
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
		padding: 30rpx;
		color: #3b4144;
		background-color: #ffffff;
		font-size: 30rpx;
	}

	.example-info-text {
		font-size: 28rpx;
		line-height: 36rpx;
	}


	.example-body {
		flex-direction: column;
		padding: 30rpx;
		background-color: #ffffff;
	}

	.word-btn-white {
		font-size: 18px;
		color: #FFFFFF;
	}

	.word-btn {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
		justify-content: center;
		border-radius: 6px;
		height: 48px;
		margin: 15px;
		background-color: #007AFF;
	}

	.word-btn--hover {
		background-color: #4ca2ff;
	}


	.status-btn {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
		justify-content: center;
		height: 92rpx;
		margin: 30rpx;
		background-color: #007AFF;
	}

	.example-body {
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
		padding: 15px;
		flex-direction: row;
	}


	/* 自定义 */
	.alarmClock {
		padding-left: 110rpx;
		padding-right: 15rpx;
		color: #4395ff;
	}

	.iconSuccess {
		font-weight: bold;
		font-size: 21px;
		color: rgb(82, 196, 26);
	}

	.exclamationMark {
		font-weight: 600;
		font-size: 18px;
		color: rgb(208, 2, 27);
	}

	.iconstyle {
		font-size: 14px;
		color: #DD524D;
	}

	.sameLine {
		display: inline-block;
	}

	.fiexRight {
		float: right;
		/* position: absolute; */
		margin: 10px;
	}
</style>
