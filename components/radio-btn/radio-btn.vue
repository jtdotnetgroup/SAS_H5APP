<template>
	<radio-group @change="radioChange">
		<label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in items" :key="item.value">
			<view class="big">
				<view class="sameLine label">{{item.name}}</view>
				<view class="sameLine">
					<radio class="radioBtn" :value="item.value" :checked="index === current" />
				</view>
				<view class="separator" v-if="index != items.length-1"></view>
			</view>
		</label>
	</radio-group>
</template>

<script>
	export default {
		name: 'radio',
		data() {
			return {
				current: 0
			}
		},
		components: {
		},
		props: {
			items: Array
		},
		computed: {
		},
		methods: {
			radioChange: function(evt) {
				for (let i = 0; i < this.items.length; i++) {
					if (this.items[i].value === evt.target.value) {
						this.current = i;
						break;
					}
				}
			}
		}
	}
</script>

<style>
	.big {
		width: 100%;
	}
	
	.sameLine {
		display: inline;
		margin-right: 15upx;
	}
	
	.label {
		font-size: 30upx;
		display: inline-block;
	}
	
	.radioBtn {
		position: absolute;
		right: 50rpx;
		margin-top: -4rpx;
	}
	
	.separator {
		border: 1rpx solid #C0C0C0;
		margin: 10rpx 0;
	}
</style>
