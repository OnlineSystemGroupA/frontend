<template>
    <div class="login">
        <el-form :label-position="labelPosition" ref="loginForm" label-width="80px" :model="userInfo" :rules="rules">
            <el-form-item label="账号或者邮箱" prop="username">
                <el-input v-model="userInfo.username" placeholder="请输入账号" clearable></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="userInfo.password" placeholder="请输入密码" show-password></el-input>
            </el-form-item>
            <el-form-item>
                <el-radio-group v-model="logType">
                    <el-radio label="client">客户</el-radio>
                    <el-radio label="employee">员工</el-radio>
                    <el-radio label="admin">管理员</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">登录</el-button>
                <el-button @click="userRegister">注册</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    name: "LoginForm",
    data() {
        // validators
        const valiUsername = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("请输入用户名"))
            }
            callback()
        }
        const valiPassword = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("请输入密码"))
            }
            callback()
        }

        return {
            labelPosition: "top",
            logType: "client",
            userInfo: {
                username: "",
                password: "",
            },
            rules: {
                username: [
                    {validator: valiUsername, trigger: "blur"}
                ],
                password: [
                    {validator: valiPassword, trigger: "blur"}
                ],
            }
        };
    },
    methods: {
        onSubmit() {
            this.$refs.loginForm.validate((valid) => {
                if (valid) {
                    if (this.logType === "client") {
                        this.axios.post('/api/auth/login?user-type=client', this.userInfo).then(this.handleLoginResult, this.handleLoginError)
                    } else if (this.logType === "admin") {
                        this.axios.post('/api/auth/login?user-type=admin', this.userInfo).then(this.handleLoginResult, this.handleLoginError)
                    } else if (this.logType === "employee") {
                        this.axios.post('/api/auth/login?user-type=operator', this.userInfo).then(this.handleLoginResult, this.handleLoginError)
                    }
                } else {
                    alert("登录失败，请正确填写登录信息！")
                }
            })

        },
        handleLoginResult(res) {
            console.log(res)
            if (res.status === 200) {
                sessionStorage.setItem('tokenHead', res.data.tokenHead)
                sessionStorage.setItem('tokenStr', res.data.tokenStr)
                sessionStorage.setItem('logType', this.logType)
                this.$router.replace({
                    name: this.logType
                })
            }
        },
        handleLoginError(err) {
            //console.log(err)
            //console.log(err.response.status)
            if (err.response.status === 401) {
                alert('账号或者密码错误')
            }
            else if (err.response.status === 403) {
                alert('账号封禁中')
            }
            else if (err.response.status === 404) {
                alert('不存在该用户')
            }
            //alert(err.response.data)
        },
        userRegister() {
            this.$router.replace({
                name: "register",
            });
        },
    },
};
</script>

<style scoped>
.login {
    width: 400px;
    align-items: center;
    border-radius: 30px;
    margin: 30px;
    padding: 50px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
</style>