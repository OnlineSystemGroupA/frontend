<template>
    <div style="width: 90%;" class="employee">
        <h2>个人信息</h2>
        <table style="width:90%; text-align: center;" class="pure-table">
            <tr class="pure-table-odd">
                <th>员工号</th>
                <td>{{ userInfo.employeeId }}</td>
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
                <th>部门</th>
                <td>{{ userInfo.department }}</td>
                <th>职位</th>
                <td>{{ userInfo.position }}</td>
            </tr>
        </table>
        <br>
        <el-row>
            <el-button type="primary" @click="editInfo" v-if="show">
                修改信息
            </el-button>
            <el-button type="primary" @click="changePassword" v-if="!show">
                修改密码
            </el-button>
        </el-row>

        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'EmployeeDetail',
    props:['employeeId'],
    data() {
        return {
            userInfo: {
                employeeId: 'e001',
                realName: '绫波丽',
                e_mail: 'eva@163.com',
                telephone: '123456789',
                department: '测试部',
                position: '测试员',
            }
        }
    },
    methods: {
        changePassword() {
            this.$router.push({
                name:"employeeChangePassword"
            })
        }
    },
    computed:{
        show() {
            if (sessionStorage.getItem('logType') === 'employee') {
                return false
            }
            return true
        }
    },
    mounted() {
        this.$bus.$on('changePassword', () => {
            if (sessionStorage.getItem('logType') === 'employee') {
                this.$router.push(
                    { name: 'employeeDetail' }
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

.employee {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
</style>