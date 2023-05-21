<template>
    <div style="width: 90%;" class="client">
        <h2>个人信息</h2>
        <table style="width:90%; text-align: center;" class="pure-table">
            <tr class="pure-table-odd">
                <th>用户名</th>
                <td>{{ userInfo.username }}</td>
                <th>真实姓名</th>
                <td>{{ userInfo.realName }}</td>
            </tr>

            <tr>
                <th>联系电话</th>
                <td>{{ userInfo.telephone }}</td>
                <th>电子邮箱</th>
                <td>{{ userInfo.e_mail }}</td>
            </tr>

            <tr class="pure-table-odd">
                <th>公司</th>
                <td>{{ userInfo.company }}</td>
                <th>公司地址</th>
                <td>{{ userInfo.address }}</td>
            </tr>
        </table>
        <br>
        <el-row>
            <el-button type="primary" @click="editInfo">
                修改信息
            </el-button>
            <el-button type="primary" @click="changePassword">
                修改密码
            </el-button>
        </el-row>

        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'ClientDetail',
    data() {
        return {
            userInfo: {
                username: '杰伦',
                realName: '周杰伦',
                e_mail: 'jielun@qq.com',
                telephone: '123456789',
                company: '杰威尔公司',
                address: '台湾省高雄市xx街道xx号',
            }
        }
    },
    methods: {
        editInfo() {
            this.$router.push({
                name: 'userInfoForm'
            })
        },
        changePassword() {
            this.$router.push({
                name:'clientChangePassword'
            })
        }
    }
}
</script>

<style scoped>
.pure-table {
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
    border-left: 1px solid #cbcbcb;
    border-width: 0 0 0 1px;
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

.pure-table-odd td {
    background-color: #f2f2f2;
}

.pure-table-odd th {
    background-color: #f2f2f2;
}

.client {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
</style>