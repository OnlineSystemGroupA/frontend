<template>
    <div class="table">
        <el-row>
            <el-col style="width:50%">
                <el-form label-position="left" label-width="80px">
                    <el-form-item label="员工号">
                        <el-input placeholder="员工号" v-model="workInfo.jobNumber"></el-input>
                    </el-form-item>
                </el-form>
            </el-col>
            <el-col style="width:50%;padding-left: 10%;">
                <el-button type="primary" @click="arrangeWork">安排</el-button>
            </el-col>

        </el-row>

        <div style="width: 30%">
            <el-input placeholder="请输入关键字" prefix-icon="el-icon-search" v-model="keyword">
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
        </div>
        <br>
        <el-table :data="currentItemList" border style="width: 100%; height: auto;">
            <el-table-column prop="jobNumber" label="员工号" style="width: 20%">
                <template slot-scope="scope">
                    <p @click="pickEmployee(scope.row.jobNumber)">{{ scope.row.jobNumber }}</p>
                </template>
            </el-table-column>
            <el-table-column prop="realName" label="姓名" style="width: 20%">
            </el-table-column>
            <el-table-column prop="department" label="部门" style="width: 20%">
            </el-table-column>
            <el-table-column prop="position" label="职能" style="width: 20%">
            </el-table-column>
            <el-table-column prop="email" label="邮箱" style="width: 20%">
            </el-table-column>
        </el-table>
        <div class="block">
            <br>
            <el-pagination layout="prev, pager, next" background :current-page="currentPage" :page-count="pageCount"
                           v-on:current-change="(curpage) => { handlePageChange(curpage) }">
            </el-pagination>
        </div>
    </div>
</template>

<script>
//import EmployeeTable from './EmployeeTable.vue'
export default {
    name: 'WorkArrangeTable',
    //components: {EmployeeTable},
    props: ['processId', 'page'],
    data() {
        return {
            keyword: '',
            employeeData: [],
            workInfo: {
                jobNumber: '',
                uid: '',
            }
        }
    },
    /*mounted() {
        this.$bus.$on('pickEmployee', (employeeId) => {
            this.employeeId = employeeId
        })
    },*/
    computed: {
        /*workType() {
            if (this.work === 'verification') {
                return '审核工作'
            } else {
                return '测试工作'
            }
        },*/
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
        currentPage() {
            var p = parseInt(this.page);
            return p
        }
    },
    methods: {
        pickEmployee(jobNumber) {
            this.workInfo.jobNumber = jobNumber
        },
        handlePageChange(curpage) {
            this.$router.push({
                name: 'workArrangeTable',
                query: {
                    work: this.work,
                    page: curpage,
                    processId: this.processId
                }
            })
        },
        arrangeWork() {
            this.employeeData.forEach(element => {
                if (element.jobNumber === this.workInfo.jobNumber) {
                    this.workInfo.uid = element.uid
                }
            });
            console.log(this.workInfo.uid)
            this.axios.post('/api/workflow/processes/' + this.processId + '/participants', { "userId": this.workInfo.uid }).then(
                (res) => {
                    if (res.status === 200) {

                        this.axios.post('/api/workflow/processes/' + this.processId + '/complete_task').then(this.handleRes, this.handleErr)
                    }
                },
                (err) => {
                    if (err.status === 403) {
                        this.$message.error('指定流程对当前登录用户不可见')
                    }
                    else if (err.status === 404) {
                        this.$message.error('指定流程或用户不存在')
                    }
                    else {
                        this.$message.error('指定用户所在部门不符合要求')
                    }
                }
            )
        },
        handleRes(res) {
            if (res.status === 200) {
                this.$alert('任务分配成功', '任务分配', {
                    confirmButtonText: '确定',
                    callback: () => {
                        this.$message({
                            type: 'info',
                            message: "确定分配"
                        });
                    }
                });
            }
        },
        handleErr(err) {
            if (err.status === 403) {
                this.$message.error('指定流程对该用户不可见或当前用户无完成任务权限')
            }
            else if (err.status === 404) {
                this.$message.error('指定流程不存在')
            }
            else if (err.status === 460) {
                this.$message.error('未满足完成条件')
            }
        }
    },
    created() {
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
</script>

<style scoped>
.table {
    width: 800px;
    align-items: center;
    border-radius: 30px;
    margin: 30px;
    padding: 50px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
</style>