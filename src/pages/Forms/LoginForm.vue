<template>
    <div class="login">
        <h4>登录</h4>
        <el-form label-position="left" ref="loginForm" label-width="80px" :model="userInfo" :rules="rules">
            <el-form-item label="账号/邮箱" prop="username">
                <el-input v-model="userInfo.username" placeholder="请输入账号" @keyup.enter.native="onSubmit"
                          clearable class="acc"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="userInfo.password" placeholder="请输入密码" @keyup.enter.native="onSubmit"
                          show-password class="acc"></el-input>
            </el-form-item>
            <el-form-item label-width="0" style="margin: 0 auto 20px auto">
                <el-radio-group v-model="logType" @change="onChangeLoginTye" style="width: 100%">
                    <el-row>
                        <el-col :span="8">
                            <el-radio label="client">客户</el-radio>
                        </el-col>
                        <el-col :span="8">
                            <el-radio label="employee">员工</el-radio>
                        </el-col>
                        <el-col :span="8">
                            <el-radio label="admin">管理员</el-radio>
                        </el-col>
                    </el-row>
                </el-radio-group>
            </el-form-item>
            <div class="buttons">
                <el-button type="primary" @click="onSubmit">登录</el-button>
                <el-button @click="userRegister">注册</el-button>
            </div>
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
            logType: "client",
            userInfo: {
                username: "",
                password: "",
            },
            rules: {
                username: { validator: valiUsername, trigger: "blur" },
                password: { validator: valiPassword, trigger: "blur" },
            }
        };
    },
    methods: {
        onChangeLoginTye() {
            this.$nextTick(this.$refs.loginForm.clearValidate)
        },
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
            } else if (err.response.status === 403) {
                alert('账号封禁中')
            } else if (err.response.status === 404) {
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
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
}

.login h4 {
    color: #3086d0;
    font-size: 2rem;
    margin-top: 1rem;
}

.el-form-item {
    margin-bottom: 40px;
}

.buttons {
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>