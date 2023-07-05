<template>
    <div class="userInfo">
        <el-form label-position="left" ref="loginForm" label-width="80px" :model="employeeInfo"
                 :rules="rules">
            <el-form-item label="真实姓名" prop="realName">
                <el-input v-model="employeeInfo.realName" placeholder="请输入真实姓名" clearable></el-input>
            </el-form-item>
            <el-form-item label="电子邮件" prop="email">
                <el-input v-model="employeeInfo.email" placeholder="请输入电子邮箱" clearable=""></el-input>
            </el-form-item>
            <el-form-item label="联系电话" prop="telephone">
                <el-input v-model="employeeInfo.telephone" placeholder="请输入联系电话" clearable=""></el-input>
            </el-form-item>
            <el-form-item label="部门" prop="department">
                <el-select placeholder="部门" v-model="employeeInfo.department">
                    <el-option v-for="department in departments" :key="department.value" :label="department.label"
                               :value="department.value"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="职位" prop="postion">
                <el-select placeholder="职能" v-model="employeeInfo.position">
                    <el-option v-for="position in positions" :key="position.value" :label="position.label"
                               :value="position.value"></el-option>
                </el-select>
            </el-form-item>

            <el-row class="button_row">
                <el-button type="primary" @click="submit">修改</el-button>
                <el-button type="primary" @click="cancel">取消</el-button>
            </el-row>
        </el-form>
    </div>
</template>

<script>
export default {
    name: "EditEmployeeInfoForm",
    props: ['employeeId'],
    data() {
        return {
            employeeInfo: {
                realName: '绫波丽',
                email: 'eva@163.com',
                telephone: '123456789',
                department: '测试部',
                position: '测试员',
            },
            departments: [
                { label: '测试部', value: '测试部', },
                { label: '审核部', value: '审核部', },
                { label: '市场部', value: '市场部', }
            ],
            positions: [
                { label: '部长', value: '部长', },
                { label: '审核员', value: '审核员', },
                { label: '测试员', value: '测试员', },
                { label: '调查员', value: '调查员', }
            ]
        }
    },
    methods: {
        submit() {
            alert('修改成功')
            this.$emit('done')
            this.$emit('change')
        },
        cancel() {
            alert('取消操作')
            this.$emit('done')
        }
    }
}
</script>

<style scoped>
.userInfo {
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