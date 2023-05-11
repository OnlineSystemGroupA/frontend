<template>
    <div class="register">
        <el-form :label-position="labelPosition" ref="registerForm" label-width="80px" :model="userInfo" :rules="rules">
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
        <el-button type="primary" @click="onSubmit">注册</el-button>
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
            labelPosition: "top",
            userInfo: {
                email: '',
                username: '',
                password: '',
                checkPassword: ''
            },

            rules: {
                username: [
                    {validator: valiUsername, trigger: "blur"}
                ],
                email: [
                    {validator: valiEmail, trigger: "blur"}
                ],
                password: [
                    {validator: valiPassword, trigger: "blur"}
                ],
                checkPassword: [
                    {validator: valiCheckPassword, trigger: "blur"}
                ]
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
                } else {
                    alert("注册失败，请正确填写注册信息！")
                }
            })
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