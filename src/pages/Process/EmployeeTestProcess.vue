<template>
    <div style="width:90%;">
        <h2>项目测验过程</h2>
        <h3>项目号:{{ processId }}</h3>
        <el-button type="primary" @click="checkItemDetail(processId)">查看项目详情</el-button>
        <el-button type="primary" @click="writeTestRecord">填写测试记录</el-button>
        <el-button type="primary" @click="writeTestProblem">填写测试问题表</el-button>
        <el-button type="primary" @click="writeTestReport">填写测试报告</el-button>
        <el-button type="primary" @click="complete">完成流程</el-button>
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
        return {}
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
                        this.$message.warning(err.data)
                    }
                )
        }
    }
};
</script>

<style></style>