<template>
    <div style="width:94%;">
        <h2>测试计划审核</h2>
        <h3>项目号:{{ projectId }}</h3>
        <h3>项目名:{{ softwareName }}</h3>
        <el-button type="primary" @click="checkItemDetail(processId)">查看项目详情</el-button>
        <el-button type="priamry" @click="checkTestPlan">查看测试计划</el-button>
        <el-button type="priamry" @click="verfiyTestPlan">填写审核表格</el-button>
        <el-button @click="complete" type="primary">完成流程</el-button>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
export default {
    name: 'EmployeeVerifyTestPlan',
    data() {
        return {
            projectId: '',
            softwareName: '',
        }
    },
    props: ['processId'],
    methods: {
        checkItemDetail(id) {
            this.$router.push({
                name: 'employeeItemDetail',
                query: { processId: id }
            })
        },
        checkTestPlan() {
            this.$router.push({
                name: 'checkTestPlanForm',
                query: {
                    writable: false,
                    checking: true,
                    processId: this.processId,
                }
            })
        },
        verfiyTestPlan() {
            this.$router.push({
                name: 'testPlanVerifyForm',
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