<template>
    <div style="width:94%;">
        <h2>修改测试报告</h2>
        <h3>项目号:{{ projectId }}</h3>
        <h3>项目名:{{ softwareName }}</h3>
        <el-button type="primary" @click="checkItemDetail(processId)">查看项目详情</el-button>
        <el-button type="primary" @click="editTestReportForm">修改测试报告</el-button>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
export default {
    name: "EmployeeEditTestReport",
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
        editTestReportForm() {
            this.$router.push({
                name: 'editTestReportForm',
                query: {
                    writable: true,
                    checking: false,
                    processId: this.processId,
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
                alert('指定流程对该用户不可见')
            }
            else if (err.status === 404) {
                alert('指定流程不存在')
            }
        },
    },
    created() {
        this.axios.get('/api/workflow/processes/' + this.processId + '/details').then(this.handleResponse, this.handleError)
    }
}
</script>

<style></style>