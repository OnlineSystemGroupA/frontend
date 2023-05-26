<template>
    <div class="userInfo">
        <el-form :label-position="labelPosition" ref="loginForm" label-width="80px" :model="userInfo" :rules="rules">
            <el-form-item label="真实姓名" prop="realName">
                <el-input v-model="userInfo.realName" placeholder="请输入真实姓名" clearable></el-input>
            </el-form-item>
            <el-form-item label="电子邮件" prop="email">
                <el-input v-model="userInfo.email" placeholder="请输入电子邮箱" clearable=""></el-input>
            </el-form-item>
            <el-form-item label="联系电话" prop="telephone">
                <el-input v-model="userInfo.telephone" placeholder="请输入联系电话" clearable=""></el-input>
            </el-form-item>
            <el-form-item label="公司" prop="company">
                <el-input v-model="userInfo.company" placeholder="请输入公司" clearable=""></el-input>
            </el-form-item>
            <el-form-item label="公司地址" prop="address">
                <el-input v-model="userInfo.address" placeholder="请输入公司地址" clearable=""></el-input>
            </el-form-item>
            
            <el-form-item label="性别">
                <el-radio-group v-model="userInfo.gender">
                    <el-radio label = "男"></el-radio>
                    <el-radio label = "女"></el-radio>
                </el-radio-group>
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
    name: 'UserInfoForm',
    data() {
        return {
            userInfo: {
                username: '杰伦',
                realName: '周杰伦',
                email: 'jielun@qq.com',
                telephone: '123456789',
                company: '杰威尔公司',
                address: '台湾省高雄市xx街道xx号',
                gender:'男'
            }
        }
    },
    methods:{

        submit() {
            alert('修改成功')
            this.$router.replace({
                name:'clientDetail'
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
.userInfo {
    width: 40%;
    align-items: center;
    border-radius: 30px;
    margin: 30px;
    padding: 50px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
</style>