<template>
	<view class="field">
		<view class="inline" v-if="label != ''">
			<label class="label">{{ label }}</label>
		</view>
		<slot></slot>
	</view>
</template>

<script>
	export default {
		name:"field",
		data() {
			return {
			}
		},
		props: {
			label: {
				type: String,
				default: ''
			}
		}
	}
</script>

<style scoped>
	.field {
		background-color: #FFFFFF;
		padding: 20rpx;
		border: 1rpx solid #999999;
	}
	
	.label {
		font-size: 30rpx;
		margin-right: 20rpx;
	}
	
	.inline {
		display: inline-block;
	}
</style>
