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
					<mobel-label :modelLabel="formatModel"></mobel-label>
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
					<view class="big">
						<view class="label user">选择人员</view>
						<span class="iconfont icontianjiayonghu iconStyle Btn" @click="selectUser"></span>
					</view>
				</conf-div>
				<conf-div title="签到时间:">
					<view class="big">
						<view class="label user">2019-12-03 14:51</view>
						<span class="iconfont iconqian iconStyle Btn" @click="signIn"></span>
					</view>
				</conf-div>
				<conf-div title="现场拍照:">
					<chooseImage :num="6" :size="150" @chooseImage="chooseImage" @delImg="chooseImage" :isSave="true" saveStr="chooseImage" :isClear="hasChooseImg" />
				</conf-div>
				<conf-div title="完成情况:">
					<radio-btn :items="completion"></radio-btn>
				</conf-div>
				<conf-div title="故障判断:">
					<textarea placeholder="请输入故障判断" />
					<view class="separator"></view>
					<label class="label operation">操作规程 >></label>
				</conf-div>
				<conf-div title="故障部位:">
					<input placeholder="请输入故障部位" />
				</conf-div>
				<conf-div title="是否保质期内:">
					<radio-btn :items="yes_no"></radio-btn>
				</conf-div>
				<conf-div title="费用合计(元):">
					<input placeholder="请输入费用合计(元)" />
				</conf-div>
				<conf-div title="客户邮箱:">
					<input placeholder="请输入客户邮箱" />
				</conf-div>
				<conf-div title="附件:">
					<Attachment mode="create" :canUploadFile="true" :uploadFileUrl="uploadFileUrl" :heaer="header" :showProcess="true" :attachmentList.sync="attachmentList" @uploadSuccess="uploadSuccess"></Attachment>
				</conf-div>
				<conf-div title="签出时间:">
					<view class="big">
						<view class="label user">2019-12-03 14:51</view>
						<span class="iconfont iconqian iconStyle Btn" @click="signOut"></span>
					</view>
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
	import {format} from '@/utils/formatDate.js'
	import confDiv from '@/components/conf-div/conf-div.vue'
	import location from '@/components/location/location.vue'
	import radioBtn from '@/components/radio-btn/radio-btn.vue'
	import chooseImage from '@/components/xyz-choose-image/xyz-choose-image.vue';
	import Attachment from '@/components/jin-attachment/jin-attachment.vue';
	import mobelLabel from '@/components/model-label/model-label.vue'
	
	export default {
		name: "mytaskRepair",
		data() {
			return {
				id: '',
				ticketId: "",
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
						name: '完成'
					},
					{
						value: '0',
						name: '继续'
					}
				],
				yes_no: [{
						value: '1',
						name: '是'
					},
					{
						value: '0',
						name: '否'
					}
				],
				uploadFileUrl: 'http://localhost:8080', //替换成你的后端接收文件地址
				header: {
					// 如果需要header，请上传
				},
				attachmentList: []
			}
		},
		components: {
			uniCard, 
			uniGrid, 
			uniGridItem, 
			confDiv, 
			location, 
			radioBtn,
			chooseImage,
			Attachment,
			mobelLabel
		},
		onLoad(option) {
			console.log(option);
			this.id = option.id
			this.ticketId = option.ticketId
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
				let dic = this.$store.getters['dic/getDicList']
				return dic.filter(e=>e.key == this.getTicket.ticketModelId)[0].value
			}
		},
		methods: {
			selectUser() {
				console.log('选择人员');
			},
			signIn() {
				console.log("签到");
			},
			signOut() {
				console.log("签出");
			},
			upper() {
				console.log("到顶了");
			},
			lower() {
				console.log("到底了");
			},
			scroll() {
				console.log("滚动了");
			},
			async chooseImage(imgArr) {
				console.log(imgArr);
				let arr = [];
				for(let i=0;i<imgArr.length;i++){
					arr.push(await this.toBase64(imgArr[i]))
				}
				console.log(arr)		
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
	
	.scroll-Y {
		height: calc(100vh - 113px - 95px);
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
