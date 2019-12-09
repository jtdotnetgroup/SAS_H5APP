<template>
	<view>
		<view class="example-body">
			<step-device :options="stageList" active-color="#007AFF" :active="active" direction="column">
				<template v-slot:todo="{todo}">
					<view class="sameLine">
						<view class="uni-steps__column-title" @click="toRepair(todo.id,ticketId)">
							{{todo.title}}
							<span class="iconfont iconnaozhong alarmClock" ></span>
							<span class="descstyle">{{dateTime(todo.desc)}}</span>
						</view>
						<view class="uni-steps__column-desc">
							计划时间：{{ todo.desc }}	
						</view>
					</view>
					<view class="sameLine fiexRight">
						<span v-if="todo.status === 1">
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

	export default {
		components: {
			stepDevice: () => import('@/components/step-device/step-device.vue')
		},
		props:{
			ticketId:{
				type: String,
				default () {
					return ""
				}
			}
		},
		data() {
			return {
				active: 0,
				stageList: [{
					id: '6',
					title: '完工汇报',
					desc: '2019-05-11 12:36:44',
					status: 0
				},{
					id: '5',
					title: '维修工单',
					desc: '2019-06-04 15:45:11',
					status: 0
				},{
					id: '4',
					title: '故障处理',
					desc: '2019-07-01 10:11:35',
					status: 1
				}]
			}
		},
		methods: {
			change() {
				if (this.active < this.stageList.length - 1) {
					this.active += 1
				} else {
					this.active = 0
				}
			},
			toRepair(stageId,ticketId) {
				uni.navigateTo({
					url: '../../mytask/repair/workOrderRepair?id='+ stageId + "&ticketId="+ticketId
				})
			}
		},
		computed: {
			dateTime(time){
				return time =>{
					return calculationTime(time);
				}
			}
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
	.alarmClock{
		padding-left:110rpx;
		padding-right:15rpx;
		color:#4395ff;
	}
	
	.iconSuccess{
		font-weight:bold;
		font-size: 21px;
		color:rgb(82, 196, 26);
	}
	
	.exclamationMark{
		font-weight:600;
		font-size: 18px;
		color: rgb(208, 2, 27);
	}
	
	.iconstyle{
		font-size: 14px;
		color: #DD524D;
	}
	
	.sameLine {
		display: inline-block;
	}
	
	.fiexRight {
		float:right;
		/* position: absolute; */
		margin:10px;
	}
</style>
