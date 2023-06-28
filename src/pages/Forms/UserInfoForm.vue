<template>
    <div class="userInfo">
        <el-form :label-position="labelPosition" ref="loginForm" label-width="80px" :model="userInfo" :rules="rules">
            <el-row>
                <el-col style="width:50%">
                    <el-form-item label="真实姓名" prop="realName">
                        <el-input v-model="userInfo.realName" placeholder="请输入真实姓名" clearable></el-input>
                    </el-form-item>
                </el-col>
                <el-col style="width:50%">
                    <el-form-item label="电子邮箱" prop="e_mail">
                        <el-input v-model="userInfo.e_mail" placeholder="请输入电子邮箱" clearable=""></el-input>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row>
                <el-col style="width:50%">
                    <el-form-item label="联系电话" prop="telephone">
                        <el-input v-model="userInfo.telephone" placeholder="请输入联系电话" clearable=""></el-input>
                    </el-form-item>
                </el-col>
                <el-col style="width:50%">
                    <el-form-item label="性别">
                        <el-radio-group v-model="userInfo.gender">
                            <el-radio label="男"></el-radio>
                            <el-radio label="女"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row>
                <el-col style="width:50%">
                    <el-form-item label="公司" prop="company.name">
                        <el-input v-model="userInfo.company.name" placeholder="请输入公司" clearable=""></el-input>
                    </el-form-item>
                </el-col>
                <el-col style="width:50%">
                    <el-form-item label="公司电话" prop="company.telephone">
                        <el-input v-model="userInfo.company.telephone" placeholder="请输入公司电话"
                                  clearable=""></el-input>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row>
                <el-col style="width:50%">
                    <el-form-item label="公司传真" prop="company.fax">
                        <el-input v-model="userInfo.company.fax" placeholder="请输入公司传真" clearable=""></el-input>
                    </el-form-item>
                </el-col>
                <el-col style="width:50%">
                    <el-form-item label="公司地址" prop="company.address">
                        <el-input v-model="userInfo.company.address" placeholder="请输入公司地址"
                                  clearable=""></el-input>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row>
                <el-col style="width:50%">
                    <el-form-item label="公司邮编" prop="company.postcode">
                        <el-input v-model="userInfo.company.postcode" placeholder="请输入公司邮编"
                                  clearable=""></el-input>
                    </el-form-item>
                </el-col>
                <el-col style="width:50%">
                    <el-form-item label="公司网址" prop="company.website">
                        <el-input v-model="userInfo.company.website" placeholder="请输入公司网址"
                                  clearable=""></el-input>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row>
                <el-col style="width:50%">
                    <el-form-item label="公司邮箱" prop="company.e_mail">
                        <el-input v-model="userInfo.company.e_mail" placeholder="请输入公司邮箱"
                                  clearable=""></el-input>
                    </el-form-item>
                </el-col>
                <el-col style="width:50%">
                    <el-form-item label="公司手机" prop="company.phone">
                        <el-input v-model="userInfo.company.phone" placeholder="请输入公司手机" clearable=""></el-input>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row class="button_row">
                <el-button type="primary" @click="submit">修改</el-button>
                <el-button type="primary" @click="cancel">取消</el-button>
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
                username: '杰伦',
                realName: '周杰伦',
                e_mail: 'jielun@qq.com',
                telephone: '123456789',
                address: '台北xx街道xx号',
                date: '2023-06-12',
                gender: '男',
                company: {
                    name: '杰威尔公司',
                    telephone: '1000000',
                    fax: '1000000',
                    contact: '方文山',
                    postcode: '324330',
                    phone: '100002',
                    e_mail: '103948932@11.com',
                    website: 'www.jieweier.com',
                    address: '台湾省高雄市xx街道xx号',
                },
            }
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
.userInfo {
    align-items: center;
    width: 90%;
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