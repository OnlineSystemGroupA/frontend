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
    --theme-color: #3086D0;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}

</style>
