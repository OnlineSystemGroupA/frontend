<template>
    <div style="width:94%;">
        <h2>审核测试报告</h2>
        <h3>项目号:{{ projectId }}</h3>
        <h3>项目名:{{ softwareName }}</h3>
        <el-button type="primary" @click="checkItemDetail(processId)">查看项目详情</el-button>
        <el-button type="primary" @click="checkTestReport">查看测试报告</el-button>
        <el-button @click="complete" type="primary">完成流程</el-button>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'ClientVerifyTestReport',
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
                name: 'clientItemDetail',
                query: { processId: id }
            })
        },
        checkTestReport() {
            this.$router.push(
                {
                    name: 'clientCheckTestReportForm',
                    query: {
                        writable: false,
                        checking: true,
                        processId: this.processId,
                    }
                }
            )
        },
        complete() {
            this.axios.post('/api/workflow/processes/' + this.processId + '/complete_task')
                .then(
                    (res) => {
                        if (res.status === 200) {
                            this.$message.success("进入下一流程！")
                            this.$router.push(
                                {
                                    name: 'clientItemDetail',
                                    query: { processId: this.processId }
                                }
                            )
                        }
                    },
                    (err) => {
                        this.$message.warning(err.data)
                    }
                )
        },
        handleError(err) {
            if (err.status === 402) {
                alert('指定流程对该用户不可见')
            }
            else if (err.status === 404) {
                alert('指定流程不存在')
            }
        },
        handleResponse(res) {
            if (res.status === 200) {
                this.projectId = res.data.projectId
                this.softwareName = res.data.title
            }
        },

    },
    created() {
        this.axios.get('/api/workflow/processes/' + this.processId + '/details').then(this.handleResponse, this.handleError)
    },
}
</script>

<style></style>