<template>
    <div class="userInfo">
        <el-form label-position="left" ref="loginForm" label-width="80px" :model="userInfo">
            <el-row :gutter="20">
                <el-col :span="12">
                    <el-form-item label="真实姓名" prop="realName">
                        <el-input v-model="userInfo.realName" placeholder="请输入真实姓名" clearable></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="电子邮箱" prop="email">
                        <el-input v-model="userInfo.email" placeholder="请输入电子邮箱" clearable=""></el-input>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row :gutter="20">
                <el-col :span="12">
                    <el-form-item label="联系电话" prop="phone">
                        <el-input v-model="userInfo.phone" placeholder="请输入联系电话" clearable=""></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="性别">
                        <el-radio-group v-model="userInfo.gender">
                            <el-radio label="男"></el-radio>
                            <el-radio label="女"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row :gutter="20">
                <el-col :span="12">
                    <el-form-item label="公司" prop="company">
                        <el-input v-model="userInfo.company" placeholder="请输入公司" clearable=""></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="公司电话" prop="companyTelephone">
                        <el-input v-model="userInfo.companyTelephone" placeholder="请输入公司电话"
                                  clearable=""></el-input>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row :gutter="20">
                <el-col :span="12">
                    <el-form-item label="公司传真" prop="companyFax">
                        <el-input v-model="userInfo.companyFax" placeholder="请输入公司传真" clearable=""></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="公司地址" prop="companyAddress">
                        <el-input v-model="userInfo.companyAddress" placeholder="请输入公司地址"
                                  clearable=""></el-input>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row :gutter="20">
                <el-col :span="12">
                    <el-form-item label="公司邮编" prop="companyPostcode">
                        <el-input v-model="userInfo.companyPostcode" placeholder="请输入公司邮编"
                                  clearable=""></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="公司网址" prop="companyWebsite">
                        <el-input v-model="userInfo.companyWebsite" placeholder="请输入公司网址"
                                  clearable=""></el-input>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row :gutter="20">
                <el-col :span="12">
                    <el-form-item label="公司邮箱" prop="companyEmail">
                        <el-input v-model="userInfo.companyEmail" placeholder="请输入公司邮箱"
                                  clearable=""></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="公司手机" prop="companyPhone">
                        <el-input v-model="userInfo.companyPhone" placeholder="请输入公司手机" clearable=""></el-input>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row class="button_row">
                <el-button type="primary" @click="submit">修改</el-button>
                <el-button @click="cancel">取消</el-button>
            </el-row>
        </el-form>
    </div>
</template>

<script>
export default {
    name: 'UserInfoForm',
    data() {
        return {
             userInfo: {
                username: '',
                realName: '',
                email: '',
                phone: '',
                createdDate: '',
                gender: '',
                company: '',
                companyAddress: '',
                companyTelephone: '',
                companyPostcode: '',
                companyEmail: '',
                companyFax: '',
                companyPhone: '',
                companyWebsite: '',
            },
        }
    },
    methods: {
        onEditDone() {
            this.$router.replace(
                { name: 'clientDetail' }
            )
        },

        submit() {
            console.log(this.userInfo)
            this.axios.post('/api/account/client_details', this.userInfo).then(this.handleResponse, this, this.handleError)
        },
        handleResponse(res) {
            if (res.status === 200) {
                if (res.data === 'email') {
                    this.$message.error('邮箱与他人重复')
                } else if (res.data === 'phone') {
                    this.$message.error('电话与他人重复')
                } else {
                    console.log('用户信息修改')
                    console.log(res.data)
                    this.$message.success('修改成功')
                    this.$emit('done')
                    this.$emit('change')
                }
            }
        },

        handleError(err) {
            if (err.status === 409) {
                this.$message.error('登录类型错误')
            } else if (err.status === 404) {
                this.$message.error('404 Not found!')
            }
        },
        cancel() {
            this.$message('取消修改')
            this.$emit('done')
        }
    },
    created() {
        this.axios.get('/api/account/client_details').then(
            (res) => {
                if (res.status === 200) {
                    console.log(res.data)
                    this.userInfo = res.data
                    var date = this.userInfo.createdDate.split('T')
                    this.userInfo.createdDate = date[0]
                }
            },
            (err) => {
                if (err.status === 409) {
                    this.$message.error('登录类型错误')
                }
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