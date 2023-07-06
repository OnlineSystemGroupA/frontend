<template>
    <div style="width:90%;">
        <h2>任务分配</h2>
        <h3>项目号:{{ processId }}</h3>
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
        return {}
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
                    processId:this.processId
                }
            })
        }
    }
}
</script>

<style></style>