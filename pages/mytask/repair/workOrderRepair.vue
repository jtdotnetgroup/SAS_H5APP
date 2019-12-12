<template>
	<view class="content">
		<view class="header">
			<uni-card class="uniCard">
				<view class="info">
					<view class="line">
						<label class="uni-list-cell uni-list-cell-pd">
							<view class="label">{{getTicket.client.name}}</view>
						</label>
					</view>
					<view class="line">
						<label class="uni-list-cell uni-list-cell-pd">
							<view class="sameLine">
								<view class="label sameLine fontsmall bold">
									工单编号：
								</view>
								<view class="label sameLine fontsmall">
									{{getTicket.ticketNum}}
								</view>
							</view>
							<view class="sameLine">
								<view class="label sameLine fontsmall bold">
									分配时间：
								</view>
								<view class="label sameLine fontsmall">
									{{formatDate(getTicket.ticketAssignTime)}}
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
								<location :labelStyle="labelStyle" :label="getTicket.client.area" :left_right="left_right"></location>
							</view>
						</label>
					</view>
				</view>
				<view class="btn">
					<model-label :modelLabel="formatModel"></model-label>
				</view>
			</uni-card>
		</view>
		
		
		<view class="context">
			<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y" @scrolltoupper="upper" @scrolltolower="lower" @scroll="scroll">
				<conf-div title="工作要求:">
					<span class="label">{{stage.memo}}</span>
				</conf-div>
				<conf-div title="当前所在位置:">
					<location :labelStyle="labelStyle" :label="getTicket.client.area" :left_right="left_right"></location>
				</conf-div>
				<conf-div title="同行人员:">
					<view class="big">
						<span class="label user" ref="participant">{{stage.stageProcess.person}}</span>
						<span class="iconfont icontianjiayonghu iconStyle Btn" @click="selectUser"></span>
					</view>
				</conf-div>
				<view v-show="stage.signFlag === 1">
					<conf-div title="签到时间:">
						<view class="big">
							<span class="label user" ref="signInTime">{{signInTime}}</span>
							<span class="iconfont iconqian iconStyle Btn" @click="signIn"></span>
						</view>
					</conf-div>
				</view>
				<view v-show="stage.photoFlag === 1">
					<conf-div title="现场拍照:">
						<chooseImage :num="6" :size="150" @chooseImage="chooseImage" @delImg="chooseImage" :isSave="false" saveStr="chooseImage" :isClear="hasChooseImg" />
					</conf-div>
				</view>
				<conf-div title="完成情况:">
					<radio-btn :items="completion" @radioChange="comChange"></radio-btn>
				</conf-div>
				<view v-show="stage.useProcedure === 1">
					<conf-div title="故障判断:">
						<textarea placeholder="请输入故障判断" ref="faultJudgement"/>
						<view class="separator"></view>
						<label class="label operation">操作规程 >></label>
					</conf-div>
				</view>
				<conf-div title="故障部位:">
					<input placeholder="请输入故障部位" ref="faultLocation"/>
				</conf-div>
				<conf-div title="是否保质期内:">
					<radio-btn :items="yes_no" @radioChange="yes_noChange"></radio-btn>
				</conf-div>
				<view v-show="stage.tmplateFlag === 1">
					<conf-div title="费用合计(元):">
						<input placeholder="请输入费用合计(元)" type="number" ref="cost"/>
					</conf-div>
				</view>
				<conf-div title="客户邮箱:">
					<span class="label">{{getTicket.client.email}}</span>
				</conf-div>
				<view v-show="stage.submitAttach === 1">
					<conf-div title="附件:">
						<Attachment mode="create" :canUploadFile="true" :uploadFileUrl="uploadFileUrl" :heaer="header" :showProcess="true" :attachmentList.sync="attachmentList" @uploadSuccess="uploadSuccess"></Attachment>
					</conf-div>
				</view>
				<view v-show="stage.signOutFlag === 1">
					<conf-div title="签出时间:">
						<view class="big">
							<span class="label user">{{signOutTime}}</span>
							<span class="iconfont iconqian iconStyle Btn" @click="signOut"></span>
						</view>
					</conf-div>
				</view>
				<view style="height: 75px;"></view>
			</scroll-view>
		</view>
		
		
		<view class="bottom">
			<uni-grid :column="3" :show-border="false"  :square="false">
			    <uni-grid-item>
					<view class="bottomIcon" @click="commit">
						<span class="iconfont icontijiao bottomIcon" style="color: #09a0f7;"></span>
						<text class="text">提交</text>
					</view>
			    </uni-grid-item>
			    <uni-grid-item>
					<view class="bottomIcon" @click="">
						<span class="iconfont iconzancun bottomIcon" style="color: #999999;"></span>
						<text class="text">暂存</text>
					</view>
			    </uni-grid-item>
			    <uni-grid-item>
					<view class="bottomIcon" @click="">
						<span class="iconfont iconfangqi bottomIcon" style="color: #d81e06;"></span>
						<text class="text">放弃</text>
					</view>
			    </uni-grid-item>
			</uni-grid>
		</view>
	</view>
</template>

