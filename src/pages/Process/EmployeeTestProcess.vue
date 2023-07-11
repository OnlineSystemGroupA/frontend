<template>
    <div style="width:94%;">
        <h2>项目测验过程</h2>
        <h3>项目号:{{ projectId }}</h3>
        <h3>项目名:{{ softwareName }}</h3>
        <el-button type="primary" @click="checkItemDetail(processId)">查看项目详情</el-button>
        <el-button type="primary" @click="writeTestRecord">填写测试记录</el-button>
        <el-button type="primary" @click="writeTestProblem">填写测试问题表</el-button>
        <el-button type="primary" @click="writeTestReport">填写测试报告</el-button>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
export default {
    name: "EmployeeTestProcess",
    props: ['processId'],
    data() {
        return {
            projectId: '',
            softwareName: '',
        }
    },
    methods: {
        checkItemDetail(id) {
            this.$router.push({
                name: 'employeeItemDetail',
                query: { processId: id }
            })
        },
        writeTestRecord() {
            this.$router.push({
                name: 'testRecordsForm',
                query: {
                    writable: true,
                    checking: false,
                    processId: this.processId,
                }
            })
        },
        writeTestProblem() {
            this.$router.push({
                name: 'testProblemForm',
                query: {
                    writable: true,
                    checking: false,
                    processId: this.processId,
                }
            })
        },
        writeTestReport() {
            this.$router.push({
                name: 'testReportForm',
                query: {
                    writable: true,
                    checking: false,
                    processId: this.processId,
                }
            })
        },
        complete() {
            this.axios.post('/api/workflow/processes/' + this.processId + '/complete_task')
                .then(
                    (res) => {
                        if (res.status === 200) {
                            this.$message.success("进入下一流程！")
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
                this.$message.error('指定流程对该用户不可见')
            }
            else if (err.status === 404) {
                this.$message.error('指定流程不存在')
            }
        },
    },
    created() {
        this.axios.get('/api/workflow/processes/' + this.processId + '/details').then(this.handleResponse, this.handleError)
    },
    mounted() {
        this.$bus.$on('submitTestReport', () => {
            this.complete()
        })
    },
    beforeDestroy() {
        this.$bus.$off('submitTestReport')
    }
};
</script>

<style></style>