<template>
    <div style="width:94%;">
        <h2>审核测试报告</h2>
        <h3>项目号:{{ projectId }}</h3>
        <h3>项目名:{{ softwareName }}</h3>
        <el-button type="primary" @click="checkItemDetail(processId)">查看项目详情</el-button>
        <el-button @click="checkTestReport" type="primary">查看测试报告</el-button>
        <el-button @click="writeReportVerification" type="primary">填写审核表格</el-button>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
export default {
    name: 'EmployeeVerifyTestReport',
    props: ['processId'],
    data() {
        return {
            projectId: '',
            softwareName: '',
            passable: true,
        }
    },
    methods: {
        checkItemDetail(id) {
            this.$router.push({
                name: 'employeeItemDetail',
                query: { processId: id }
            })
        },
        checkTestReport() {
            this.$router.push(
                {
                    name: 'checkTestReportForm',
                    query: {
                        writable: false,
                        checking: true,
                        processId: this.processId,
                    }
                }
            )
        },
        writeReportVerification() {
            this.$router.push(
                {
                    name: 'reportVerifyForm',
                    query: {
                        writable: true,
                        checking: false,
                        processId: this.processId,
                    }
                }
            )
        },
        complete() {
            this.axios.post('/api/workflow/processes/' + this.processId + '/complete_task?passable=' + this.passable)
                .then(
                    (res) => {
                        if (res.status === 200) {
                            if (this.passable) {
                                this.$message.success("进入下一流程！")
                            }
                            else {
                                this.$message.success("驳回测试报告！")
                            }
                            this.$router.push(
                                {
                                    name: 'employeeItemDetail',
                                    query: { processId: this.processId }
                                }
                            )
                        }
                    },
                    (err) => {
                        if (err.status === 403) {
                            this.$message.warning('指定流程对该用户不可见或当前用户无完成任务权限');
                        }
                        else if (err.status === 404) {
                            this.$message.warning(' 指定流程不存在')
                        }
                        else if (err.status === 460) {
                            this.$message.warning('未满足完成条件')
                        }
                    }
                )
        },
        handleResponse(res) {
            if (res.status === 200) {
                this.projectId = res.data.projectId
                this.softwareName = res.data.title
            }
        },
        handleError(err) {
            if (err.status === 402) {
                alert('指定流程对该用户不可见')
            }
            else if (err.status === 404) {
                alert('指定流程不存在')
            }
        },
    },
    created() {
        this.axios.get('/api/workflow/processes/' + this.processId + '/details').then(this.handleResponse, this.handleError)
    },
    mounted() {
        this.$bus.$on('checkTestReport', (check) => {
            this.passable = check
            this.writeReportVerification()
        })
        this.$bus.$on('submitTestReportVerify', () => {
            this.complete()
        })
    },
    beforeDestroy() {
        this.$bus.$off('checkTestReport')
        this.$bus.$off('submitTestReportVerify')
    }
}
</script>

<style></style>