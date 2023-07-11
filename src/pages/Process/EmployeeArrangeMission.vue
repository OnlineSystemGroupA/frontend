<template>
    <div style="width:94%;">
        <h2>任务分配</h2>
        <h3>项目号:{{ projectId }}</h3>
        <h3>项目名:{{ softwareName }}</h3>
        <el-button type="primary" @click="checkItemDetail(processId)">查看项目详情</el-button>
        <el-button type="primary" @click="arrangeWork()">分配工作人员</el-button>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'EmployeeArrangeMission',
    props: ['processId'],
    data() {
        return {
            projectId: '',
            softwareName: ''
        }
    },
    methods: {
        checkItemDetail(id) {
            this.$router.push({
                name: 'employeeItemDetail',
                query: { processId: id }
            })
        },
        arrangeWork() {
            this.$router.push({
                name: 'workArrangeTable',
                query: {
                    page: 1,
                    processId: this.processId
                }
            })
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
}
</script>

<style></style>