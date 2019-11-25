<template>
	<view class="content">
		<nav-div>
			<uni-grid :column="4" :show-border="false" :square="false">
				<nav-icon text="客户管理" icon="icontongxunlu" color-style="#97f079"></nav-icon>
				<nav-icon text="工单管理" icon="icongongdan" color-style="#79ddee"></nav-icon>
				<nav-icon text="客户应收" icon="iconweibaogongdan" color-style="#d679ef"></nav-icon>
				<nav-icon text="故障代报" icon="iconrizhiyichang" color-style="#be78f2"></nav-icon>
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
