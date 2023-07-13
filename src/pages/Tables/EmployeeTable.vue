<template>
    <div class="table">
        <div>
            <h2>员工表格</h2>
        </div>
        <!--
        <div style="width: 50%">
            <h4>查找关键字</h4>
            <el-input placeholder="请输入关键字" prefix-icon="el-icon-search" v-model="keyword">
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
        </div>
        -->
        
        <div>
            <br>
            <span>排序</span>
            <br>
            <el-radio-group v-model="sortKey">
                <el-radio v-for="(sort, index) in sortKeys" :key="index" :label="sort.value">{{ sort.label }}</el-radio>
            </el-radio-group>
        </div>
        <br>
        <el-table :data="currentItemList" border style="width: 100%; height: auto;">
            <el-table-column prop="jobNumber" label="员工号" style="width: 16%; height: auto;">
                <template slot-scope="scope">
                    <p @click="pickEmployee(scope.row.uid)">{{ scope.row.jobNumber }}</p>
                </template>
            </el-table-column>
            <el-table-column prop="realName" label="姓名" style="width: 16%; height: auto;">
            </el-table-column>
            <el-table-column prop="department" label="部门" style="width: 16%; height: auto;">
            </el-table-column>
            <el-table-column prop="position" label="职能" style="width: 16%; height: auto;">
            </el-table-column>
            <el-table-column prop="email" label="邮箱" style="width: 16%; height: auto;">
            </el-table-column>
            <el-table-column label="操作" style="width:20%">
                <template slot-scope="scope">
                    <el-tooltip class="item" effect="light" content="查看员工" placement="bottom">
                        <el-button @click="pickEmployee(scope.row.uid)" icon="el-icon-search" size="small" type="primary"
                                   circle></el-button>
                    </el-tooltip>

                    <el-tooltip class="item" effect="light" content="删除员工" placement="bottom">
                        <el-button @click="deleteEmployee(scope.row.uid)" icon="el-icon-delete" size="small" type="danger"
                                   circle></el-button>
                    </el-tooltip>
                </template>
            </el-table-column>
        </el-table>
        <div class="block">
            <br>
            <el-pagination layout="prev, pager, next" background :current-page="page" :page-count="pageCount"
                           v-on:current-change="(curpage) => { handlePageChange(curpage) }">
            </el-pagination>
        </div>
    </div>
</template>

<script>
export default {
    name: 'EmployeeTable',
    props: ['page'],
    data() {
        return {
            keyword: '',
            sortKey: 'jobNumber',
            sortKeys: [
                {
                    value: 'jobNumber',
                    label: '员工号',
                },
                {
                    value: 'realName',
                    label: '用户名',
                },
                {
                    value: 'department',
                    label: '部门',
                },
                {
                    value: 'position',
                    label: '职位',
                },
                {
                    value: 'email',
                    label: '邮箱',
                },
            ],
            employeeData: []
        }
    },
    computed: {
        pageCount() {
            var count = Math.floor(this.employeeData.length / 10)
            if (this.employeeData.length % 10 !== 0) {
                count += 1
            }
            return count
        },
        currentItemList() {
            var end = this.page * 10
            var start = end - 10
            if (end > this.employeeData.length) {
                end = this.employeeData.length
            }
            console.log(start, end)
            return this.employeeData.slice(start, end)
        },
        show() {
            return sessionStorage.getItem('logType') === 'admin'
        }
    },
    methods: {
        pickEmployee(jobNumber) {
            if (sessionStorage.getItem('logType') === 'admin') {
                this.$router.push({
                    name: 'employeeDetailForAdmin',
                    query: {
                        employeeId: jobNumber
                    }
                })
            } else {
                this.$router.push({
                    name: 'itemOfEmployee',
                    query: {
                        employeeId: jobNumber,
                        page: 1
                    }
                })
            }
        },
        handlePageChange(curpage) {
            if (sessionStorage.getItem('logType') === 'admin') {
                this.$router.push({
                    name: 'employeeTable',
                    query: { page: curpage }
                })
            } else {
                this.$router.push({
                    name: 'employeeTableForManager',
                    query: { page: curpage }
                })
            }
        },
        deleteEmployee(id) {
            this.$confirm('此操作将永久删除该员工' + id + ', 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
                center: true
            }).then(() => {
                this.axios.delete('/api/account/operators/' + id).then(
                    (res) => {
                        if (res.status === 200) {
                            this.$message({
                                type: 'success',
                                message: '删除成功'
                            });
                            this.$router.push({
                                name: 'employeeTable',
                                query: { page: 1 }
                            })
                        }
                    },
                    (err) => {
                        if (err.status === 404) {
                            this.$message({
                                type: 'warning',
                                message: '不存在该用户'
                            });
                        }
                    }
                )
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });
        }
    },
    created() {
        if (sessionStorage.getItem('logType') === 'admin') {
            this.axios.get('/api/account/operators').then(
                (res) => {
                    console.log(res)
                    this.employeeData = res.data
                },
                (err) => {
                    console.log(err)
                }
            )
        }
        else {
            this.axios.get('/api/account/operators_department').then(
                (res) => {
                    console.log(res)
                    this.employeeData = res.data
                },
                (err) => {
                    console.log(err)
                }
            )
        }
    }
}
</script>

<style scoped>
.table {
    width: 94%;
    margin-top: 2%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    padding: 5%;
}
</style>