<script>
	import {format} from '@/utils/formatDate.js'
	import {ticketRepairSave} from '@/api/Ticket.js'
	
	export default {
		name: "mytaskRepair",
		data() {
			return {
				id: '',/* 阶段id */
				ticketId: "",/* 工单id */
				labelStyle: {
					'fontSize': '25rpx',
					'display': 'inline-block'
				},
				left_right: '右',
				scrollTop: 0,
				old: {
					scrollTop: 0
				},
				hasChooseImg: '',
				completion: [{
						value: '1',
						name: '完成',
						checked: true
					},
					{
						value: '0',
						name: '继续',
						checked: false
					}
				],
				yes_no: [{
						value: '1',
						name: '是',
						checked: true
					},
					{
						value: '0',
						name: '否',
						checked: false
					}
				],
				uploadFileUrl: 'http://localhost:8080', //替换成你的后端接收文件地址
				header: {
					// 如果需要header，请上传
				},
				attachmentList: [],
				stage: {},/* 阶段对象 */
				stageLists: [],/* 阶段列表（VUEX） */
				signInTime: '',/* 签到时间 */
				signOutTime: '',/* 签出时间 */
				arr: [],/* 图片选择数组 */
				completeStatus: '',/* 完成情况 */
				isQGP: '',/* 是否保质期内 */
				dataForm: {}
			}
		},
		components: {
			uniCard: () => import('@dcloudio/uni-ui/lib/uni-card/uni-card.vue'), 
			uniGrid: () => import('@dcloudio/uni-ui/lib/uni-grid/uni-grid.vue'), 
			uniGridItem: () => import('@dcloudio/uni-ui/lib/uni-grid-item/uni-grid-item.vue'), 
			confDiv: () => import('@/components/conf-div/conf-div.vue'), 
			location: () => import('@/components/location/location.vue'), 
			radioBtn: () => import('@/components/radio-btn/radio-btn.vue'),
			chooseImage: () => import('@/components/xyz-choose-image/xyz-choose-image.vue'),
			Attachment: () => import('@/components/jin-attachment/jin-attachment.vue'),
			modelLabel: () => import('@/components/model-label/model-label.vue')
		},
		onLoad(option) {
			console.log(option);
			this.id = option.id
			this.ticketId = option.ticketId
			this.stageLists = this.$store.getters['stage/getStageList']
			this.stage = this.stageLists.filter(e=>e.id === this.id)[0]
			// console.log(this.stage);
			
			/* 获取当前位置信息 */
			uni.getLocation({
			    type: 'wgs84',
			    success: function (res) {
			        console.log('当前位置的经度：' + res.longitude);
			        console.log('当前位置的纬度：' + res.latitude);
			    }
			});
			
			this.completion.forEach((item) => {
				if (item.checked) {
					this.completeStatus = item.value
				}
			})
			this.yes_no.forEach((item) => {
				if (item.checked) {
					this.isQGP = item.value
				}
			})
		},
		computed: {
			getTicket() {
				let ticketList = this.$store.getters['workOrder/getTicketList']
				return ticketList.filter(e => e.id === this.ticketId)[0]
			},
			formatDate(dateTime) {
				return dateTime =>{
					return format(dateTime)
				}
			},
			formatModel() {
				return this.stageLists.filter(e=>e.id === this.id)[0].name
			}
		},
		methods: {
			selectUser() {
				console.log('选择人员');
			},
			signIn() {
				this.signInTime = format(this.$moment())
			},
			signOut() {
				this.signOutTime = format(this.$moment())
			},
			commit() {
				console.log("提交");
				let formData = new FormData();
				formData.append('participant', this.$refs.participant.innerText)/* 同行人员 */
				formData.append('signInTime', this.$refs.signInTime.innerText)/* 签到时间 */
				for (let i = 0; i < this.arr.length; i++) {
					formData.append('photo', this.arr[i])/* 现场拍照 */
				}
				formData.append('completeStatus', this.completeStatus)/* 完成情况 */
				formData.append('faultJudgement', this.$refs.faultJudgement.valueComposition)/* 故障判断 */
				formData.append('faultLocation', this.$refs.faultLocation.inputValue)/* 故障部位 */
				formData.append('isQGP', this.isQGP)/* 是否保质期内 */
				formData.append('cost', this.$refs.cost.inputValue)/* 费用合计 */
				formData.append('signOutTime', this.signOutTime)/* 签出时间 */
				ticketRepairSave(formData).then(response => {
					
				}).catch(error => {
					console.log(error);
				})
			},
			upper() {
				// console.log("到顶了");
			},
			lower() {
				// console.log("到底了");
			},
			scroll() {
				// console.log("滚动了");
			},
			async chooseImage(imgArr) {
				console.log(imgArr);
				this.arr = [];
				for(let i=0;i<imgArr.length;i++){
					// arr.push(await this.toBase64(imgArr[i]))
					this.arr.push(imgArr[i])
				}
				console.log(this.arr)		
			},
			toBase64(path){
				return new Promise((resolve, reject) => {
					//#ifdef MP-WEIXIN || MP-TOUTIAO
					uni.getFileSystemManager().readFile({
						filePath: path, //选择图片返回的相对路径
						encoding: 'base64', //编码格式
						success: function(ress) {
							//成功的回调
							let base64 = 'data:image/jpeg;base64,' + ress.data;
							resolve(base64)
					
						},
						fail: function(err) {
							reject(err);
						}
					});
					//#endif
				})
			},
			uploadSuccess(result) {
				if(result.statusCode == 200) {
					//上传成功的回调处理
					uni.showToast({
						title: '上传成功',
						icon: 'none'
					});
				}else{
					uni.showToast({
						title: '上传失败',
						icon: 'none'
					});
				}
			},
			comChange(value) {
				this.completeStatus = value
			},
			yes_noChange(value) {
				this.isQGP = value
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
		display: block;
	}
	
	.bottom {
		background-color: #FFFFFF;
		padding: 20rpx 0;
		width: 100%;
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 999;
	}
	
	.bottomIcon {
		text-align: center;
		font-size: 60rpx;
	}
	
	.big {
		width: 100%;
	}
	
	.user {
		width: 90%;
	}
	
	.Btn {
		width: 10%;
	}
	
	.separator {
		border: 1rpx solid #C0C0C0;
		margin: 10rpx 0;
	}
	
	.operation {
		color: #09a0f7;
		margin-left: 500rpx;
	}
</style>
