<template>
    <div class="client">
        <h2>个人信息</h2>
        <table class="pure-table" rules=all>
            <tr>
                <th style="width: 25%;">用户名</th>
                <td style="width: 25%;">{{ userInfo.username }}</td>
                <th style="width: 25%;">真实姓名</th>
                <td style="width: 25%;">{{ userInfo.realName }}</td>
            </tr>

            <tr>
                <th>创建时间</th>
                <td>{{ userInfo.createdDate }}</td>
                <th>性别</th>
                <td>{{ userInfo.gender }}</td>
            </tr>

            <tr>
                <th>联系电话</th>
                <td>{{ userInfo.phone }}</td>
                <th>电子邮箱</th>
                <td>{{ userInfo.email }}</td>
            </tr>

            <tr>
                <th>公司</th>
                <td>{{ userInfo.company }}</td>
                <th>公司电话</th>
                <td>{{ userInfo.companyTelephone }}</td>
            </tr>

            <tr>
                <th>公司传真</th>
                <td>{{ userInfo.companyFax }}</td>
                <th>公司地址</th>
                <td>{{ userInfo.companyAddress }}</td>
            </tr>

            <tr>
                <th>公司邮编</th>
                <td>{{ userInfo.companyPostcode }}</td>
                <th>公司网址</th>
                <td>{{ userInfo.companyWebsite }}</td>
            </tr>

            <tr>
                <th>公司邮箱</th>
                <td>{{ userInfo.companyEmail }}</td>
                <th>公司手机</th>
                <td>{{ userInfo.companyPhone }}</td>
            </tr>
        </table>
        <br>
        <el-row>
            <el-button type="primary" @click="editInfo" v-if="show">
                修改信息
            </el-button>
            <el-button type="primary" @click="changePassword" v-if="show">
                修改密码
            </el-button>
            <el-button type="primary" @click="editAuthority" v-if="authorityShow">
                修改权限
            </el-button>
        </el-row>

        <el-dialog :visible.sync="editDialogVisible" center @closed="onEditDone" class="edit-dialog">
            <router-view @done="editDialogVisible=false" @change="update"></router-view>
        </el-dialog>
    </div>
</template>

<script>

export default {
    name: 'ClientDetail',
    props: ['clientId'],
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
            editDialogVisible: false
        }
    },
    methods: {
        onEditDone() {
            // dialog 关闭动画后回调
            if (sessionStorage.getItem('logType') === 'client') {
                this.$router.replace(
                    { name: 'clientDetail' }
                )
            }
            else if (sessionStorage.getItem('logType') === 'admin') {
                this.$router.replace(
                    {
                        name: 'clientDetailForAdmin',
                        query: {
                            clientId: this.clientId
                        }
                    }
                )
            }
        },
        editInfo() {
            this.editDialogVisible = true
            this.$router.push({
                name: 'userInfoForm'
            })
        },
        changePassword() {
            this.editDialogVisible = true
            this.$router.push({
                name: 'clientChangePassword'
            })
        },
        editAuthority() {
            this.editDialogVisible = true
            this.$router.push({
                name: 'editClientAuthority',
                query: {
                    clientId: this.clientId,
                }
            })
        },
        update() {
            if (sessionStorage.getItem('logType') === 'client') {
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
            else if (sessionStorage.getItem('logType') === 'admin') {
                this.axios.get('/api/account/clients/' + this.clientId).then(
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
                            alert('登录类型错误')
                        }
                    }
                )
            }
        }
    },
    computed: {
        show() {
            if (sessionStorage.getItem('logType') === 'client') {
                return true
            }
            return false
        },
        authorityShow() {
            if (sessionStorage.getItem('logType') === 'admin') {
                return true
            }
            return false
        }
    },
    created() {
        this.update()
    },
    beforeDestroy() {
        this.$bus.$off('changePassword')
        this.$bus.$off('editInfo')
    }
}
</script>

<style scoped lang="less">
.client {
    width: 94%;
    margin-top: 2%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    padding: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.pure-table {
    width: 100%;
    text-align: center;
    border-collapse: collapse;
    border-spacing: 0;
    empty-cells: show;
    border: 1px solid #cbcbcb;
}

.pure-table caption {
    color: #000;
    font: italic 85%/1 arial, sans-serif;
    padding: 1em 0;
    text-align: center;
}

.pure-table td,
.pure-table th {
    font-size: inherit;
    margin: 0;
    overflow: visible;
    padding: .5em 1em;
}

.pure-table thead {
    background-color: #e0e0e0;
    color: #000;
    text-align: left;
    vertical-align: bottom;
}

.pure-table td {
    background-color: transparent;
}
</style>