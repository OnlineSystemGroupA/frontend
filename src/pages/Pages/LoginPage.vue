<template>
	<div class="login">
	
		<div class="box">
			<div class="left"><div class="img"><img src="../../assets/img/left.png" width=100% height=100%></div></div>
			<div class="right"><router-view></router-view></div>
		</div>
	</div>
</template>

<script>
//import LoginHeader from '../../components/Headers/LoginHeader.vue';
export default {
	name: 'LoginPage',
	//components: { LoginHeader },
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
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


.login {
	width: 100%;
	height: 720px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	/*background-image: url(../../assets/img/background.jpeg);
	background-size:cover ;*/
}

.box {
    display: flex;
    overflow: hidden;
    width: 60%;
    height: 100%;
    background-color: rgba(255,255,255,60%);
    border-radius: 1.5rem;
    margin: 10% auto;
    box-shadow: 0 0 1rem 0.2rem rgb(0 0 0 / 10%);
}

.box .left {
    position: relative;
    width: 50%;
    height: 100%;
    background-color:#3086d0
}

.img{
	width: 80%;
    height: 80%;
	margin: auto;
	position: absolute;
	left: 10%;top:10%;
}

.box .right {
    display: flex;
    width: 50%;
    flex-direction: column;
    align-items: center;
}
</style>