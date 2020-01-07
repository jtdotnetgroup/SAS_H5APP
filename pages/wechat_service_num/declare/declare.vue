<template>
	<view>
		<form @submit="formSubmit" @reset="formReset">
			<field label="设备编号: ">
				<label class="label">XXXXXX</label>
			</field>
			<field label="设备名称: ">
				<label class="label">XXXXXX</label>
			</field>
			<field label="故障时间: ">
				<label class="label">2019-12-11</label>
			</field>
			<field label="故障部位: ">
				<view class="inline">
					<fl-picker
						:listArr="faultLocaList"
						:defaultArr = "faultLocaDefault"
						type="multiple" 
						@click="priceChange"
						:disabled="2 ==1 ? true : false"
						:mess="''"
						open="1">
						<view class="label">
							{{faultLocaDefault}}
						</view>
					</fl-picker>
				</view>
			</field>
			<field label="故障描述: ">
				<textarea class="inline textarea" :adjust-position='adjust'></textarea>
			</field>
			<field label="紧急程度: ">
				<radio-group class="inline" @change="radioChange">
					<label v-for="(item, index) in items" :key="item.value">
						<radio :value="item.value" :checked="index === current" />
						<view class="inline spacing">{{item.name}}</view>
					</label>
				</radio-group>
			</field>
			<field label="照片上传: ">
				<chooseImage :num="9" :size="150" :isSave="false" saveStr="chooseImage" :isClear="hasChooseImg" :imageList="imageList"
				 :photoList.sync="photoList" @uploadPhotoSuccess="uploadPhotoSuccess" @deletePhotoSuccess="deletePhotoSuccess"
				 :photoArr="photoArr" />
			</field>
			<field>
				<view class="gird">
					<button form-type="submit" type="primary" size="mini">提交</button>
					<button form-type="reset" type="warn" size="mini">关闭</button>
				</view>
			</field>
		</form>
	</view>
</template>

<script>
	export default {
		name:"declare",
		data() {
			return {
				faultLocaList: [],
				faultLocaDefault: '',
				adjust: true,
				items: [{
					value: '0',
					name: '一般',
					checked: 'true'
				},
				{
					value: '1',
					name: '紧急'
				},
				{
					value: '2',
					name: '非常紧急'
				}],
				current: 0,
				hasChooseImg: '',
				imageList: [],
				photoList: [],
				photoArr: [],
			}
		},
		components: {
			field: () => import('./component/field.vue'),
			flPicker: () => import('@/components/fl-picker/fl-picker.vue'),
			chooseImage: () => import('@/components/xyz-choose-image/xyz-choose-image.vue'),
		},
		methods: {
			formSubmit(e) {
				console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value));
			},
			formReset(e) {
				console.log('清空数据')
			},
			priceChange(data){
				console.log("==返回值==");
				console.log(data);
				console.log(data.indexStr);
				console.log(data.textStr);
				this.faultLocaDefault = data.textStr
			},
			radioChange(evt) {
				for (let i = 0; i < this.items.length; i++) {
					if (this.items[i].value === evt.target.value) {
						this.current = i;
						break;
					}
				}
			},
			uploadPhotoSuccess(result, entityList) {
				if(result.statusCode == 200) {
					this.fileImag = entityList;
				}
			},
			deletePhotoSuccess(result, entityList, photoId) {
				if(result.confirm) {
					this.fileImag = entityList;
					this.del_photoId = photoId
				}
			},
		}
	}
</script>

<style>
	.label {
		font-size: 35rpx;
	}
	
	.inline {
		display: inline-block;
	}
	
	.textarea {
		width: 100%;
	}
	
	.spacing {
		margin-right: 20rpx;
	}
	
	.gird {
		display: grid;
		grid-template-columns: 50% 50%;
	}
</style>
