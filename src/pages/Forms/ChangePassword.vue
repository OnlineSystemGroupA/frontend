<template>
    <div class="password">
        <el-form :label-position="'left'" label-width="80px">
            <el-form-item label="原密码" prop="currentPassword">
                <el-input v-model="currentPassword" placeholder="请输入原密码" show-password></el-input>
            </el-form-item>
            <el-form-item label="新密码" prop="newPassword">
                <el-input v-model="newPassword" placeholder="请输入新密码" show-password></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="CurrentPassword">
                <el-input v-model="certainPassword" placeholder="请输入确认密码" show-password></el-input>
            </el-form-item>
            <el-row class="button_row">
                <el-button type="primary" @click="submit">修改</el-button>
                <el-button @click="cancel">取消</el-button>
            </el-row>
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
            this.$message.success('修改成功')
            this.$emit('done')
        },
        cancel() {
            this.$message('取消修改')
            this.$emit('done')
        }
    }
}
</script>

<style scoped>
.password {
    align-items: center;
    border-radius: 30px;
    margin: 30px;
    padding: 50px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}

.button_row {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>