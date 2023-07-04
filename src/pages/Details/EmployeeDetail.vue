<template>
    <div class="employee">
        <h2>个人信息</h2>
        <table style="width:90%; text-align: center;" class="pure-table" rules=all>
            <tr>
                <th>员工号</th>
                <td>{{ userInfo.jobNumber }}</td>
                <th>真实姓名</th>
                <td>{{ userInfo.realName }}</td>
            </tr>

            <tr>
                <th>联系电话</th>
                <td>{{ userInfo.phone }}</td>
                <th>电子邮箱</th>
                <td>{{ userInfo.email }}</td>
            </tr>

            <tr>
                <th>部门</th>
                <td>{{ userInfo.department }}</td>
                <th>职位</th>
                <td>{{ userInfo.position }}</td>
            </tr>
        </table>
        <br>
        <el-row>
            <el-button type="primary" @click="editInfo" v-if="editShow">
                修改信息
            </el-button>
            <el-button type="danger" @click="deleteEmployee" v-if="editShow">
                删除员工
            </el-button>
            <el-button type="primary" @click="changePassword" v-if="show">
                修改密码
            </el-button>
        </el-row>

        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'EmployeeDetail',
    props: ['employeeId'],
    data() {
        return {
            userInfo:'' ,
        }
    },
    methods: {
        changePassword() {
            this.$router.push({
                name: "employeeChangePassword"
            })
        },
        editInfo() {
            this.$router.push({
                name: "editEmployeeInfo",
                query: {
                    employeeId: this.employeeId
                }
            })
        },
        deleteEmployee() {
            this.$confirm('确认是否删除员工' + this.userInfo.employeeId + '?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$message({
                    type: 'success',
                    message: '删除成功!'
                });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });
        }
    },
    computed: {
        show() {
            if (sessionStorage.getItem('logType') === 'employee') {
                return true
            }
            return false
        },
        editShow() {
            if (sessionStorage.getItem('logType') === 'admin') {
                return true
            }
            return false
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
    },
    created() {
        this.axios.get('/api/account/operator_details').then(
            (res) => {
                if (res.status === 200) {
                    this.userInfo = res.data
                }
            },
            (err)=>{
                alert(err.data)
            }
        )
    }
}
</script>

<style scoped>
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

.employee {
    width: 94%;
    margin-top: 2%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    padding: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
</style>