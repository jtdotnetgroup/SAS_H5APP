<template>
	<view>
		<view class="uni-margin-wrap">
			<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
				<swiper-item v-for="(item ,index) in imageList" :key="index">
					<view class="swiper-item">
						<image :src="item.content" mode=""></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				indicatorDots: true,
				autoplay: true,
				interval: 3000,
				duration: 500,
				imageList: [{
					content: 'https://img-cdn-qiniu.dcloud.net.cn/static/images/ad/uniapp-xiaomi.png'
				}, {
					content: 'https://img-cdn-qiniu.dcloud.net.cn/static/images/ad/uniapp-douyin.jpg'
				}, {
					content: 'https://img.php.cn/upload/article/000/000/020/5ceb57480713f714.jpg'
				}],
			}
		},
		methods: {
			changeAutoplay(e) {
				this.autoplay = !this.autoplay
			}
		}
	}
</script>

<style>
	.swiper {
		height: 400upx;
	}
	.swiper-item {
		display: block;
		height: 300upx;
		line-height: 300upx;
		text-align: center;
	}
	.swiper-item image{
			width: 100%;
			height: 600upx;
	}
	.swiper-list {
		margin-top: 40upx;
		margin-bottom: 0;
	}
	
	.uni-common-mt{
		margin-top:60upx;
		position:relative;
	}
	
	.info {
		position: absolute;
		right:20upx;
	}
</style>
