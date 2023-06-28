<template>
    <div class="client">
        <h2>个人信息</h2>
        <table style="width:90%; text-align: center;" class="pure-table" rules=all>
            <tr>
                <th style="width: 20%;">用户名</th>
                <td style="width: 20%;">{{ userInfo.username }}</td>
                <th style="width: 20%;">真实姓名</th>
                <td style="width: 20%;">{{ userInfo.realName }}</td>
                <td rowspan=4><img style="width:100%;height: 100%;" src="../../assets/img/avater.png"></td>
            </tr>

            <tr>
                <th>创建时间</th>
                <td>{{ userInfo.date }}</td>
                <th>性别</th>
                <td>{{ userInfo.gender }}</td>
            </tr>

            <tr>
                <th>联系电话</th>
                <td>{{ userInfo.telephone }}</td>
                <th>电子邮箱</th>
                <td>{{ userInfo.e_mail }}</td>
            </tr>

            <tr>
                <th>公司</th>
                <td>{{ userInfo.company.name }}</td>
                <th>公司电话</th>
                <td>{{ userInfo.company.telephone }}</td>
            </tr>

            <tr>
                <th>公司传真</th>
                <td>{{ userInfo.company.fax }}</td>
                <th>公司地址</th>
                <td colspan=2>{{ userInfo.company.address }}</td>
            </tr>

            <tr>
                <th>公司邮编</th>
                <td>{{ userInfo.company.postcode }}</td>
                <th>公司网址</th>
                <td colspan=2>{{ userInfo.company.website }}</td>
            </tr>

            <tr>
                <th>公司邮箱</th>
                <td>{{ userInfo.company.e_mail }}</td>
                <th>公司手机</th>
                <td colspan=2>{{ userInfo.company.phone }}</td>
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

        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'ClientDetail',
    props: ['clientId'],
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
        editInfo() {
            this.$router.push({
                name: 'userInfoForm'
            })
        },
        changePassword() {
            this.$router.push({
                name: 'clientChangePassword'
            })
        },
        editAuthority() {
            this.$router.push({
                name: 'editClientAuthority',
                query: {
                    clientId: this.clientId,
                }
            })
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
    mounted() {
        this.$bus.$on('changePassword', () => {
            if (sessionStorage.getItem('logType') === 'client') {
                this.$router.push(
                    { name: 'clientDetail' }
                )
            }
        })
    },
    beforeDestroy() {
        this.$bus.$off('changePassword')
    }
}
</script>

<style scoped>
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