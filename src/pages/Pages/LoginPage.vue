<template>
	<div class="login">
		<div class="login">
			<LoginHeader></LoginHeader>
			<el-row>
				<el-button type="primary" @click="login">登录界面</el-button>
				<el-button type="primary" @click="register">注册界面</el-button>
			</el-row>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
import LoginHeader from '../../components/Headers/LoginHeader.vue';
export default {
	name: 'LoginPage',
	components: { LoginHeader },
	methods: {
		register() {
			this.$router.push({
				name: 'register',
			})
		},
		login() {
			this.$router.push({
				name: 'login',
			})
		}
	},
	mounted() {
		if (sessionStorage.getItem('logType')) {
			this.$router.push({
				name: sessionStorage.getItem('logType')
			})
		}
	}
}
</script>

<style scoped>
.login {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}
</style>