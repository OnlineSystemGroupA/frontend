<template>
	<div class="app">
		<router-view></router-view>
	</div>
</template>

<script>

export default {
	name: "App",
	components: {
	},
};
</script>

<style scoped>
.app {
    --theme-color: #106EBE;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}

</style>
