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
						<span class="label user">{{person}}</span>
						<span class="iconfont icontianjiayonghu iconStyle Btn" @click="stageStatus != 1 ? selectUser() : ''"></span>
					</view>
				</conf-div>
				<view v-show="stage.signFlag === 1">
					<conf-div title="签到时间:">
						<view class="big">
							<span class="label user">{{signInTime}}</span>
							<span class="iconfont iconqian iconStyle Btn" @click="stageStatus != 1 ? signIn() : ''"></span>
						</view>
					</conf-div>
				</view>
				<view v-show="stage.photoFlag === 1">
					<conf-div title="现场拍照:">
						<chooseImage :num="9" :size="150" :isSave="false" saveStr="chooseImage" :isClear="hasChooseImg" :imageList="imageList" :photoList.sync="photoList" @uploadPhotoSuccess="uploadPhotoSuccess" @deletePhotoSuccess="uploadPhotoSuccess" :stageStatus="stageStatus" :photoArr="photoArr" />
					</conf-div>
				</view>
				<conf-div title="完成情况:">
					<radio-btn :items="completion" @radioChange="comChange" :stageStatus="stageStatus"></radio-btn>
				</conf-div>
				<view v-show="stage.useProcedure === 1">
					<conf-div title="故障判断:">
						<textarea placeholder="请输入故障判断" v-model="faultJudgement" :disabled="stageStatus ==1 ? true : false"/>
						<view class="separator"></view>
						<label class="label operation">操作规程 >></label>
					</conf-div>
				</view>
				<conf-div title="故障部位:">
					<jsfun-picker 
						:listArr = "faultLocaList"
						:defaultArr = "faultLocaDefault"
						type="multiple" 
						@click="priceChange"
						:disabled="stageStatus ==1 ? true : false">
						<view class="label">          
							{{faultLocaDefault}}
						</view>
					</jsfun-picker>
				</conf-div>
				<conf-div title="是否保质期内:">
					<radio-btn :items="yes_no" @radioChange="yes_noChange" :stageStatus="stageStatus"></radio-btn>
				</conf-div>
				<view v-show="stage.tmplateFlag === 1">
					<conf-div title="费用合计(元):">
						<input placeholder="请输入费用合计(元)" type="number" v-model="cost" :disabled="stageStatus ==1 ? true : false"/>
					</conf-div>
				</view>
				<conf-div title="客户邮箱:">
					<span class="label">{{getTicket.client.email}}</span>
				</conf-div>
				<view v-show="stage.submitAttach === 1">
					<conf-div title="附件:">
						<Attachment mode="create" :canUploadFile="true" :showProcess="true" :attachmentList.sync="attachmentList" @uploadSuccess="uploadSuccess" @deleteSuccess="uploadSuccess" :stageStatus="stageStatus" :fileArr="fileArr"></Attachment>
					</conf-div>
				</view>
				<view v-show="stage.signOutFlag === 1">
					<conf-div title="签出时间:">
						<view class="big">
							<span class="label user">{{signOutTime}}</span>
							<span class="iconfont iconqian iconStyle Btn" @click="stageStatus != 1 ? signOut() : ''"></span>
						</view>
					</conf-div>
				</view>
				<view v-show="stageStatus != 1">
					<view style="height: 75px;"></view>
				</view>
			</scroll-view>
		</view>
		
		
		<view v-show="stageStatus != 1">
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
	</view>
</template>

