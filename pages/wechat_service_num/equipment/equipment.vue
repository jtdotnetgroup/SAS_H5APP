<template>
	<list-card></list-card>
</template>

<script>
	export default {
		name: 'equipment',
		data() {
			return {
			}
		},
		components: {
			listCard: () => import('./component/listCard.vue')
		}
	}
</script>

<style>
</style>
