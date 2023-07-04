<template>
    <div class="table">
        <div>
            <h2>员工表格</h2>
        </div>
        <div style="width: 50%">
            <h4>查找关键字</h4>
            <el-input placeholder="请输入关键字" prefix-icon="el-icon-search" v-model="keyword">
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
        </div>
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
                    <p @click="pickEmployee(scope.row.jobNumber)">{{ scope.row.jobNumber }}</p>
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
                    <el-button @click="pickEmployee(scope.row.jobNumber)" icon="el-icon-search" size="small"
                               type="primary">查看员工
                    </el-button>
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
        }
    },
    created() {
        if (sessionStorage.getItem('logType') === 'admin') {
            console.log('admin')
        }
        else {
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