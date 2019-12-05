<template>
	<view class="content">
		<car-box></car-box>
		<sub-section></sub-section>
	</view>
</template>

<script>

	import carBox from '@/components/carousel-box/carousel-box.vue'
	import subSection from '@/components/subsection/subsection.vue'
	
	export default{
		name:"mytask",
		data() {
			return {
				
			}
		},

		components: {
			carBox, subSection
		}
	}
</script>

<style scoped>
</style>