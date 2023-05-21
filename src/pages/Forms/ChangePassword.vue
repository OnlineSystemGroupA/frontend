<template>
    <div class="password">
        <el-form :label-position="labelPosition" ref="loginForm" label-width="80px">
            <el-form-item label="原密码" prop="CurrentPassword">
                <el-input v-model="CurrentPassword" placeholder="请输入原密码" show-password></el-input>
            </el-form-item>
            <el-form-item label="新密码" prop="newPassword">
                <el-input v-model="newPassword" placeholder="请输入新密码" show-password></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="CurrentPassword">
                <el-input v-model="certainPassword" placeholder="请输入确认密码" show-password></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submit">修改</el-button>
                <el-button type="primary" @click="cancel">取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    name: 'ChangePassword',
    data() {
        return {
            currentPassword: '',
            newPassword: '',
            certainPassword: '',
        }
    },
    methods: {
        submit() {
            alert('修改成功')
            this.$router.replace({
                name: 'clientDetail'
            })
        },
        cancel() {
            alert('取消修改')
            this.$router.replace({
                name: 'clientDetail'
            })
        }
    }
}
</script>

<style scoped>
.password {
    width: 400px;
    align-items: center;
    border-radius: 30px;
    margin: 30px;
    padding: 50px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
</style>