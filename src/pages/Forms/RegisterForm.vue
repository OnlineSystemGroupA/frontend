<template>
    <div class="register">
        <el-form :label-position="labelPosition" label-width="80px" :model="userInfo">
            <el-form-item label="用户名">
                <el-input v-model="userInfo.username" placeholder="用户名" clearable></el-input>
            </el-form-item>
            <el-form-item label="邮箱">
                <el-input v-model="userInfo.mail" placeholder="邮箱" clearable></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="userInfo.password" placeholder="请输入密码" show-password></el-input>
            </el-form-item>
            <el-form-item label="确认密码">
                <el-input v-model="userInfo.certainPassword" placeholder="请再次输入密码" show-password></el-input>
            </el-form-item>
        </el-form>
        <el-button type="primary" @click="onSubmit">注册</el-button>
    </div>
</template>

<script>
export default {
    name: "RegisterForm",
    data() {
        return {
            labelPosition: "top",
            userInfo: {
                mail: '',
                username: '',
                password: '',
                certainPassword: ''
            }
        };
    },
    methods: {
        onSubmit() {
            if (this.userInfo.username === '') {
                alert('请输入用户名')
            } else if (this.userInfo.mail === '') {
                alert('请输入邮箱')
            } else if (this.userInfo.password === '') {
                alert('请输入密码')
            } else if (this.userInfo.certainPassword !== this.userInfo.password) {
                alert('两遍密码不一致')
            } else {
                let registerData = {
                    "username": this.userInfo.username,
                    "email": this.userInfo.mail,
                    "password": this.userInfo.password
                }
                this.axios.post('/api/register', registerData).then(res => {
                    if (res.data.code === 600) {
                        alert('注册成功')
                        this.$router.push({
                            name: "login"
                        })
                    } else if (res.data.code === 601) {
                        alert('用户名已存在')
                    }
                })
            }
        }
    },
};
</script>

<style scoped>
.register {
    width: 400px;
    border-radius: 30px;
    margin: 30px;
    padding: 50px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
</style>