<script>
	import {format} from '@/utils/formatDate.js'
	import {ticketRepairSave} from '@/api/Ticket.js'
	//import * as dd from 'dingtalk-jsapi'
	
	export default {
		name: "mytaskRepair",
		data() {
			return {
				id: '',/* 阶段id */
				ticketId: "",/* 工单id */
				stageStatus: '',/* 阶段完成状态 */
				ticketType: '',/* 工单类型 */
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
				attachmentList: [],
				photoList: [],
				fileList:[],
				imageList: [],
				fileImage:[],
				stage: {},/* 阶段对象 */
				stageLists: [],/* 阶段列表（VUEX） */
				person: '',/* 同行人员 */
				signInTime: '',/* 签到时间 */
				signOutTime: '',/* 签出时间 */
				arr: [],/* 图片选择数组 */
				completeStatus: '',/* 完成情况 */
				isQGP: '',/* 是否保质期内 */
				dataForm: {},
				faultJudgement: '',/* 故障判断 */
				faultLocation: '',/* 故障部位 */
				cost: '',/* 费用合计 */
				fileArr: [],
				photoArr: [],
				faultLocaDefault: ''
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
			modelLabel: () => import('@/components/model-label/model-label.vue'),
			jsfunPicker: () => import('@/components/jsfun-picker/jsfun-picker.vue')
		},
		onLoad(option) {
			console.log(option);
			this.id = option.id
			this.ticketId = option.ticketId
			this.stageStatus = option.stageStatus
			this.ticketType = option.ticketType
			this.stageLists = this.$store.getters['stage/getStageList']
			this.stage = this.stageLists.filter(e=>e.id === this.id)[0]
			console.log(this.stage);
			if (this.stage.stageProcess != undefined) {
				this.person = this.stage.stageProcess.person
				this.signInTime = format(this.stage.stageProcess.completedDate)
				this.signOutTime = format(this.stage.stageProcess.completedDate)
				this.faultJudgement = this.stage.stageProcess.memo
				this.completion.forEach((i) => {
					if (i.value == this.stage.stageProcess.completeStatus) {
						i.checked = true
						this.completeStatus = i.value
					}
				})
				this.yes_no.forEach((i) => {
					if (i.value == this.getTicket.warrantyPeriod) {
						i.checked = true
						this.isQGP = i.value
					}
				})
				
				var photoList = this.stage.stageProcess.photoList
				for (let i = 0; i < photoList.length; i++) {
					var path = this.$IP + photoList[i].path
					var obj ={id: photoList[i].id, path: path}
					this.imageList.push(obj)
					var photoArr = {id: photoList[i].id, fileName: photoList[i].fileName}
					this.photoArr.push(photoArr)
					this.fileImag = this.photoArr
				}
				
				var filesList = this.stage.stageProcess.filesList
				for (let i = 0; i < filesList.length; i++) {
					var file = {'id': filesList[i].id, 'fileName': filesList[i].fileName, 'index': i, 'process': 100, 'type': 'file'}
					this.attachmentList.push(file)
					var fileArr = {'id': filesList[i].id, 'fileName': filesList[i].fileName}
					this.fileArr.push(fileArr)
					this.fileList = this.fileArr
				}
			}
			
			// this.completion.forEach((item) => {
			// 	if (item.checked) {
			// 		this.completeStatus = item.value
			// 	}
			// })
			// this.yes_no.forEach((item) => {
			// 	if (item.checked) {
			// 		this.isQGP = item.value
			// 	}
			// })
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
			},
			faultLocaList() {
				return this.$store.getters['dic/getFaultLocaList']
			}
		},
		methods: {
			selectUser() {
				console.log('选择人员');
				// dd.ready(() => {
					
				// })
				// dd.error((error) => {
				// 	uni.showModal({
				// 		title: '错误',
				// 		content: 'dd error: ' + JSON.stringify(error)
				// 	})
				// })
			},
			signIn() {
				this.signInTime = format(this.$moment())
			},
			signOut() {
				this.signOutTime = format(this.$moment())
			},
			commit() {
				this.commitInfo();
			},
			async commitInfo(){
				let formData = new FormData();
				var imageInfo = this.fileImag;
				var  imageId = ""; var imageName = "";
				if( imageInfo != null){
					for (var i = 0; i < imageInfo.length; i++) {
						if(imageInfo.length-1 === i){
							imageId = imageId + imageInfo[i].id;
							imageName = imageName + imageInfo[i].fileName;
						}else{
							imageId = imageId + imageInfo[i].id+",";
							imageName = imageName + imageInfo[i].fileName+",";
						}
					}
				}
				formData.append("photoId",imageId);
				formData.append("phototName",imageName);
				formData.append('participant', this.person)/* 同行人员 */
				formData.append('signInTime', this.signInTime)/* 签到时间 */
				formData.append('completeStatus', this.completeStatus)/* 完成情况 */
				formData.append('faultJudgement', this.faultJudgement)/* 故障判断 */
				formData.append('faultLocation', this.faultLocation)/* 故障部位 */
				formData.append('isQGP', this.isQGP)/* 是否保质期内 */
				formData.append('cost', this.cost)/* 费用合计 */
				formData.append('signOutTime', this.signOutTime)/* 签出时间 */
				var  fileId = "";
				var fileName = "";
				var  fileList = this.fileList;
				if( fileList != null){
					for (var i = 0; i < fileList.length; i++) {
						if(fileList.length-1 === i){
							fileId = fileId + fileList[i].id;
							fileName = fileName + fileList[i].fileName; 
						}else{
							fileId = fileId + fileList[i].id+",";
							fileName = fileName + fileList[i].fileName+","; 
						}
					}
				}
				formData.append('fileIds', fileId);
				formData.append('fileNames', fileName);
				let header = {
					'ticketId': this.ticketId,
					'stageId': this.id
				}
				ticketRepairSave(formData, header).then(response => {
					console.log(response);
					if (response.status === 200) {
						uni.showToast({
							title: '保存成功',
							duration: 2000,
							mask: true
						})
						uni.navigateBack({
							delta:1
						})
						var payload = {'ticketType': this.ticketType, 'ticketId': this.ticketId}
						this.$store.dispatch('stage/GetDataList', payload)
					}
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
			uploadPhotoSuccess(result, entityList) {
				if(result.statusCode == 200 || result.confirm) {
					this.fileImag = entityList;
				}
			},
			uploadSuccess(result,entityList) {
				if(result.statusCode == 200 || result.confirm) {
					this.fileList = entityList;
				}
			},
			comChange(value) {
				this.completeStatus = value
			},
			yes_noChange(value) {
				this.isQGP = value
			},
			priceChange(data){
				console.log("==返回值==");
				console.log(data);
				console.log(data.indexStr);
				console.log(data.textStr);
				this.faultLocaDefault = data.textStr
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
	
	textarea {
		width: 100%;
	}
</style>
