<template>
	<view class="content">
		<view v-for="(ditem,index) in dataList" :key="index">
			<nav-div :title="ditem.title">
				<view v-for="(titem,index) in ditem.textList" :key="index">
					<nav-icon :text="titem.text" :icon="titem.icon" :color-style="titem.color" @click="clickItem"></nav-icon>
				</view>
			</nav-div>
		</view>
	</view>
</template>

<script>
	import navDiv from '../../components/nav-div/nav-div.vue'
	import navIcon from '../../components/nav-icon/nav-icon.vue'
	import {uniGrid} from "@dcloudio/uni-ui"
	
	export default {
		data() {
			return {
				title: 'Hello',
				dataList: [
					{
						title: "服务管理", 
						textList: [
							{text: "客户管理", icon: "icontongxunlu", color: "#97f079"},
							{text: "工单管理", icon: "icongongdan", color: "#79ddee"},
							{text: "客户应收", icon: "iconweibaogongdan", color: "#d679ef"},
							{text: "故障代报", icon: "iconrizhiyichang", color: "#be78f2"},
						]
					},
					{
						title: "日常管理", 
						textList: [
							{text: "新增签到", icon: "iconqiandao", color: "#9679f0"},
							{text: "工作汇报", icon: "iconzhuanxierizhi", color: "#f37ae5"},
							{text: "任务管理", icon: "iconzhuzhuangtu", color: "#7a9df2"},
							{text: "流程申报", icon: "iconbiangeng", color: "#7bf199"},
						]
					},
					{
						title: "辅助支持", 
						textList: [
							{text: "知识库", icon: "iconzhishi", color: "#a9ef7b"},
							{text: "知识检索", icon: "iconrongyu", color: "#74f1f1"},
							{text: "附近客户", icon: "icondingwei", color: "#f28f79"},
							{text: "操作规程", icon: "iconhetongdingdan", color: "#7ef079"},
						]
					},
					{
						title: "其他功能", 
						textList: [
							{text: "贡献榜", icon: "iconkaoqintongji1", color: "#f1bb7a"},
							{text: "库存查询", icon: "iconfuwuqi", color: "#7aeeef"},
							{text: "产品追溯", icon: "iconbanben", color: "#a9f07b"},
							{text: "消息管理", icon: "iconxiaoxi", color: "#7886f1"},
						]
					},
				]
			}
		},
		components: {
			navDiv, uniGrid, navIcon
		},
		onLoad() {

		},
		methods: {
			clickItem() {
				
			}
		}
	}
</script>

<style scoped>
</style>
