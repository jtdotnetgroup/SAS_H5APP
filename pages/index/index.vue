<template>
	<view class="content">
		<nav-div title="服务管理">
			<uni-grid :column="4" :show-border="false" :square="false">
				<nav-icon text="客户管理" icon="icontongxunlu" color-style="#97f079"></nav-icon>
				<nav-icon text="工单管理" icon="icongongdan" color-style="#79ddee"></nav-icon>
				<nav-icon text="客户应收" icon="iconweibaogongdan" color-style="#d679ef"></nav-icon>
				<nav-icon text="故障代报" icon="iconrizhiyichang" color-style="#be78f2"></nav-icon>
			</uni-grid>
		</nav-div>
		<nav-div title="日常管理">
			<uni-grid :column="4" :show-border="false" :square="false">
				<nav-icon text="新增签到" icon="iconqiandao" color-style="#9679f0"></nav-icon>
				<nav-icon text="工作汇报" icon="iconzhuanxierizhi" color-style="#f37ae5"></nav-icon>
				<nav-icon text="任务管理" icon="iconzhuzhuangtu" color-style="#7a9df2"></nav-icon>
				<nav-icon text="流程申报" icon="iconbiangeng" color-style="#7bf199"></nav-icon>
			</uni-grid>
		</nav-div>
		<nav-div title="辅助支持">
			<uni-grid :column="4" :show-border="false" :square="false">
				<nav-icon text="知识库" icon="iconzhishi" color-style="#a9ef7b"></nav-icon>
				<nav-icon text="知识检索" icon="iconrongyu" color-style="#74f1f1"></nav-icon>
				<nav-icon text="附近客户" icon="icondingwei" color-style="#f28f79"></nav-icon>
				<nav-icon text="操作规程" icon="iconhetongdingdan" color-style="#7ef079"></nav-icon>
			</uni-grid>
		</nav-div>
		<nav-div title="其他功能">
			<uni-grid :column="4" :show-border="false" :square="false">
				<nav-icon text="贡献榜" icon="iconkaoqintongji1" color-style="#f1bb7a"></nav-icon>
				<nav-icon text="库存查询" icon="iconfuwuqi" color-style="#7aeeef"></nav-icon>
				<nav-icon text="产品追溯" icon="iconbanben" color-style="#a9f07b"></nav-icon>
				<nav-icon text="消息管理" icon="iconxiaoxi" color-style="#7886f1"></nav-icon>
			</uni-grid>
		</nav-div>
	</view>
</template>

<script>
	import navDiv from '../../components/nav-div/nav-div.vue'
	import navIcon from '../../components/nav-icon/nav-icon.vue'
	import {uniGrid} from "@dcloudio/uni-ui"
	
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		components: {
			navDiv, uniGrid, navIcon
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style scoped>
	
</style>
