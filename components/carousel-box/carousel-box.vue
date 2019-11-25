<template>
	<view>
		<uni-swiper-dot :imageList="imageList" :current="current" field="content" :mode="mode">
			<swiper class="swiper-box" @change="change"
			 :indicator-dots="true"
			 :autoplay="autoplay"
			  :interval="interval">
				<swiper-item v-for="(item ,index) in imageList" :key="index">
					<view class="swiper-item">
						<image :src="item.content" mode=""></image>
					</view>
				</swiper-item>
			</swiper>
		</uni-swiper-dot>
	</view>
</template>

<script>
	import uniSwiperDot from '@dcloudio/uni-ui/lib/uni-swiper-dot/uni-swiper-dot.vue'
	
	export default {
		components: {
			uniSwiperDot
		},
		data() {
			return {
				autoplay:true,
				imageList: [{
					content: 'https://img-cdn-qiniu.dcloud.net.cn/static/images/ad/uniapp-xiaomi.png'
				}, {
					content: 'https://img-cdn-qiniu.dcloud.net.cn/static/images/ad/uniapp-douyin.jpg'
				}, {
					content: 'https://img.php.cn/upload/article/000/000/020/5ceb57480713f714.jpg'
				}],
				current: 3,
				interval:4000,
				mode: 'default',
			}
		},
		onLoad() {

		},
		methods: {
			change(e) {
				this.current = e.detail.current;
			}
		}
	}
</script>

<style>
	.swiper{
		height: 600upx;
	}
	// swiper-item 里面的图片高度
	swiper-item image{
		width: 100%;
		height: 600upx;
	}
	.swiper-box {
		border-radius: 0rpx;
		padding: 0px;
	}
</style>
