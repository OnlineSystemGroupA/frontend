<template>
    <div class="loginPage">
        <div class="box">
            <div class="left">
                <div class="img"><img src="../../assets/img/left.png" width=100% height=100%></div>
            </div>
            <div class="right">
                <router-view></router-view>
            </div>
        </div>
        <el-footer class="login-footer">
            <page-footer></page-footer>
        </el-footer>
    </div>
</template>

<script>
//import LoginHeader from '../../components/Headers/LoginHeader.vue';
import PageFooter from "@/components/Footers/PageFooter.vue";

export default {
    name: 'LoginPage',
    components: { PageFooter },
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

.loginPage {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-image: url(~@/assets/img/background.jpg);
    background-size: 100% 100%;
}

.box {
    display: flex;
    overflow: hidden;
    width: 850px;
    height: 100%;
    background-color: rgba(255, 255, 255, 60%);
    border-radius: 1.5rem;
    margin: 10% auto;
    box-shadow: 0 0 1rem 0.2rem rgb(0 0 0 / 10%);
}

.left {
    position: relative;
    width: 50%;
    height: 100%;
    background: rgba(2, 97, 239, 0.258);
}

.img {
    width: 80%;
    height: 80%;
    margin: auto;
    position: absolute;
    left: 10%;
    top: 10%;
}

.right {
    display: flex;
    width: 50%;
    flex-direction: column;
    align-items: center;
    background-color: rgba(255, 255, 255, 60%);
}

.login-footer {
    height: 25px !important;
    width: 100vw;
    background-color: rgba(2, 97, 239, 0.258);
    z-index: 10;
    box-shadow: 0 0 5px 0 #000000;
}
</style>