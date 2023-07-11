<template>
    <div class="login">
        <el-row style="width: 100%">
            <el-col :span="4" class="top-col">
                <el-button @click="goBack" icon="el-icon-arrow-left" type="text" circle class="return-button"></el-button>
            </el-col>
            <el-col :span="16" class="top-col">
                <div><h4>用户注册</h4></div>
            </el-col>
            <el-col :span="4"></el-col>
        </el-row>
        <el-form label-position="left" ref="registerForm" label-width="80px" :model="userInfo" :rules="rules">
            <el-form-item label="用户名" prop="username">
                <el-input v-model="userInfo.username" placeholder="用户名" clearable></el-input>
            </el-form-item>

            <el-form-item label="邮箱" prop="email">
                <el-input v-model="userInfo.email" placeholder="邮箱" clearable></el-input>
            </el-form-item>

            <el-form-item label="密码" prop="password">
                <el-input v-model="userInfo.password" placeholder="请输入密码" show-password></el-input>
            </el-form-item>

            <el-form-item label="确认密码" prop="checkPassword">
                <el-input v-model="userInfo.checkPassword" placeholder="请再次输入密码" show-password></el-input>
            </el-form-item>
        </el-form>

        <el-row>
            <el-button type="primary" @click="onSubmit">注册</el-button>
        </el-row>

    </div>
</template>

<script>
export default {
    name: "RegisterForm",
    data() {
        // validators
        const valiUsername = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("请输入用户名"))
            }
            callback()
        }
        const valiEmail = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("请输入邮箱"))
            }
            callback()
        }
        const valiPassword = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("请输入密码"))
            }
            callback()
        }
        const valiCheckPassword = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("请重新输入密码"))
            } else if (value !== this.userInfo.password) {
                callback(new Error("重新输入的密码不一致"))
            }
            callback()
        }

        return {
            userInfo: {
                email: '',
                username: '',
                password: '',
                checkPassword: ''
            },

            rules: {
                username: { validator: valiUsername, trigger: "blur" },
                email: { validator: valiEmail, trigger: "blur" },
                password: { validator: valiPassword, trigger: "blur" },
                checkPassword: { validator: valiCheckPassword, trigger: "blur" }
            }
        }
    },
    methods: {
        onSubmit() {
            this.$refs.registerForm.validate((valid) => {
                if (valid) {
                    let registerData = {
                        "username": this.userInfo.username,
                        "email": this.userInfo.email,
                        "password": this.userInfo.password
                    }
                    this.axios.post('/api/auth/register', registerData).then(res => {
                        //console.log(res)
                        //console.log(res.status)
                        if (res.status === 200) {
                            this.$message.success("注册成功")
                        }
                        if (res.status === 409) {
                            this.$message.error("用户名重复")
                        }

                    }).catch(err => {
                        //console.log(err)
                        //console.log(err.response.status)
                        if (err.response.status === 409) {
                            this.$message.error("用户名重复")
                        }
                    })
                } else {
                    this.$message.error("注册失败，请正确填写注册信息！")
                }
            })
        },
        goBack() {
            this.$router.push({
                name: 'login'
            })
        }
    },
};
</script>

<style scoped>
.top-col {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.return-button{
    margin-top: 5px;
}

.login {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
}

h4 {
    color: #3086d0;
    font-size: 2rem;
    margin-top: 5px;
}

a {
    font-size: 16px;
    color: #666;
}

a:hover {
    color: rgb(63, 39, 224);
}
</style>