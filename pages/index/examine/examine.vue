<template>
	<view class="content">
		<view class="uni-list">
			<checkbox-group @change="checkboxChange">
				<label class="uni-list-cell uni-list-cell-pd" v-for="item in items" :key="item.value">
					<view>
						<checkbox :value="item.value" :checked="item.checked" />
					</view>
					<view class="name">{{item.name}}</view>
					<view class="company">公司名称：{{item.company}}</view>
				</label>
			</checkbox-group>
		</view>
		<view class="seize"></view>
		<view class="foot">
			<view class="bottom">
				<checkbox class="checked-all" @click="checkedAll" :checked="items.length === getCheckedLength()"/>
				<button type="primary" class="confirm" @click="confirm">审核确认</button>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		name: 'examine',
		data() {
			return {
				items: [
					{
						value: 'wen',
						name: '小文文',
						company: '佛山捷特科技',
						checked: false
					},
					{
						value: 'qing',
						name: '小青青',
						company: '佛山捷特科技',
						checked: false
					},
					{
						value: 'xing',
						name: '小星星',
						company: '佛山捷特科技',
						checked: false
					}
				]
			}
		},
		components: {
		},
		methods: {
			checkboxChange: function (e) {
				let items = this.items,
					values = e.detail.value;
				for (let i = 0, lenI = items.length; i < lenI; ++i) {
					const item = items[i]
					if(values.includes(item.value)){
						item.checked = true
					}else{
						item.checked = false
					}
				}
			},
			getCheckedLength(){ 
				var l = 0;
				for (let item of this.items) {
					l = item.checked ? l+1 : l
				}
				return l
			},
			checkedAll() {
				var eq = this.getCheckedLength() === this.items.length;
				for (let item of this.items) {
					item.checked = !eq
				}
			},
			confirm() {
				var result = []
				for (let item of this.items) {
					if (item.checked) {
						result.push()
					}
				}
			}
		}
	}
</script>

<style scoped>
	.name {
		position: absolute;
		left: 55px;
	}
	
	.company {
		position: absolute;
		left: 150px;
	}
	
	.bottom {
		display: grid;
		grid-template-columns: 15% 85%;
		background-color: #FFFFFF;
		padding: 10px 0;
	}
	
	.confirm {
		width: 90%;
	}
	
	.checked-all {
		text-align: center;
		margin-top: 8px;
		font-size: 15px;
	}
	
	.foot {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 100;
	}
	
	.seize {
		height: 66px;
	}
</style>
