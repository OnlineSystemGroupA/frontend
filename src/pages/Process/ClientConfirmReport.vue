<template>
    <div style="width:94%;">
        <h2>确认测试报告</h2>
        <h3>项目号:{{ projectId }}</h3>
        <h3>项目名:{{ softwareName }}</h3>
        <el-button type="primary" @click="readTestReport">查看测试报告</el-button>
        <el-button type="primary" @click="confirmReport">确认测试报告</el-button>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
export default {
    name: 'ClientConfirmReport',
    props: ['processId'],
    data() {
        return {
            projectId: '',
            softwareName: '',
        }
    },
    methods: {
        readTestReport() {
            this.$router.push({
                name: 'readTestReportForm',
                query: {
                    writable: false,
                    checking: false,
                    processId: this.processId,
                }
            })
        },
        confirmReport() {
            this.$confirm('请确认您已经仔细阅读了测试报告', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
                center: true
            }).then(() => {
                this.complete()
                this.$message({
                    type: 'success',
                    message: '确认成功!'
                });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消操作'
                });
            });

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