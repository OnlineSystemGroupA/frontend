<template>
    <div class="userInfo">
        <el-form label-position="left" ref="loginForm" label-width="80px" :model="employeeInfo" :rules="rules">
            <el-form-item label="员工号" prop="jobNumber">
                <el-input v-model="employeeInfo.jobNumber" placeholder="请输入员工号" clearable></el-input>
            </el-form-item>
            <el-form-item label="真实姓名" prop="realName">
                <el-input v-model="employeeInfo.realName" placeholder="请输入真实姓名" clearable></el-input>
            </el-form-item>
            <el-form-item label="电子邮件" prop="email">
                <el-input v-model="employeeInfo.email" placeholder="请输入电子邮箱" clearable=""></el-input>
            </el-form-item>
            <el-form-item label="联系电话" prop="phone">
                <el-input v-model="employeeInfo.phone" placeholder="请输入联系电话" clearable=""></el-input>
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
                <el-button @click="cancel">取消</el-button>
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
                phone: '123456789',
                department: '测试部',
                position: '测试员',
            },
            departments: [
                { label: '测试部', value: '测试部', },
                { label: '质量部', value: '质量部', },
                { label: '市场部', value: '市场部', }
            ],
            positions: [
                { label: '主管', value: '主管', },
                { label: '员工', value: '员工', },
            ]
        }
    },
    methods: {
        submit() {
            this.axios.post('api/account/operators/' + this.employeeId, this.employeeInfo).then(
                (res) => {
                    if (res.status === 200) {
                        this.$message.success('修改成功')
                        this.$emit('done')
                        this.$emit('change')
                    }
                },
                (err) => {
                    if (err.status === 409) {
                        this.$message.warning('信息冲突')
                    }
                    else if (err.status === 404) {
                        this.$message.warning('不存在该员工')
                    }
                }
            )

        },
        cancel() {
            this.$message('取消操作')
            this.$emit('done')
        }
    },
    created() {
        this.axios.get('/api/account/operators/' + this.employeeId).then(
            (res) => {
                if (res.status === 200) {
                    this.employeeInfo = res.data
                }
            },
            (err) => {
                this.$message.error(err.data)
            }
        )
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